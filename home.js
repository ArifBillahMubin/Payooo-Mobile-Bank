const pin = 1234;
const transactionData = [];
console.log(transactionData);
// try to reusable code 

// get string value
function getValue(str) {
    result = document.getElementById(str).value;
    return result;
}

// get integer value
function getIntValue(str) {
    const result = parseInt(document.getElementById(str).value);
    return result;
}

// get int inner text
function getInnerText(str) {
    const result = parseInt(document.getElementById(str).innerText);
    return result;
}

// set inner text
function setInnerText(str1, value) {
    const setText = document.getElementById(str1);
    setText.innerText = value;
}

// toggle functionality 

// form toggle
function toggle(value) {
    const forms = document.getElementsByClassName("form");
    for (let form of forms) {
        form.style.display = "none"
    }
    document.getElementById(value).style.display = "block"
}

// form button active color toggle 
function toggleActive(value) {
    const active = document.getElementsByClassName("active-btn");
    for (let btn of active) {
        btn.style.borderColor = "rgba(8, 8, 8, 0.1)"
        btn.style.backgroundColor = "transparent"
    }

    document.getElementById(value).style.borderColor = "#0874F2"
    document.getElementById(value).style.backgroundColor = "rgba(8, 116, 242, 0.05)"
}


// add money feature
document.getElementById("add-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const selectBank = getValue("select-bank");

        const accountNumber = getValue("account-num");

        const addAmount = getIntValue("add-amount");

        const pinNumber = getIntValue("pin-number");

        const availableBalance = getInnerText("available-balance");

        if (selectBank === "Select a Bank") {
            alert("Please select a bank")
            return;
        }

        if (accountNumber.length !== 11) {
            alert("Please enter valid account number")
            return;
        }

        if (addAmount === NaN) {
            alert("Please input integer amount");
            return;
        }

        if (pinNumber !== pin) {
            alert("Please enter valid pin number")
            return;
        }

        const newTotalAvailableBalance = addAmount + availableBalance;

        setInnerText("available-balance", newTotalAvailableBalance);

        const data = {
            name: "Add money",
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);
        console.log(transactionData);
    })



// cash out feature
document.getElementById("withdraw-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const accountNumber = getValue("cash-out-account-num");

        const withdrawAmount = getIntValue("withdraw-amount");

        const pinNumber = getIntValue("cash-out-pin-number");

        const availableBalance = getInnerText("available-balance");


        if (accountNumber.length !== 11) {
            alert("Please enter valid account number")
            return;
        }

        if (withdrawAmount === NaN) {
            alert("Please input integer amount");
            return;
        }

        if (pinNumber !== pin) {
            alert("Please enter valid pin number")
            return;
        }

        const newAvailableBalance = availableBalance - withdrawAmount;

        setInnerText("available-balance", newAvailableBalance);

        const data = {
            name: "Cash Out",
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);
        console.log(transactionData);

    })

// send money feature
document.getElementById("send-money-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const accountNumber = getValue("send-account-number");
        const sendAmount = getIntValue("send-amount");
        const pinNumber = getIntValue("send-pin-number");
        const availableBalance = getInnerText("available-balance");
        console.log(sendAmount);

        if (accountNumber.length !== 11) {
            alert("Please enter valid account number")
            return;
        }

        if (sendAmount === NaN) {
            alert("Please input integer amount");
            return;
        }

        if (pinNumber !== pin) {
            alert("Please enter valid pin number")
            return;
        }

        const newAvailableBalance = availableBalance - sendAmount;

        setInnerText("available-balance", newAvailableBalance);

        const data = {
            name: "TransferMoney",
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);
        console.log(transactionData);
    })

// get bonus feature
document.getElementById("get-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const coupon = "abtech_09"

        const couponNumber = getValue("coupon-number");

        const availableBalance = getInnerText("available-balance");

        if (couponNumber !== coupon) {
            alert("invalid coupon")
            return;
        }
        const newAvailableBalance = availableBalance + 1000;

        setInnerText("available-balance", newAvailableBalance);

        alert("Congratulation....... 1000BDT add your account")
        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);
        console.log(transactionData);
    })

// pay bill feature
document.getElementById("pay-btn")
    .addEventListener("click", function (e) {
        e.preventDefault();
        const selectBack = getValue("select-back");
        const accountNumber = getValue("pay-bill-account-number");
        const pinNumber = getIntValue("pay-bill-pin-number");
        const amount = getIntValue("pay-amount");
        const availableBalance = getInnerText("available-balance");

        if (selectBack === "Select a Bank") {
            alert("Please select a bank")
            return;
        }

        if (accountNumber.length !== 11) {
            alert("Please enter valid account number")
            return;
        }

        if (amount === NaN) {
            alert("Please input integer amount");
            return;
        }

        if (pinNumber !== pin) {
            alert("Please enter valid pin number")
            return;
        }

        const newTotalAvailableBalance = availableBalance - amount;


        setInnerText("available-balance", newTotalAvailableBalance);
        alert(amount + "payment successfully done...");

        const data = {
            name: selectBack,
            date: new Date().toLocaleDateString()
        };

        transactionData.push(data);
        console.log(transactionData);

    })

// transition show feature 
document.getElementById("transaction-btn")
    .addEventListener("click", function () {
        const parent = document.getElementById("transaction-container");
        document.getElementById("transaction-container").innerText = "";
        
        for(let data of transactionData){
            const div = document.createElement("div");

            div.innerHTML = `
            <div class="flex justify-between p-4 mt-3 items-center  bg-white  rounded-xl">
                <div class="flex gap-2 items-center">
                    <div class="rounded-full bg-[#f4f5f7]  w-[40px] p-2">
                        <img src="./assets/wallet1.png" alt="" class="w-[100%]">
                    </div>
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p class="text-gray-500">${data.date}</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical text-gray-800"></i>
                </div>
            </div>
        `
        parent.appendChild(div);
        }      
    })



// toggling
document.getElementById("add-btn")
    .addEventListener("click", function () {
        toggle("add-money-from-container");

        // button color togool
        toggleActive("add-btn");

    })

document.getElementById("cash-out-btn")
    .addEventListener("click", function () {
        toggle("cash-out-from-container");

        // button color togool
        toggleActive("cash-out-btn");

    })

document.getElementById("transfer-money-btn")
    .addEventListener("click", function () {
        toggle("Transfer-money-container");

        // button color togool
        toggleActive("transfer-money-btn");
    })

document.getElementById("get-bonus-btn")
    .addEventListener("click", function () {
        toggle("get-bonus-container");

        // button color togool
        toggleActive("get-bonus-btn");
    })

document.getElementById("pay-bill-btn")
    .addEventListener("click", function () {
        toggle("pay-bill-from-container");

        toggleActive("pay-bill-btn");
    })

document.getElementById("transaction-btn")
    .addEventListener("click", function () {
        toggle("transaction-container");

        toggleActive("transaction-btn");
    })


// Logout 

document.getElementById("log-out").addEventListener("click", function () {
    window.location.href = "./index.html"
})