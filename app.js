var block = document.body
var button= document.getElementById("butter")
console.log(button);
button.onclick=()=>{
  button.style.backgroundColor="transparent"
  button.style.color="black"
  button.innerHTML="Thank you for shopping with us"
  button.style.fontSize="24px"
  button.style.width="410px"
}