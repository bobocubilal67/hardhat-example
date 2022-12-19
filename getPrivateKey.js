async function main() {
    // keystore - Paste the keystore associated with the account below 
    var keystore = '{"address":"7ef5a6135f1fd6a02593eedc869c6d41d934aef8","crypto":{"cipher":"aes-128-ctr","ciphertext":"1d0839166e7a15b9c1333fc865d69858b22df26815ccf601b28219b6192974e1","cipherparams":{"iv":"8df6caa7ff1b00c4e871f002cb7921ed"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":8,"p":16,"r":8,"salt":"e5e6ef3f4ea695f496b643ebd3f75c0aa58ef4070e90c80c5d3fb0241bf1595c"},"mac":"6d16dfde774845e4585357f24bce530528bc69f4f84e1e22880d34fa45c273e5"},"id":"950077c7-71e3-4c44-a4a1-143919141ed4","version":3}'

    // provider_url - URL to the node in which you want to deploy along with the right port  associated 
    var provider_url = "http://127.0.0.1:8576/" // For Ex: http://localhost:8610 for a local cyprus1 node

    var Web3 = require("@quainetwork/web3");
    var web3 = new Web3(provider_url);

    const PRIVATE_KEY = web3.eth.accounts.decrypt(keystore, "").privateKey;
    console.log("Private Key", PRIVATE_KEY);
}
main();