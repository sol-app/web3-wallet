const initialize = () => {
    const prvkey = document.getElementById('prvkey');
    const pubkey = document.getElementById('pubkey');
    const nemonic = document.getElementById('nemonic');
    const prvkey2 = document.getElementById('prvkey2');
    const pubkey2 = document.getElementById('pubkey2');

    const generate = document.getElementById('generate');
    const generate2 = document.getElementById('generate2');

    document.querySelector("#nested").style.visibility = "hidden";

    const Nwallet = ethers.Wallet.createRandom();
    let node = ethers.utils.HDNode.fromMnemonic(Nwallet.mnemonic.phrase);

    generate.addEventListener('click', () => {
        pubkey.innerHTML = Nwallet.address; // public key
        prvkey.innerHTML = Nwallet.privateKey; // private key
        nemonic.innerHTML = Nwallet.mnemonic.phrase; // nmemonic

        let phras = ethers.utils.mnemonicToSeed(Nwallet.mnemonic.phrase);
        console.log("mnemonic to seed: ", phras);

        let entropy = ethers.utils.mnemonicToEntropy(Nwallet.mnemonic.phrase);
        console.log("entropy: ", entropy); // Convert a mnemonic phrase to its entropy, according to BIP-39.
    });

    generate2.addEventListener('click', () => {

        pubkey2.innerHTML = node.address; // public key
        prvkey2.innerHTML = node.privateKey; // private key
        nemonic.innerHTML = node.mnemonic.phrase; // nmemonic

        document.querySelector("#nested").style.visibility = "visible";

        console.log(`
        address: ${node.address}\n
        chain code: ${node.chainCode}\n
        finger print: ${node.fingerprint}\n
        finger print: ${node.parentFingerprint}\n
        private key: ${node.privateKey}\n
        public key: ${node.publicKey}\n
        extended key: ${node.extendedKey}\n
        depth: ${node.depth}\n
        index: ${node.index}\n
        mnemonic phrase: ${node.mnemonic.phrase}\n
        mnemonic path: ${node.mnemonic.path}\n
        mnemonic locale: ${node.mnemonic.locale}\n
        `);
    });

    const wal1 = document.getElementById('wal1');
    generateNestedWallet.addEventListener('click', () => {
        node.neuter(); // remove 1st hdw private...

        let text = "";
        for (let i = 0; i < 5; i++) {
            let j = i + 1;
            const derivedNode = node.derivePath(`m/13'/11'/0'/${i}`);
            text += `<label class="list-group-item rounded-3 py-2" for="listGroupCheckableRadios${j}">public key ${j}<span id="" class="d-block small opacity-75 lead">` + derivedNode.address + "</span><span>";
            text += `<br />private key ${j}<span id="" class="d-block small opacity-75">` + derivedNode.privateKey + "</span></label>";
            text += '<hr>';
            document.querySelector("#generateNestedWallet").style.visibility = "hidden";
        }
        text += '<div class="mb-5"></div>';
        document.getElementById("wal1").innerHTML = text;

        document.getElementById('created').innerHTML = "5 nested wallet has been created";
    });

    function brakechain() {
        var a;
        a = document.getElementById("brakechain");
        a.innerHTML = "&#xf0c1;";
        setTimeout(function () {
            a.innerHTML = "&#xf127;";
          }, 1000);
      }
      brakechain();
      setInterval(brakechain, 2000);

}
window.addEventListener('DOMContentLoaded', initialize);
