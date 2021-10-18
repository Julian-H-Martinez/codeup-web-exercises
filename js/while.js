"use strict";
(function(){
    var x = 2;
    while(x < 70000){
        console.log(x);
        x *= 2;
    }
    var numConesToSell = Math.floor(Math.random()*50)+50;
    console.log(numConesToSell);
    do{
        var numConesBoughtByCusto = Math.floor(Math.random()*5)+1;
        numConesToSell -= numConesBoughtByCusto;
        if(numConesBoughtByCusto < numConesToSell){
            console.log(`${numConesBoughtByCusto} cones sold...`);
            //  output should be random num 1-5 that were sold (if enough cones)
        }else if(numConesToSell === 0){
            console.log(`Yay! I sold them all!`);
            //  output "Yay! I sold them all!" (if no more cones are left)
        }else {
            console.log(`Cannot sell you ${numConesBoughtByCusto} cones I only have ${numConesToSell}...`);
            //  output "Cannot sell you 6 cones I only have x... (if not enough cones)
        }
    }while(numConesBoughtByCusto < numConesToSell);
})();