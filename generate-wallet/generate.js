const initialize = () => {

    const prvkey = document.getElementById('prvkey');
    const pubkey = document.getElementById('pubkey');
    const nemonic = document.getElementById('nemonic');

    document.querySelector(".crt").style.visibility = "hidden";

    const generate = document.getElementById('generate');
    generate.addEventListener('click', () => {
        document.querySelector(".crt").style.visibility = "visible";
        const Nwallet = ethers.Wallet.createRandom();
        pubkey.innerHTML = Nwallet.address; // public key
        prvkey.innerHTML = Nwallet.privateKey; // private key
        nemonic.innerHTML = Nwallet.mnemonic.phrase; // nmemonic
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

