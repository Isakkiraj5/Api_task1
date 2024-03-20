
btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
  value=document.getElementById("number").value;
  if(value){
    url=`https://picsum.photos/${value}/${value}`
    col=document.getElementById("col")
    col.innerHTML=`<img src=${url} width=100%>`
  }
  else{
    alert("enter the value")
  }

})