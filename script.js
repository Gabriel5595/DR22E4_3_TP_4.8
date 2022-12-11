
function pegarD() {
const empresa = document.querySelector("#empresa").value
const fundacao = document.querySelector("#fund").value
const email = document.querySelector("#email").value
const descrit = document.querySelector("#descrit").value
  let form = {
    empresa: empresa,
    fundacao: fundacao,
    email: email,
    descrit : descrit
  }
  console.log(form);
}
