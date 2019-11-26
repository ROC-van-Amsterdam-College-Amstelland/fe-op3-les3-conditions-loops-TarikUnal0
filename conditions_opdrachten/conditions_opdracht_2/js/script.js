//javascript code
function check(){
    var saldo = document.getElementById("saldo").value;
    if (saldo<25) {
       document.getElementById("tekst").innerHTML = "Uw saldo is te laag"
    } else{
        document.getElementById("tekst").innerHTML= "Je hebt voldoende saldo om € 25 op te nemen.";
    }
}