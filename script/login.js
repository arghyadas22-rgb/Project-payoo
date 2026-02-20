document.getElementById("login-btn").addEventListener("click", function(){
    //1.. get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNunber = numberInput.value;
    console.log(contactNunber);
    // 2..get the pin input
    const pinInput = document.getElementById("input-pin");
    const pinNumber = pinInput.value;
    console.log(pinNumber)
    // 3..match pin && number
    if(contactNunber == "01771427064" && pinNumber == 1234){

            // 4..true >> alert >>homepage
        alert("login Success");

        window.location.assign("home.html")

    }else{

            // 5..false >> alert >>return
        alert("login Failed");
        return;
    }
    
    
})