//javascript code
function achtergrond(){ 
var getal = (document.getElementById("getal").value);

    
    if(getal<50){ 
        document.getElementById("body").style.backgroundColor = "blue";


        
    }else if(getal==50){
            document.getElementById("body").style.backgroundColor = "red";
    }
    else{
        document.getElementById("body").style.backgroundColor = "green";
    }
    

}