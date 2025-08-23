const pin = 1234;

// add money feature
document.getElementById("add-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const selectBank = document.getElementById("select-bank").value;

        const accountNumber = document.getElementById("account-num").value;

        const addAmount = parseInt(document.getElementById("add-amount").value);

        const pinNumber = parseInt(document.getElementById("pin-number").value);

        const availableBalance = parseInt(document.getElementById("available-balance").innerText);
        console.log(selectBank)

        if (selectBank === "Select a Bank") {
            alert("Please select a bank")
            return;
        }

        if (accountNumber.length !== 11) {
            alert("Please enter valid account number")
            return;
        }

        if (pinNumber !== pin) {
            alert("Please enter valid pin number")
            return;
        }

        const newTotalAvailableBalance = addAmount + availableBalance;

        document.getElementById("available-balance").innerText = newTotalAvailableBalance;
    })

// cash out feature
document.getElementById("withdraw-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const accountNumber = document.getElementById("cash-out-account-num").value;

        const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);

        const pinNumber = parseInt(document.getElementById("cash-out-pin-number").value);

        const availableBalance = parseInt(document.getElementById("available-balance").innerText);

        console.log(accountNumber,withdrawAmount,pinNumber,availableBalance)
        if (accountNumber.length !== 11) {
            alert("Please enter valid account number")
            return;
        }

        if (pinNumber !== pin) {
            alert("Please enter valid pin number")
            return;
        }
        
        const newAvailableBalance = availableBalance - withdrawAmount;

        document.getElementById("available-balance").innerText = newAvailableBalance

        
    })

// toggling
document.getElementById("add-btn")
    .addEventListener("click",function(){
        document.getElementById("cash-out-from-container").style.display = "none"
        
        document.getElementById("add-money-from-container").style.display = "block"

        // button color togool
        document.getElementById("add-btn").style.borderColor = "#0874F2"
        document.getElementById("add-btn").style.backgroundColor = "rgba(8, 116, 242, 0.05)"

        document.getElementById("cash-out-btn").style.borderColor = "rgba(8, 8, 8, 0.1)"
        document.getElementById("cash-out-btn").style.backgroundColor = "transparent"
        
    })

document.getElementById("cash-out-btn")
    .addEventListener("click", function () {
        document.getElementById("cash-out-from-container").style.display = "block"

        document.getElementById("add-money-from-container").style.display = "none"

        // button color togool
        document.getElementById("cash-out-btn").style.borderColor = "#0874F2"

        document.getElementById("cash-out-btn").style.backgroundColor = "rgba(8, 116, 242, 0.05)"

        document.getElementById("add-btn").style.borderColor = "rgba(8, 8, 8, 0.1)"
        document.getElementById("add-btn").style.backgroundColor = "transparent"

    })

// Logout 

document.getElementById("log-out").addEventListener("click",function(){
    window.location.href ="./index.html"
})