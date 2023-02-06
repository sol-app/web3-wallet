const initialize = () => {

    const prvkey = document.getElementById('prvkey');
    const pubkey = document.getElementById('pubkey');
    const inputs = document.getElementById('inputs');
    const recovering = document.getElementById('recovering');
    recovering.addEventListener('click', () => {
        let mnemonic = inputs.value;
        let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
        prvkey.innerHTML = mnemonicWallet.privateKey;
        pubkey.innerHTML = mnemonicWallet.address;
    });

}
window.addEventListener('DOMContentLoaded', initialize);


