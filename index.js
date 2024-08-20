function cm(){
    let a=Number(document.getElementById("one").value);
    let b=(a*2.54).toFixed(3);
    document.getElementById("result").textContent=b+"CM";
    document.getElementById("result").style.color="green";
}
function In(){
    let a=Number(document.getElementById("two").value);
    let b=(a/2.54).toFixed(3);
    document.getElementById("result").textContent=b+"In";
      document.getElementById("result").style.color="green";
}
