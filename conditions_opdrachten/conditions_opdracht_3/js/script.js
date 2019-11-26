//javascript code
function check(){
    var saldo = document.getElementById("saldo").value;
    if (saldo==500){
    document.getElementById("tekst").innerHTML = "Er is salaris gestort";
    } else if (saldo>500) {
        document.getElementById("tekst").innerHTML= "Er is salaris met bonus gestort";
    } else  {
        document.getElementById("tekst").innerHTML= "Er is geen salaris gestort";
    }
}
