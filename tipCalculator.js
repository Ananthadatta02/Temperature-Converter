function calculatePercentage(){
    var amount = document.getElementById("amount").value;
    var percentage = document.getElementById("percent").value;
    var tipAmount = (amount*percentage)/100;
    var answer = Number(amount)+tipAmount;
    document.getElementById("totalValue").innerHTML = answer
}