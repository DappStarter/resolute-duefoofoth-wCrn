require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain modify grace cricket swift soap'; 
let testAccounts = [
"0xbcaf289f7161a38afeb1f81ec392273b8ec00aa319d04a6afb951cab3f5421f6",
"0x3d1cac93f49845a7b7c77321bc87de0e3cd00dc78c6a442d91f735c1755281ef",
"0x256fefb00c30e868d2b9eaae1823bd3a94854f30f28330c6a033312e2ed61d28",
"0x7f4cee47a5f6d7dba2b7304fd5d51845c85f967340d7352dafe7fd8a62ff1680",
"0xc7c97eedf61be042a1719e1dd167e31669c2b20e254b317dd34c1c682d35fef8",
"0x3f5345e4368685720f666b4003ced0ef321cf78a4d83d907f8ae37f82b84df06",
"0x4c03b01028abae7cbe3950c6800cacca8e177e5ea18c90a55120b203f7e55511",
"0x50bb824093e3a7cea8093851cea5af655cc151157a22ae4c335c96e7f4e68534",
"0x4489e3000d5f0c4870b5d16609005ad992f6f41e2656c03b50879a521ef49efd",
"0xea7fc888fb0c484b6f3fd9c0d5a4a1d9f97c00f2ce3b5cf18f73c9955fd8eaf6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


