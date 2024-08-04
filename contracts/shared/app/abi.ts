// prettier-ignore
export const ethDriveAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "erc6551Registry_",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "accountImplementaton_",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "payable": false,
    "gas": null
  },
  {
    "type": "event",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "approved",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "Approval",
    "anonymous": false
  },
  {
    "type": "event",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "operator",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "approved",
        "type": "bool",
        "baseType": "bool",
        "indexed": false,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "ApprovalForAll",
    "anonymous": false
  },
  {
    "type": "event",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "baseType": "string",
        "indexed": false,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "CreateRegistry",
    "anonymous": false
  },
  {
    "type": "event",
    "inputs": [
      {
        "name": "previousOwner",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "newOwner",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "OwnershipTransferred",
    "anonymous": false
  },
  {
    "type": "event",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "to",
        "type": "address",
        "baseType": "address",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "indexed": true,
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "Transfer",
    "anonymous": false
  },
  {
    "type": "function",
    "inputs": [],
    "name": "accountImplementaton",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "approve",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "balanceOf",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "createDirectory",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "createdDirectories",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "directoryStrings",
        "type": "string[]",
        "baseType": "array",
        "components": null,
        "arrayLength": -1,
        "arrayChildren": {
          "name": "",
          "type": "string",
          "baseType": "string",
          "components": null,
          "arrayLength": null,
          "arrayChildren": null
        }
      }
    ],
    "name": "encodeDirectoryPath",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "pure",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "erc6551Registry",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "getApproved",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "getTokenBoundAccountFromTokenId",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "path",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "getTokenIdFromPath",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "pure",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "operator",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "isApprovedForAll",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "baseType": "bool",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "isCreated",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "baseType": "bool",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "name",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "owner",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "ownerOf",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "renounceOwnership",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "to",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "safeTransferFrom",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "to",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "_data",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "safeTransferFrom",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "approved",
        "type": "bool",
        "baseType": "bool",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "setApprovalForAll",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "supportsInterface",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "baseType": "bool",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "symbol",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "tokenURI",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "string",
        "baseType": "string",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "to",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "tokenId",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "transferFrom",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "newOwner",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "transferOwnership",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  }
] as const;

// prettier-ignore
export const ethDriveAccountAbi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "anEntryPoint",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "cachedOwner",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "cacheOwner",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "entryPoint",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "value",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "data",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "execute",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "to",
        "type": "address[]",
        "baseType": "array",
        "components": null,
        "arrayLength": -1,
        "arrayChildren": {
          "name": "",
          "type": "address",
          "baseType": "address",
          "components": null,
          "arrayLength": null,
          "arrayChildren": null
        }
      },
      {
        "name": "value",
        "type": "uint256[]",
        "baseType": "array",
        "components": null,
        "arrayLength": -1,
        "arrayChildren": {
          "name": "",
          "type": "uint256",
          "baseType": "uint256",
          "components": null,
          "arrayLength": null,
          "arrayChildren": null
        }
      },
      {
        "name": "data",
        "type": "bytes[]",
        "baseType": "array",
        "components": null,
        "arrayLength": -1,
        "arrayChildren": {
          "name": "",
          "type": "bytes",
          "baseType": "bytes",
          "components": null,
          "arrayLength": null,
          "arrayChildren": null
        }
      }
    ],
    "name": "executeBatch",
    "constant": false,
    "outputs": [],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "getNonce",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32",
        "baseType": "bytes32",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "signature",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "isValidSignature",
    "constant": true,
    "outputs": [
      {
        "name": "magicValue",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "signer",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "isValidSigner",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "uint256[]",
        "baseType": "array",
        "components": null,
        "arrayLength": -1,
        "arrayChildren": {
          "name": "",
          "type": "uint256",
          "baseType": "uint256",
          "components": null,
          "arrayLength": null,
          "arrayChildren": null
        }
      },
      {
        "name": "",
        "type": "uint256[]",
        "baseType": "array",
        "components": null,
        "arrayLength": -1,
        "arrayChildren": {
          "name": "",
          "type": "uint256",
          "baseType": "uint256",
          "components": null,
          "arrayLength": null,
          "arrayChildren": null
        }
      },
      {
        "name": "",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "onERC1155BatchReceived",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "pure",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "onERC1155Received",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "pure",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "bytes",
        "baseType": "bytes",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "onERC721Received",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "pure",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "owner",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "state",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "baseType": "bytes4",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "supportsInterface",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "baseType": "bool",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [],
    "name": "token",
    "constant": true,
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "address",
        "baseType": "address",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "view",
    "payable": false,
    "gas": null
  },
  {
    "type": "function",
    "inputs": [
      {
        "name": "userOp",
        "type": "tuple",
        "baseType": "tuple",
        "components": [
          {
            "name": "sender",
            "type": "address",
            "baseType": "address",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "nonce",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "initCode",
            "type": "bytes",
            "baseType": "bytes",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "callData",
            "type": "bytes",
            "baseType": "bytes",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "callGasLimit",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "verificationGasLimit",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "preVerificationGas",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "maxFeePerGas",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "maxPriorityFeePerGas",
            "type": "uint256",
            "baseType": "uint256",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "paymasterAndData",
            "type": "bytes",
            "baseType": "bytes",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          },
          {
            "name": "signature",
            "type": "bytes",
            "baseType": "bytes",
            "components": null,
            "arrayLength": null,
            "arrayChildren": null
          }
        ],
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "userOpHash",
        "type": "bytes32",
        "baseType": "bytes32",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      },
      {
        "name": "missingAccountFunds",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "name": "validateUserOp",
    "constant": false,
    "outputs": [
      {
        "name": "validationData",
        "type": "uint256",
        "baseType": "uint256",
        "components": null,
        "arrayLength": null,
        "arrayChildren": null
      }
    ],
    "stateMutability": "nonpayable",
    "payable": false,
    "gas": null
  },
  {
    "type": "fallback",
    "inputs": [],
    "payable": true
  }
] as const;
