//Secret message
const secretMessage = document.getElementById('secretMessage')
secretMessage.textContent = localStorage.getItem("It's a secret to everybody.") ||''

const btnSecretMessage = document.getElementById('btnSecretMessage')
btnSecretMessage.addEventListener('click', () => {
   const message = "The treasure is buried beneath the tree with the red leaves."
   localStorage.setItem("It's a secret to everybody.", message)
   
});
