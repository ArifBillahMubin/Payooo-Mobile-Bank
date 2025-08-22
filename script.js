// login js functionality
document.getElementById("login-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const mobileNumber = "01405428933";
        const pinNumber = 1234;

        const mobileNumberValue = document.getElementById("mobile-number").value;

        const pinNumberValue = document.getElementById("pin-number").value; 
        const pinNumberConvert = parseInt(pinNumberValue);

        if(mobileNumberValue === mobileNumber && pinNumberConvert === pinNumber){
            window.location.href= "./home.html"
        }else{
            alert("invalid phone number or pin number")
        }

    })