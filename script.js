var bill, noOfPeople, service;

function init(){
    document.querySelector("#totalTip").style.display = "none";
}

init();

//var tipValue = bill * (tip/100);
//var finalBill = bill + tipValue;


document.querySelector("#calcuate").addEventListener('click', function(){

    bill = document.getElementById("billamt").value;
    noOfPeople = document.getElementById("peopleamt").value;
    service = document.getElementById("serviceQual").value;
    

    /*if(bill=== " " || service == 0){
        alert("Please enter a number");
        return;
    };

    if(noOfPeople === " " || noOfPeople <= 1){
        noOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }

    else{
        document.getElementById("each").style.display = "block";
    };
    */
    var tipAmount = (bill * service) / noOfPeople;
    
    //Round to two decimal places
    tipAmount = Math.round(tipAmount * 100) / 100;
    tipAmount = tipAmount.toFixed(2);

    //Display Tip
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = tipAmount;

}


);