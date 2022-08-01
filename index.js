function calcLove() {
    var yourName = document.querySelectorAll("input")[0].value
    var otherName = document.querySelectorAll("input")[3].value
    
    var loveCalc = Math.random();
    loveCalc = Math.floor(loveCalc*100) + 1;

     if (loveCalc >= 80 ){  
        document.getElementById("demo").innerHTML = "The love score between " + yourName + " and " + otherName + " is " + loveCalc + "% Wow, your love will flourish like a tree planted by the rivers of water. You are a match made in heaven.Congrats" 
    ;
    }
    if (loveCalc >= 50 && loveCalc < 80) {
        document.getElementById("demo").innerHTML = "The love score between "+ yourName  + " and " + otherName + " is "+ loveCalc + "%. There is a chance of something good happening between you two. Fight for what you have if its worth the fight. Good luck"
         ;
    }
    
    if (loveCalc >= 30 && loveCalc < 50) {
        document.getElementById("demo").innerHTML = "The love score between "+ yourName  + " and " + otherName + " is "+ loveCalc + "%. Your love is not totally hopeless but it will take a lot of work and energy. Keep Fighting"
         ;
    }
    if (loveCalc < 30 ) {
        document.getElementById("demo").innerHTML = "The love score between " +yourName + " and " + otherName + " is "+ loveCalc + "%. Sorry, but your love is as likely to bear fruit as a mango tree planted in the Sahara desert.Keep searching"
     ;
    }
    return;
}


 
 


