"use client";

import React, { useState, useEffect } from "react";
import { Plus, User } from "lucide-react";
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

import { useWriteContract } from "wagmi";

import { ethDriveAbi } from "@/lib/ethdrive/abi";
import { buildRecursiveDirectoryQuery } from "@/lib/ethdrive/query";

import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const MAX_DEPTH = 5;

interface Directory {
  id: string;
  tokenId: string;
  tokenBountAccount: string;
  holder: string;
  subdirectories: Directory[];
  depth: number;
}

export function EthDrive({ path }: { path: string }) {
  const segments = path.split("/").filter((segment) => segment);

  const { writeContract } = useWriteContract();

  const { data } = useQuery(gql(buildRecursiveDirectoryQuery(MAX_DEPTH)));
  const [directories, setDirectories] = useState<Directory[]>([]);
  const [directoryName, setDirectoryName] = useState("");

  const [isCreateDirectoryModalOpen, setIsCreateDirectoryModalOpen] =
    useState(false);

  useEffect(() => {}, [data]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <Link href="/">
          <h1 className="text-2xl font-semibold">EthDrive</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => {
              setIsCreateDirectoryModalOpen(true);
            }}
          >
            <Plus className="mr-2 h-4 w-4" /> New
          </Button>
          <User className="h-8 w-8 cursor-pointer" />
        </div>
      </header>

      <ScrollArea className="p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              {segments.length !== 0 ? (
                <BreadcrumbLink href="/">Root</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>Root</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {segments.map((segment, i) => {
              const href = "/" + segments.slice(0, i + 1).join("/");
              return (
                <React.Fragment key={i}>
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                  <BreadcrumbItem>
                    {i < segments.length - 1 ? (
                      <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{segment}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </ScrollArea>

      <Dialog
        open={isCreateDirectoryModalOpen}
        onOpenChange={setIsCreateDirectoryModalOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Directory</DialogTitle>
          </DialogHeader>
          <Input
            placeholder={`Enter directory name`}
            value={directoryName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDirectoryName(e.target.value)
            }
          />
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateDirectoryModalOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                writeContract({
                  abi: ethDriveAbi,
                  address: "0x889F47AA12e02C1FC8a3f313Ac8f5e8BbCD9EAa5",
                  functionName: "createDirectory",
                  args: [directoryName],
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
