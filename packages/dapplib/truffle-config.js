require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture story crawl remain prosper hard light army giant'; 
let testAccounts = [
"0xb5c7879546d1c855e443971e588f8e74eef27185421722ff447035052e0741dc",
"0xc4c9f0b84285f9a351b767b481225867159774b939f3ee565543732347019f25",
"0x8ab2012e9657c62c99c917d0f5fed066620a1dbf41e6c5f6d783acebf462b414",
"0x416ed0fb45b269762e6b8d63dddca595654c2c3e8872345912ce04e95eb6119e",
"0xc8ae724aa11085e2eac30dec155d70fbdf09773573736a00fe1a13658b19928b",
"0xd5ffdf422eff60443cf2f9539f732bfea881481fc6c2cfe09f34aa0d96977a7d",
"0x6004322e2e19c884f64365e689337a05933ad009116bfb919f739fedbd7f1ae5",
"0x28187557393809c315f2f7f81337794a128a178d37e5c0c46cf5efdbabc95738",
"0x56e3d4f64a53ed3b36d21177cc1b73626fce5e916aa7a86093365c0d48bfba94",
"0x32dbcfab12c56c4c88073f80208c67449d03195beb808bca4c829a47e5d57b67"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

