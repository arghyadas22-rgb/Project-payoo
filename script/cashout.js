document.getElementById("Cashout-btn").addEventListener("click", function(){
    // 1--get the number & cheak the validation
    const cashoutNumberInput = document.getElementById("Cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    // 2--get the amount & validation & convert to number

    const cashoutAmountInput = document.getElementById("Cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    // 3--get the current balance & validation & convert to number

    const balanceElement = document.getElementById("balance");
    const balanceAmountEl = balanceElement.innerText;
    console.log(balanceAmountEl);
    // 4--calculate the new balance

    const newBalance = Number(balanceAmountEl) - Number(cashoutAmount);
    

    if(newBalance < 0){
        alert("Insufficent Amount");
        return
    }
    console.log("New Balance",newBalance);
    // 5--get the pin & verify

    const CashoutpinInput = document.getElementById("Cashout-pin");
    const pin = CashoutpinInput.value;

    // 5-1--true:: show an alart > set a new balance

    if(pin == '1234'){
        alert("Cashout successfull")
        balanceElement.innerText = newBalance;
    }else{
        alert("Invalid pin")
    }return;

     
    // 5-2--falsw:: show anerror alart > return 
})