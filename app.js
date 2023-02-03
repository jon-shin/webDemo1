function myFunction(){
    let i = 0;
    while(i < 5){
        console.log("ICE CREAM " + (i+1));
        i++;
    }
}

function iceCream(){
    let flavor = document.getElementById("iceCream");
    let value = flavor.value;
    let elem = document.getElementById("circle");
    if(value == "vanilla"){
        elem.style.backgroundColor = "white";
    }
    else if(value == "chocolate"){
        elem.style.backgroundColor = "brown";
    }
    else if(value == "strawberry"){
        elem.style.backgroundColor = "pink";
    }
    else{
        elem.style.backgroundColor = "lightgreen";
    } 
}

function finishAndPay(){
    let flavor = document.getElementById("iceCream");
    let value = flavor.value;
    let cost = 0.00;
    if(value == "vanilla"){
        cost += 1;
    }
    else if(value == "chocolate"){
        cost += 1.50;
    }
    else if(value == "strawberry"){
        cost += 1.50;
    }
    else if(value == "mint"){
        cost += 2;
    }
    
    let sprinkles = document.getElementById("sprinkles");
    if(sprinkles.checked){
        cost += 0.25;
    }
    let hf = document.getElementById("hot fudge");
    if(hf.checked){
        cost += 1.5;
    }
    let nuts = document.getElementById("peanuts");
    if(nuts.checked){
        cost += .25;
    }
    let cc = document.getElementById("chocolate chips");
    if(cc.checked){
        cost += .75;
    }
    alert("The price is $" + cost); 
}