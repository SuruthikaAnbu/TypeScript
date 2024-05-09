"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let cNO = 1;
let currentUserCardNumber;
let currentUserName;
const travelHistorytablebody = document.querySelector("#traveldata tbody");
const ticketDetailsBody = document.querySelector('#ticketData tbody');
//adding default user details
// let userDetailsList:Array<UserDetalis>=new Array<UserDetalis>();
// userDetailsList.push(new UserDetalis("Ravi",9848849494,1000));
// userDetailsList.push(new UserDetalis("Baskaran",9948854321,100));
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
    return __awaiter(this, void 0, void 0, function* () {
        let sn = document.getElementById('signinid');
        sn.style.display = "none";
        let mb = document.getElementById('menubarid');
        mb.style.display = "block";
        let cardnumber = document.getElementById('cardnumber').value;
        const userDetailsList = yield fetchUser();
        for (let i = 0; i < userDetailsList.length; i++) {
            if (userDetailsList[i].cardNumber == +cardnumber) {
                alert("sign in successfully!!!");
                currentUserCardNumber = userDetailsList[i].cardNumber;
                currentUserName = userDetailsList[i].userName;
            }
        }
    });
}
//signout
function signOutfun() {
    let name = document.getElementById('name').value;
    let pNumber = document.getElementById('phone').value;
    let bal = document.getElementById('balance').value;
    //userDetailsList.push(new UserDetalis(name,+pNumber,+bal));
    const user1 = {
        //id: -1,
        cardNumber: 0,
        userName: name,
        phoneNumber: +pNumber,
        balance: +bal
    };
    addUser(user1);
    let greet = document.getElementById('cardgreet');
    greet.innerHTML = `<h3>your metro card number is!!! ${cNO}</h3>`;
    alert("signup successfully");
}
//balance check
function balanceCheckfun() {
    return __awaiter(this, void 0, void 0, function* () {
        const recEle = document.getElementById('rechargeID');
        recEle.style.display = "none";
        const travelEle = document.getElementById('travelID');
        travelEle.style.display = "none";
        const ticEle = document.getElementById('ticketID');
        ticEle.style.display = "none";
        const userDetailsList = yield fetchUser();
        for (let i = 0; i < userDetailsList.length; i++) {
            if (currentUserCardNumber == userDetailsList[i].cardNumber) {
                alert(userDetailsList[i].balance);
            }
        }
    });
}
//Recharge
function recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        alert('recharge');
        const recEle = document.getElementById('rechargeID');
        recEle.style.display = "block";
        const travelEle = document.getElementById('travelID');
        travelEle.style.display = "none";
        const ticEle = document.getElementById('ticketID');
        ticEle.style.display = "none";
        let amount = document.getElementById('amount').value;
        const userDetailsList = yield fetchUser();
        for (let i = 0; i < userDetailsList.length; i++) {
            if (currentUserCardNumber == userDetailsList[i].cardNumber) {
                // alert("im in recharge for loop");
                let amt = Number(amount);
                userDetailsList[i].balance = userDetailsList[i].balance + amt;
                let amountShow = document.getElementById("displayAmount");
                updateRecharge(currentUserCardNumber, userDetailsList[i].balance);
                amountShow.innerHTML = `<h1> your current balance is ${userDetailsList[i].balance}`;
                break;
            }
        }
    });
}
//travel history details
let tID = 100;
//creating List
// let TravelHistoryList:Array<TravelHistory>=new Array<TravelHistory>();
// TravelHistoryList.push(new TravelHistory(1000,"Airport","Egmore","10/10/2023",55))
// TravelHistoryList.push(new TravelHistory(1000,"Egmore","Koyembedu","10/10/2023",32))
// TravelHistoryList.push(new TravelHistory(1001,"Alandur","Koyembedu","10/10/2023",25))
// TravelHistoryList.push(new travelHistory(1001,"Egmore","Thirumangalam","10/10/2023",25))
//ticket fair list
let nticketID = 5000;
// let TicketFairList:Array<TicketFair>=new Array<TicketFair>();
// TicketFairList.push(new TicketFair("Airport","Egmore",55));
// TicketFairList.push(new TicketFair("Airport","Koyembedu",25));
// TicketFairList.push(new TicketFair("Alandur","Koyembedu",25));
// TicketFairList.push(new TicketFair("Koyembedu","Egmore",32));
// TicketFairList.push(new TicketFair("Vadapalani","Egmore",45));
// TicketFairList.push(new TicketFair("Arumbakkam","Egmore",25));
// TicketFairList.push(new TicketFair("Vadapalani","Koyembedu",25));
// TicketFairList.push(new TicketFair("Arumbakkam","Koyembedu",16));
//view travel history
function viewTravelHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const recEle = document.getElementById('rechargeID');
        recEle.style.display = "none";
        const travelEle = document.getElementById('travelID');
        travelEle.style.display = "block";
        const ticEle = document.getElementById('ticketID');
        ticEle.style.display = "none";
        travelHistorytablebody.innerHTML = "";
        const TravelHistoryList = yield fetchTravel();
        for (let i = 0; i < TravelHistoryList.length; i++) {
            if (currentUserCardNumber == TravelHistoryList[i].cardNumber) {
                const row = document.createElement("tr");
                row.innerHTML =
                    `<td>${TravelHistoryList[i].travelID}</td>
            <td>${TravelHistoryList[i].ticketID}</td>
            <td>${TravelHistoryList[i].cardNumber}</td>
            <td>${TravelHistoryList[i].fromLocation}</td>
            <td>${TravelHistoryList[i].toLocation}</td>
            <td>${TravelHistoryList[i].date}</td>
            <td>${TravelHistoryList[i].travelCost}</td>
            `;
                travelHistorytablebody.appendChild(row);
            }
        }
    });
}
//ticket fair details
function ticketFairDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const recEle = document.getElementById('rechargeID');
        recEle.style.display = "none";
        const travelEle = document.getElementById('travelID');
        travelEle.style.display = "none";
        const ticEle = document.getElementById('ticketID');
        ticEle.style.display = "block";
        // alert("im in");
        const TicketFairList = yield fetchTicket();
        ticketDetailsBody.innerHTML = "";
        for (let i = 0; i < TicketFairList.length; i++) {
            const row = document.createElement("tr");
            row.innerHTML =
                `
        
        <td>${TicketFairList[i].ticketID}</td>
        <td>${TicketFairList[i].fromLocation}</td>
        <td>${TicketFairList[i].toLocation}</td>
        <td>${TicketFairList[i].fair}</td>
        <td><button onclick="bookticket(${TicketFairList[i].ticketID})">book</button></td>
        <td><button onclick="deleteTicket(${TicketFairList[i].ticketID})">delete</button></td>
        `;
            ticketDetailsBody.appendChild(row);
        }
    });
}
function deleteTicket(ticID) {
    deleteTravel(ticID);
    viewTravelHistory();
    //alert(ticID);
}
function bookticket(ticID) {
    return __awaiter(this, void 0, void 0, function* () {
        const userDetailsList = yield fetchUser();
        // alert("ia m in book ticket");
        for (let i = 0; i < userDetailsList.length; i++) {
            // alert(1);
            if (currentUserCardNumber == userDetailsList[i].cardNumber) {
                // alert(2);
                const TicketFairList = yield fetchTicket();
                for (let j = 0; j < TicketFairList.length; j++) {
                    if (ticID == TicketFairList[j].ticketID) {
                        if (userDetailsList[i].balance >= TicketFairList[j].fair) {
                            alert("sufficient balance");
                            let from = TicketFairList[j].fromLocation;
                            let to = TicketFairList[j].toLocation;
                            let tikID = TicketFairList[j].ticketID;
                            userDetailsList[i].balance -= TicketFairList[j].fair;
                            updateRecharge(currentUserCardNumber, userDetailsList[i].balance);
                            const todayDate = getTodayDate();
                            //TravelHistoryList.push(new TravelHistory(currentUserCardNumber,from,to,todayDate,TicketFairList[j].fair));
                            const travel1 = {
                                travelID: 0,
                                ticketID: tikID,
                                cardNumber: currentUserCardNumber,
                                fromLocation: from,
                                toLocation: to,
                                date: todayDate,
                                travelCost: TicketFairList[j].fair
                            };
                            addTravel(travel1);
                            alert("booked successfully");
                        }
                    }
                }
            }
        }
    });
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
//post
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5177/api/UserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to Add Contacts');
        }
    });
}
function addTravel(travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5177/api/TravelHistory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to Add Travel');
        }
    });
}
function addTicket(ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5177/api/TicketFair', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to Add Ticket');
        }
    });
}
//update
function updateTicket(id, ticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/TicketFair/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        });
        if (!response.ok) {
            throw new Error('Failed to update Ticket');
        }
    });
}
function updateTravel(id, travel) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/TravelHistory/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel)
        });
        if (!response.ok) {
            throw new Error('Failed to update Travel');
        }
    });
}
//recharge
function updateRecharge(id, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/UserDetails/${id}/${amount}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(amount)
        });
        if (!response.ok) {
            throw new Error('Failed to update Travel');
        }
    });
}
//delete
function deleteTravel(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5177/api/TravelHistory/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
    });
}
//fetch
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiURL = 'http://localhost:5177/api/UserDetails';
        const response = yield fetch(apiURL);
        if (!response.ok) {
            throw new Error('Failed to Add Contacts');
        }
        return yield response.json();
    });
}
function fetchTravel() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiURL = 'http://localhost:5177/api/TravelHistory';
        const response = yield fetch(apiURL);
        if (!response.ok) {
            throw new Error('Failed to Add Travel');
        }
        return yield response.json();
    });
}
function fetchTicket() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiURL = 'http://localhost:5177/api/TicketFair';
        const response = yield fetch(apiURL);
        if (!response.ok) {
            throw new Error('Failed to Add Contacts');
        }
        return yield response.json();
    });
}
// const user1: UserDetails = {
//     //id: -1,
//     cardNumber:-1,
//     userName:name,
//     phoneNumber:pNumber,
//     balance:bal
// };
//cardNumber:number;
// userName:string;
// phoneNumber:number;
// balance:number;
// let name=(document.getElementById('name') as HTMLInputElement).value;
// let pNumber=(document.getElementById('phone') as HTMLInputElement).value;
// let bal=(document.getElementById('balance') as HTMLInputElement).value;
//updateContact(editingId, contact);
//contacts.dob.split('T'[0].split('-').reverse().join('/'))
