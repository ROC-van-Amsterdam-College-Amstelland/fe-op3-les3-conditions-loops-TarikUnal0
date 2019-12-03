//javascript code
var i;
var tekst="";

for (let i = 20; i >0; i--) {
    tekst += i + "<br>";
    console.log(i);

}

document.getElementById("uitvoer").innerHTML=tekst;