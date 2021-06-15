function checkdata(){
    //create references to the input elements we wish to validate
    var nbrtoval = document.getElementById("principal");
        //Check if nbrtoval is positive and more than 0
        if(nbrtoval.value < 1){
            alert("Enter a positive number");
            nbrtoval.focus();
            return false;
          }
        //If all is well return true.
        alert("Valid number")
        return true;
         }
function updateRate() 
    {
        var rateval = document.getElementById("rate").value; 
        document.getElementById("rate_val").innerText=rateval;
    }   
function compute()
{ 
    var principal = document.getElementById("principal").value;
    principalh = principal.replace(principal, '<span style="background-color:yellow;">' + principal + '</span>'); 
    var rate = document.getElementById("rate").value;
    rateh = rate.replace(rate, '<span style="background-color:yellow;">' + rate + '</span>');
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit " + principalh + ",\<br\>at an interest rate of "+rateh+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}