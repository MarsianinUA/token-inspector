const ethers = require('ethers');
const ABI = require('./abis/ERC20.abi.json');

const TOKEN_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const RPC_URL = 'https://eth.llamarpc.com';

(async () => {
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const contract = new ethers.Contract(TOKEN_ADDRESS, ABI, provider);
    const symbol = await contract.symbol();

    console.log(symbol);
})()