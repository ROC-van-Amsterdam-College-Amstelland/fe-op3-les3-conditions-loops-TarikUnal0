//javascript code
var i;
var tekst="";

for (let i = 1; i <=5; i++) {
        tekst += i + "<br>";
        console.log(i);

}

document.getElementById("uitvoer").innerHTML=tekst;