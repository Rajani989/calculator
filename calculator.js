function clr()
{
  document.getElementById("cal").value = ""
 }
 function solve()
 {
    let num=document.getElementById("cal").value
    let output=eval(num)
    document.getElementById("cal").value=output
 }
