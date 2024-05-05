let CNO=1000;
let currentUserCardNumber:number;
let currentUserName:string;
const travelHistorytablebody=document.querySelector("#traveldata tbody") as HTMLTableSectionElement;
const ticketDetailsBody=document.querySelector('#ticketData tbody') as HTMLTableSectionElement;
class userDetalis
{
    cardNumber:number;
    userName:string;
    phoneNumber:number;
    Balance:number;
    constructor(uName:string,pNumber:number,balance:number)
    {
        this.cardNumber=CNO++;
        this.userName=uName;
        this.phoneNumber=pNumber;
        this.Balance=balance;
    }
}
//adding default user details
let userDetailsList:Array<userDetalis>=new Array<userDetalis>();
userDetailsList.push(new userDetalis("Ravi",9848849494,1000));
userDetailsList.push(new userDetalis("Baskaran",9948854321,100));
//signInvisible
function viewSignIn()
{
    let sn=document.getElementById('signinid') as HTMLDivElement;
    sn.style.display="block";
    let su=document.getElementById('signupId') as HTMLDivElement;
    su.style.display="none";
    let main=document.getElementById('main2')as HTMLDivElement;
    main.style.display="none"
}
//signup visible
function viewSignUp()
{
    let su=document.getElementById('signupId') as HTMLDivElement;
    su.style.display="block";
    let main=document.getElementById('main2')as HTMLDivElement;
    main.style.display="none"
}
//signIn
function signInfun()
{
    let sn=document.getElementById('signinid') as HTMLDivElement;
    sn.style.display="none";
    let mb=document.getElementById('menubarid') as HTMLDivElement;
    mb.style.display="block";
    let cardnumber=(document.getElementById('cardnumber') as HTMLInputElement).value;
    for(let i=0;i<userDetailsList.length;i++)
    {
        if(userDetailsList[i].cardNumber==+cardnumber)
        {
            alert("sign in successfully!!!");
            currentUserCardNumber=userDetailsList[i].cardNumber;
            currentUserName=userDetailsList[i].userName;
        }
    }
}
//signout
function signOutfun()
{
    let name=(document.getElementById('name') as HTMLInputElement).value;
    let pNumber=(document.getElementById('phone') as HTMLInputElement).value;
    let bal=(document.getElementById('balance') as HTMLInputElement).value;
    userDetailsList.push(new userDetalis(name,+pNumber,+bal));
    let greet = document.getElementById('cardgreet') as HTMLLabelElement;
    greet.innerHTML = `<h3>your metro card number is!!! ${CNO}</h3>`;
    alert("signup successfully");

    
}
//balance check
function BalanceCheckfun()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    for(let i=0;i<userDetailsList.length;i++)
    {
        if(currentUserCardNumber==userDetailsList[i].cardNumber)
        {
            alert(userDetailsList[i].Balance);
        }
    }
}
//Recharge
function Recharge()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="block";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    let amount=(document.getElementById('amount') as HTMLInputElement).value;
    for(let i=0;i<userDetailsList.length;i++)
    {
        if(currentUserCardNumber==userDetailsList[i].cardNumber)
        {
            let amt= +amount;
            userDetailsList[i].Balance= userDetailsList[i].Balance+amt;
            let amountShow=document.getElementById("displayAmount") as HTMLDivElement;
            amountShow.innerHTML=`<h1> your current balance is ${userDetailsList[i].Balance}`
        }
    }
}
//travel history details
let TID=100;
class travelHistory
{
    TravelID:number;
    CardNumber:number;
    FromLocatiom:string;
    ToLocation:string;
    Date:string;
    TravelCost:number;
    constructor(cardnumber:number,fromLocation:string,toLocation:string,date:string,travelCost:number)
    {
        this.TravelID=TID++;
        this.CardNumber=cardnumber;
        this.FromLocatiom=fromLocation;
        this.ToLocation=toLocation;
        this.Date=date;
        this.TravelCost=travelCost;
    }
}
//creating List
let TravelHistoryList:Array<travelHistory>=new Array<travelHistory>();
TravelHistoryList.push(new travelHistory(1000,"Airport","Egmore","10/10/2023",55))
TravelHistoryList.push(new travelHistory(1000,"Egmore","Koyembedu","10/10/2023",32))
TravelHistoryList.push(new travelHistory(1001,"Alandur","Koyembedu","10/10/2023",25))
TravelHistoryList.push(new travelHistory(1001,"Egmore","Thirumangalam","10/10/2023",25))
//ticket fair list
let TicketID=5000;
class TicketFair
{
    TicketID :number;
    FromLocation:string;
    ToLocation:string;
    Fair:number;
    constructor(fromLocation:string,toLocation:string,fair:number)
    {
        this.TicketID=TicketID++;
        this.FromLocation=fromLocation;
        this.ToLocation=toLocation;
        this.Fair=fair;
    }
}
let TicketFairList:Array<TicketFair>=new Array<TicketFair>();
TicketFairList.push(new TicketFair("Airport","Egmore",55));
TicketFairList.push(new TicketFair("Airport","Koyembedu",25));
TicketFairList.push(new TicketFair("Alandur","Koyembedu",25));
TicketFairList.push(new TicketFair("Koyembedu","Egmore",32));
TicketFairList.push(new TicketFair("Vadapalani","Egmore",45));
TicketFairList.push(new TicketFair("Arumbakkam","Egmore",25));
TicketFairList.push(new TicketFair("Vadapalani","Koyembedu",25));
TicketFairList.push(new TicketFair("Arumbakkam","Koyembedu",16));
//view travel history
function viewTravelHistory()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="block";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    travelHistorytablebody.innerHTML="";
    for(let i=0;i<TravelHistoryList.length;i++)
    {
        if(currentUserCardNumber==TravelHistoryList[i].CardNumber)
        {
            const row=document.createElement("tr");
            row.innerHTML=
            `<td>${TravelHistoryList[i].TravelID}</td>
            <td>${TravelHistoryList[i].CardNumber}</td>
            <td>${TravelHistoryList[i].FromLocatiom}</td>
            <td>${TravelHistoryList[i].ToLocation}</td>
            <td>${TravelHistoryList[i].Date}</td>
            <td>${TravelHistoryList[i].TravelCost}</td>
            `
            travelHistorytablebody.appendChild(row);
        }
    }
}
//ticket fair details
function ticketFairDetails()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="block";
    // alert("im in");
    ticketDetailsBody.innerHTML="";
    for(let i=0;i<TicketFairList.length;i++)
    {
        const row=document.createElement("tr");
        row.innerHTML=
        `
        <td>${TicketFairList[i].TicketID}</td>
        <td>${TicketFairList[i].FromLocation}</td>
        <td>${TicketFairList[i].ToLocation}</td>
        <td>${TicketFairList[i].Fair}</td>
        <td><button onclick="bookticket(${TicketFairList[i].TicketID})">book</button></td>
        `
        ticketDetailsBody.appendChild(row);
    }
}
function bookticket(ticID:number)
{
    alert("ia m in book ticket");
    for(let i=0;i<userDetailsList.length;i++)
    {
        // alert(1);
        if(currentUserCardNumber==userDetailsList[i].cardNumber)
        {
            // alert(2);
                
                for(let j=0;j<TicketFairList.length;j++)
                {
                    if(ticID==TicketFairList[j].TicketID)
                    {
                        if(userDetailsList[i].Balance>=TicketFairList[j].Fair)
                        {
                            alert("sufficient balance");
                            let from=TicketFairList[j].FromLocation;
                            let to=TicketFairList[j].ToLocation;
                            userDetailsList[i].Balance-=TicketFairList[j].Fair;
                            const todayDate:string=getTodayDate();
                            TravelHistoryList.push(new travelHistory(currentUserCardNumber,from,to,todayDate,TicketFairList[j].Fair));
                            alert("booked successfully");
                        }
                        
                    }
                }
        }
    }
}
function getTodayDate():string
{
    const today:Date=new Date();
    const day:number=today.getDate();
    const month:number=today.getMonth()+1;
    const year:number=today.getFullYear();
    const formatedDay:string=day<10?'0'+day:''+day;
    const formatedMonth:string=month<10?'0'+month:''+month;
    return `${formatedDay}/${formatedMonth}/${year}`
}
function exitvis()
{
    let fin=document.getElementById('exitdiv') as HTMLDivElement;
    fin.style.display="block";
    let greet = document.getElementById('exitGreet') as HTMLLabelElement;
    greet.innerHTML = `<h3>Thank you!!! ${currentUserName}</h3>`;
}
function exit()
{
    let fin=document.getElementById('exitdiv') as HTMLDivElement;
    fin.style.display="none";
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    let sn=document.getElementById('signinid') as HTMLDivElement;
    sn.style.display="none";
    let su=document.getElementById('signupId') as HTMLDivElement;
    su.style.display="none";
    let mb=document.getElementById('menubarid') as HTMLDivElement;
    mb.style.display="none";
    let main=document.getElementById('main2')as HTMLDivElement;
    main.style.display="block"

}
//back to home
function backtohome()
{
  
}
//get reference to all button element
const recEle=document.getElementById('rechargeID') as HTMLDataElement;
const travelEle=document.getElementById('travelID') as HTMLDataElement;
const ticEle=document.getElementById('ticketID') as HTMLDataElement;