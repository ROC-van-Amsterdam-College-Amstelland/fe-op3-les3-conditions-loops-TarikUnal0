//javascript code
var i;
var tekst="";
for (let i = 1; i <=100; i++) {
    rest = i % 3;
    vijf = i % 5;
    if (rest == 0) {
        tekst += i + "VET <br>";
        
    }  else if ( vijf == 0) {
       tekst += i + "COOL <br>";
    } else {
        tekst += i + "<br>";
    }
 

}
  

document.getElementById("uitvoer").innerHTML=tekst;