export const TRANSACTETHER_CONTRACT_ADDRESS = "0x4990f7720e49B4220A7b8EB5deb100bD2b39fDeE";
export const abi = [
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "val",
                "type": "uint256"
            }
        ],
        "name": "sendViaCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];