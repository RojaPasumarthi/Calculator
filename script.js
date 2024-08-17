function display(value)
{
    if(document.getElementById("digits").value ==='0')
        digits.display=value;
    document.getElementById("digits").value += value;  
}

function resetValue()
{
    document.getElementById("digits").value = "";
}
function solve()
{ 
    try{

        let x = document.getElementById("digits").value ;
        let y = math.evaluate(x);
      
        let result=Math.round(y * 100) / 100;
        document.getElementById("digits").value = result ;
    }
    catch(error)
    {
        alert("invalid Expression")
    }

}


const deleteButton=document.querySelector("#delete");
let inputValue=""

deleteButton.addEventListener("click",() =>{
  inputValue = document.getElementById("digits").value.slice(0,-1)
  document.getElementById("digits").value =inputValue;
})