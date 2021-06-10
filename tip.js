// TIP CALCULATOR
    resultPlaceHolder = document.getElementById("answer");
    resultPlaceHolder.style.display = "none";  //Hide the tip amount on load

function tipCalculator(){
    const billAmount = parseFloat(document.getElementById("total-bill-amount").value);
    const serviceQuality = parseFloat(document.getElementById("service-quality").value);
    const numOfPeople = parseInt(document.getElementById("number-of-people").value);

   var percent=(serviceQuality/100)*billAmount;
   var billPerPerson=(billAmount/numOfPeople);


     // validate input
     if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }

    // Check if the number of people value is empty or less than or equal to 1
    if (isNaN(numOfPeople) || numOfPeople < 1){
        alert("Please Check Number of People");
        return;
    }


// Calculation of Tip
    var totalTip = percent;

    const tipPerPerson = totalTip/numOfPeople;
    const totalBill = billPerPerson + tipPerPerson;

    document.getElementById("actual-bill").innerHTML = "&#36;" + billAmount;
    document.getElementById("total-bill").innerHTML = "&#36;" + totalBill;
    document.getElementById("tip-per-person").innerHTML = "&#36;" + tipPerPerson;
    document.getElementById("total-tip").innerHTML = "&#36;" + totalTip; // display the tip amount
    document.getElementById("answer").style.display = "block"; // display the answer place
}

// click to call the function
document.getElementById("calculate").onclick = function() {
    tipCalculator();
};
