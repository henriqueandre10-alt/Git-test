function bto1(){
  const input = document.getElementById("input");
  const svg1 = document.getElementById("svg1");

  if(input.type === "password"){
    input.type = "text";
    svg1.textContent = "🙃"
  }
  else{
    input.type = "password"
    svg1.textContent = "😁"
  }
}