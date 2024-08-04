"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Folder, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  useAccount,
  usePublicClient,
  useWalletClient,
  useWriteContract,
  useConfig,
} from "wagmi";

import { readContract } from "@wagmi/core";

import { Address, encodeFunctionData, toHex, zeroAddress } from "viem";

import Link from "next/link";
import Image from "next/image";

import { Directory as DirectoryType } from "@/types/directory";

import { Directory } from "@/components/Directory";
import { Card } from "@/components/ui/card";

import { request } from "@/lib/alchemy";
import { dummySignature } from "@/lib/constant";
import { entryPointAbi } from "../../../contracts/shared/app/external-abi";
import { entryPointAddress } from "../../../contracts/shared/external-contract";
import { useDeployedAddresses } from "@/hooks/useDeployed";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import {
  ethDriveAbi,
  ethDriveAccountAbi,
} from "../../../contracts/shared/app/abi";
import { useRootDirectory } from "@/hooks/useRootDirectory";

export function EthDrive() {
  const config = useConfig();
  const { writeContract } = useWriteContract();
  const { isConnected, chainId, chain } = useAccount();

  const { deployedAddresses } = useDeployedAddresses(chain?.id);

  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const { rootDirectory } = useRootDirectory();

  const [selectedDirectoryPath, setSelectedDirectoryPath] =
    useState<string>("root");
  const [selectedDirectory, setSelectedDirectory] =
    useState<DirectoryType | null>(rootDirectory);

  const segments = useMemo(() => {
    return selectedDirectoryPath.split("/").filter((segment) => segment);
  }, [selectedDirectoryPath]);

  const [isCreateDirectoryModalOpen, setIsCreateDirectoryModalOpen] =
    useState(false);
  const [createDirectoryName, setCreateDirectoryName] = useState("");

  console.log("root", rootDirectory);

  useEffect(() => {
    const findDirectory = (
      dir: DirectoryType,
      path: string[]
    ): DirectoryType | null => {
      if (path.length === 0) return dir;
      const [currentSegment, ...remainingPath] = path;
      const subDir = dir.subdirectories.find((d) => d.name === currentSegment);
      return subDir ? findDirectory(subDir, remainingPath) : null;
    };

    const pathSegments = selectedDirectoryPath.split("/").slice(1);
    const foundDirectory = findDirectory(rootDirectory, pathSegments);
    setSelectedDirectory(foundDirectory);
  }, [selectedDirectoryPath, rootDirectory]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="logo" width="32" height="32" />
            <h1 className="hidden lg:block text-2xl font-semibold">EthDrive</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          {isConnected && (
            <Button onClick={() => setIsCreateDirectoryModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> New
            </Button>
          )}
          <ConnectButton
            accountStatus="avatar"
            chainStatus="name"
            showBalance={false}
          />
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden">
        <div className="w-80 border-r">
          <div className="h-full p-4 space-y-4">
            <Directory
              directory={rootDirectory}
              onSelected={setSelectedDirectoryPath}
            />
          </div>
        </div>

        <ScrollArea className="p-4 w-full">
          <div className="flex justify-between items-center mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                {segments.map((segment, i) => {
                  const fullPath = segments.slice(0, i + 1).join("/");

                  return (
                    <React.Fragment key={`breadcrumb_${i}`}>
                      {i > 0 && <BreadcrumbSeparator>/</BreadcrumbSeparator>}
                      <BreadcrumbItem>
                        {i < segments.length - 1 ? (
                          <BreadcrumbLink
                            onClick={() => setSelectedDirectoryPath(fullPath)}
                            className="cursor-pointer"
                          >
                            {segment}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{segment}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>

            <Button
              onClick={async () => {
                if (!chainId) {
                  throw new Error("chainId is not defined");
                }
                if (!walletClient) {
                  throw new Error("walletClient is not defined");
                }
                if (!publicClient) {
                  throw new Error("publicClient is not defined");
                }
                if (!deployedAddresses) {
                  throw new Error("deployedAddresses is not defined");
                }
                if (!selectedDirectory) {
                  throw new Error("selectedDirectory is not defined");
                }
                const sender = selectedDirectory.tokenBoundAccount as Address;
                const nonce = await readContract(config, {
                  abi: ethDriveAccountAbi,
                  address: sender,
                  functionName: "getNonce",
                  args: [],
                });
                // TODO: use actual callData
                const callData = encodeFunctionData({
                  abi: ethDriveAccountAbi,
                  functionName: "execute",
                  args: [zeroAddress, BigInt(0), "0x"],
                });
                const latestBlock = await publicClient.getBlock();
                const baseFeePerGas = latestBlock.baseFeePerGas || BigInt(0);
                const { result: maxPriorityFeePerGas } = await request(
                  "eth-sepolia",
                  "rundler_maxPriorityFeePerGas",
                  []
                );
                const maxFeePerGas =
                  baseFeePerGas + BigInt(maxPriorityFeePerGas);
                const partialUserOperation = {
                  sender,
                  nonce: toHex(nonce),
                  initCode: "0x",
                  callData: callData,
                  maxFeePerGas: toHex(maxFeePerGas),
                  maxPriorityFeePerGas: maxPriorityFeePerGas,
                  paymasterAndData: deployedAddresses.ethDrivePaymaster,
                  signature: dummySignature,
                };
                const {
                  result: {
                    callGasLimit,
                    preVerificationGas,
                    verificationGasLimit,
                  },
                } = await request(
                  "eth-sepolia",
                  "eth_estimateUserOperationGas",
                  [partialUserOperation, entryPointAddress]
                );
                const userOperation = {
                  ...partialUserOperation,
                  callGasLimit,
                  preVerificationGas,
                  verificationGasLimit,
                } as any;
                const userOpHash = await readContract(config, {
                  abi: entryPointAbi,
                  address: entryPointAddress,
                  functionName: "getUserOpHash",
                  args: [userOperation],
                });
                const signature = await walletClient.signMessage({
                  message: { raw: userOpHash },
                });
                userOperation.signature = signature;
                console.log("userOperation", userOperation);
                const sendUserOperationRes = await request(
                  "eth-sepolia",
                  "eth_sendUserOperation",
                  [userOperation, entryPointAddress]
                );
                console.log("sendUserOperationRes", sendUserOperationRes);
              }}
            >
              Test
            </Button>
          </div>
          <div>
            {selectedDirectory.subdirectories.map((directory) => (
              <Card
                key={directory.path}
                className="flex items-center p-2 cursor-pointer w-full mb-2"
                onClick={() => setSelectedDirectoryPath(directory.path)}
              >
                <Folder className="h-4 w-4 mr-2" />
                <span>{directory.name}</span>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Dialog
        open={isCreateDirectoryModalOpen}
        onOpenChange={setIsCreateDirectoryModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Directory</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Enter directory name"
            value={createDirectoryName}
            onChange={(e) => setCreateDirectoryName(e.target.value)}
          />
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsCreateDirectoryModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (!deployedAddresses) {
                  throw new Error("deployedAddresses is not defined");
                }

                writeContract({
                  abi: ethDriveAbi,
                  address: deployedAddresses.ethDrive,
                  functionName: "createDirectory",
                  args: [createDirectoryName],
                });
              }}
            >
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
