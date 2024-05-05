"use strict";
let CNO = 1000;
let currentUserCardNumber;
let currentUserName;
const travelHistorytablebody = document.querySelector("#traveldata tbody");
const ticketDetailsBody = document.querySelector('#ticketData tbody');
class userDetalis {
    constructor(uName, pNumber, balance) {
        this.cardNumber = CNO++;
        this.userName = uName;
        this.phoneNumber = pNumber;
        this.Balance = balance;
    }
}
//adding default user details
let userDetailsList = new Array();
userDetailsList.push(new userDetalis("Ravi", 9848849494, 1000));
userDetailsList.push(new userDetalis("Baskaran", 9948854321, 100));
//signInvisible
function viewSignIn() {
    let sn = document.getElementById('signinid');
    sn.style.display = "block";
    let su = document.getElementById('signupId');
    su.style.display = "none";
    let main = document.getElementById('main2');
    main.style.display = "none";
}
//signup visible
function viewSignUp() {
    let su = document.getElementById('signupId');
    su.style.display = "block";
    let main = document.getElementById('main2');
    main.style.display = "none";
}
//signIn
function signInfun() {
    let sn = document.getElementById('signinid');
    sn.style.display = "none";
    let mb = document.getElementById('menubarid');
    mb.style.display = "block";
    let cardnumber = document.getElementById('cardnumber').value;
    for (let i = 0; i < userDetailsList.length; i++) {
        if (userDetailsList[i].cardNumber == +cardnumber) {
            alert("sign in successfully!!!");
            currentUserCardNumber = userDetailsList[i].cardNumber;
            currentUserName = userDetailsList[i].userName;
        }
    }
}
//signout
function signOutfun() {
    let name = document.getElementById('name').value;
    let pNumber = document.getElementById('phone').value;
    let bal = document.getElementById('balance').value;
    userDetailsList.push(new userDetalis(name, +pNumber, +bal));
    let greet = document.getElementById('cardgreet');
    greet.innerHTML = `<h3>your metro card number is!!! ${CNO}</h3>`;
    alert("signup successfully");
}
//balance check
function BalanceCheckfun() {
    const recEle = document.getElementById('rechargeID');
    recEle.style.display = "none";
    const travelEle = document.getElementById('travelID');
    travelEle.style.display = "none";
    const ticEle = document.getElementById('ticketID');
    ticEle.style.display = "none";
    for (let i = 0; i < userDetailsList.length; i++) {
        if (currentUserCardNumber == userDetailsList[i].cardNumber) {
            alert(userDetailsList[i].Balance);
        }
    }
}
//Recharge
function Recharge() {
    const recEle = document.getElementById('rechargeID');
    recEle.style.display = "block";
    const travelEle = document.getElementById('travelID');
    travelEle.style.display = "none";
    const ticEle = document.getElementById('ticketID');
    ticEle.style.display = "none";
    let amount = document.getElementById('amount').value;
    for (let i = 0; i < userDetailsList.length; i++) {
        if (currentUserCardNumber == userDetailsList[i].cardNumber) {
            let amt = +amount;
            userDetailsList[i].Balance = userDetailsList[i].Balance + amt;
            let amountShow = document.getElementById("displayAmount");
            amountShow.innerHTML = `<h1> your current balance is ${userDetailsList[i].Balance}`;
        }
    }
}
//travel history details
let TID = 100;
class travelHistory {
    constructor(cardnumber, fromLocation, toLocation, date, travelCost) {
        this.TravelID = TID++;
        this.CardNumber = cardnumber;
        this.FromLocatiom = fromLocation;
        this.ToLocation = toLocation;
        this.Date = date;
        this.TravelCost = travelCost;
    }
}
//creating List
let TravelHistoryList = new Array();
TravelHistoryList.push(new travelHistory(1000, "Airport", "Egmore", "10/10/2023", 55));
TravelHistoryList.push(new travelHistory(1000, "Egmore", "Koyembedu", "10/10/2023", 32));
TravelHistoryList.push(new travelHistory(1001, "Alandur", "Koyembedu", "10/10/2023", 25));
TravelHistoryList.push(new travelHistory(1001, "Egmore", "Thirumangalam", "10/10/2023", 25));
//ticket fair list
let TicketID = 5000;
class TicketFair {
    constructor(fromLocation, toLocation, fair) {
        this.TicketID = TicketID++;
        this.FromLocation = fromLocation;
        this.ToLocation = toLocation;
        this.Fair = fair;
    }
}
let TicketFairList = new Array();
TicketFairList.push(new TicketFair("Airport", "Egmore", 55));
TicketFairList.push(new TicketFair("Airport", "Koyembedu", 25));
TicketFairList.push(new TicketFair("Alandur", "Koyembedu", 25));
TicketFairList.push(new TicketFair("Koyembedu", "Egmore", 32));
TicketFairList.push(new TicketFair("Vadapalani", "Egmore", 45));
TicketFairList.push(new TicketFair("Arumbakkam", "Egmore", 25));
TicketFairList.push(new TicketFair("Vadapalani", "Koyembedu", 25));
TicketFairList.push(new TicketFair("Arumbakkam", "Koyembedu", 16));
//view travel history
function viewTravelHistory() {
    const recEle = document.getElementById('rechargeID');
    recEle.style.display = "none";
    const travelEle = document.getElementById('travelID');
    travelEle.style.display = "block";
    const ticEle = document.getElementById('ticketID');
    ticEle.style.display = "none";
    travelHistorytablebody.innerHTML = "";
    for (let i = 0; i < TravelHistoryList.length; i++) {
        if (currentUserCardNumber == TravelHistoryList[i].CardNumber) {
            const row = document.createElement("tr");
            row.innerHTML =
                `<td>${TravelHistoryList[i].TravelID}</td>
            <td>${TravelHistoryList[i].CardNumber}</td>
            <td>${TravelHistoryList[i].FromLocatiom}</td>
            <td>${TravelHistoryList[i].ToLocation}</td>
            <td>${TravelHistoryList[i].Date}</td>
            <td>${TravelHistoryList[i].TravelCost}</td>
            `;
            travelHistorytablebody.appendChild(row);
        }
    }
}
//ticket fair details
function ticketFairDetails() {
    const recEle = document.getElementById('rechargeID');
    recEle.style.display = "none";
    const travelEle = document.getElementById('travelID');
    travelEle.style.display = "none";
    const ticEle = document.getElementById('ticketID');
    ticEle.style.display = "block";
    // alert("im in");
    ticketDetailsBody.innerHTML = "";
    for (let i = 0; i < TicketFairList.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML =
            `
        <td>${TicketFairList[i].TicketID}</td>
        <td>${TicketFairList[i].FromLocation}</td>
        <td>${TicketFairList[i].ToLocation}</td>
        <td>${TicketFairList[i].Fair}</td>
        <td><button onclick="bookticket(${TicketFairList[i].TicketID})">book</button></td>
        `;
        ticketDetailsBody.appendChild(row);
    }
}
function bookticket(ticID) {
    alert("ia m in book ticket");
    for (let i = 0; i < userDetailsList.length; i++) {
        // alert(1);
        if (currentUserCardNumber == userDetailsList[i].cardNumber) {
            // alert(2);
            for (let j = 0; j < TicketFairList.length; j++) {
                if (ticID == TicketFairList[j].TicketID) {
                    if (userDetailsList[i].Balance >= TicketFairList[j].Fair) {
                        alert("sufficient balance");
                        let from = TicketFairList[j].FromLocation;
                        let to = TicketFairList[j].ToLocation;
                        userDetailsList[i].Balance -= TicketFairList[j].Fair;
                        const todayDate = getTodayDate();
                        TravelHistoryList.push(new travelHistory(currentUserCardNumber, from, to, todayDate, TicketFairList[j].Fair));
                        alert("booked successfully");
                    }
                }
            }
        }
    }
}
function getTodayDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const formatedDay = day < 10 ? '0' + day : '' + day;
    const formatedMonth = month < 10 ? '0' + month : '' + month;
    return `${formatedDay}/${formatedMonth}/${year}`;
}
function exitvis() {
    let fin = document.getElementById('exitdiv');
    fin.style.display = "block";
    let greet = document.getElementById('exitGreet');
    greet.innerHTML = `<h3>Thank you!!! ${currentUserName}</h3>`;
}
function exit() {
    let fin = document.getElementById('exitdiv');
    fin.style.display = "none";
    const recEle = document.getElementById('rechargeID');
    recEle.style.display = "none";
    const travelEle = document.getElementById('travelID');
    travelEle.style.display = "none";
    const ticEle = document.getElementById('ticketID');
    ticEle.style.display = "none";
    let sn = document.getElementById('signinid');
    sn.style.display = "none";
    let su = document.getElementById('signupId');
    su.style.display = "none";
    let mb = document.getElementById('menubarid');
    mb.style.display = "none";
    let main = document.getElementById('main2');
    main.style.display = "block";
}
//back to home
function backtohome() {
}
//get reference to all button element
const recEle = document.getElementById('rechargeID');
const travelEle = document.getElementById('travelID');
const ticEle = document.getElementById('ticketID');
