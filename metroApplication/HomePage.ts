let cNO=1;
let currentUserCardNumber:number;
let currentUserName:string;
const travelHistorytablebody=document.querySelector("#traveldata tbody") as HTMLTableSectionElement;
const ticketDetailsBody=document.querySelector('#ticketData tbody') as HTMLTableSectionElement;
interface UserDetails
{
    cardNumber:number;
    userName:string;
    phoneNumber:number;
    balance:number;
    // constructor(uName:string,pNumber:number,balance:number)
    // {
    //     this.cardNumber=cNO++;
    //     this.userName=uName;
    //     this.phoneNumber=pNumber;
    //     this.Balance=balance;
    // }
}
//adding default user details
// let userDetailsList:Array<UserDetalis>=new Array<UserDetalis>();
// userDetailsList.push(new UserDetalis("Ravi",9848849494,1000));
// userDetailsList.push(new UserDetalis("Baskaran",9948854321,100));
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
async function signInfun()
{
    let sn=document.getElementById('signinid') as HTMLDivElement;
    sn.style.display="none";
    let mb=document.getElementById('menubarid') as HTMLDivElement;
    mb.style.display="block";
    let cardnumber=(document.getElementById('cardnumber') as HTMLInputElement).value;
   
    const userDetailsList=await fetchUser();
    
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
    
    //userDetailsList.push(new UserDetalis(name,+pNumber,+bal));
    const user1: UserDetails = {
        //id: -1,
        cardNumber:0,
        userName:name,
        phoneNumber:+pNumber,
        balance:+bal
    };
    addUser(user1);
    let greet = document.getElementById('cardgreet') as HTMLLabelElement;
    greet.innerHTML = `<h3>your metro card number is!!! ${cNO}</h3>`;
    alert("signup successfully");

    
}

//balance check
async function balanceCheckfun()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    const userDetailsList=await fetchUser();
    for(let i=0;i<userDetailsList.length;i++)
    {
        if(currentUserCardNumber==userDetailsList[i].cardNumber)
        {
            alert(userDetailsList[i].balance);
        }
    }
}
//Recharge
async function recharge()
{
    alert('recharge');
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="block";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    let amount=(document.getElementById('amount') as HTMLInputElement).value;
    const userDetailsList=await fetchUser();
    for(let i=0;i<userDetailsList.length;i++)
    {
        if(currentUserCardNumber==userDetailsList[i].cardNumber)
        {
            // alert("im in recharge for loop");
            let amt= Number(amount);
            userDetailsList[i].balance= userDetailsList[i].balance+amt;
            let amountShow=document.getElementById("displayAmount") as HTMLDivElement;
            updateRecharge(currentUserCardNumber,userDetailsList[i].balance)
            amountShow.innerHTML=`<h1> your current balance is ${userDetailsList[i].balance}`
            break;
        }
    }


}
//travel history details
let tID=100;
interface TravelHistory
{
    travelID:number;
    ticketID:number;
    cardNumber:number;
    fromLocation:string;
    toLocation:string;
    date:string;
    travelCost:number;
    // constructor(cardnumber:number,fromLocation:string,toLocation:string,date:string,travelCost:number)
    // {
    //     this.TravelID=tID++;
    //     this.CardNumber=cardnumber;
    //     this.fromLocation=fromLocation;
    //     this.toLocation=toLocation;
    //     this.date=date;
    //     this.TravelCost=travelCost;
    // }
}
//creating List
// let TravelHistoryList:Array<TravelHistory>=new Array<TravelHistory>();
// TravelHistoryList.push(new TravelHistory(1000,"Airport","Egmore","10/10/2023",55))
// TravelHistoryList.push(new TravelHistory(1000,"Egmore","Koyembedu","10/10/2023",32))
// TravelHistoryList.push(new TravelHistory(1001,"Alandur","Koyembedu","10/10/2023",25))
// TravelHistoryList.push(new travelHistory(1001,"Egmore","Thirumangalam","10/10/2023",25))
//ticket fair list
let nticketID=5000;
interface TicketFair
{
    ticketID :number;
    fromLocation:string;
    toLocation:string;
    fair:number;
    // constructor(fromLocation:string,toLocation:string,fair:number)
    // {
    //     this.ticketID=nticketID++;
    //     this.fromLocation=fromLocation;
    //     this.toLocation=toLocation;
    //     this.fair=fair;
    // }
}
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
async function viewTravelHistory()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="block";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="none";
    travelHistorytablebody.innerHTML="";
    const TravelHistoryList=await fetchTravel();
    for(let i=0;i<TravelHistoryList.length;i++)
    {
        if(currentUserCardNumber==TravelHistoryList[i].cardNumber)
        {
            const row=document.createElement("tr");
            row.innerHTML=
            `<td>${TravelHistoryList[i].travelID}</td>
            <td>${TravelHistoryList[i].ticketID}</td>
            <td>${TravelHistoryList[i].cardNumber}</td>
            <td>${TravelHistoryList[i].fromLocation}</td>
            <td>${TravelHistoryList[i].toLocation}</td>
            <td>${TravelHistoryList[i].date}</td>
            <td>${TravelHistoryList[i].travelCost}</td>
            `
            travelHistorytablebody.appendChild(row);
        }
    }
}
//ticket fair details
async function ticketFairDetails()
{
    const recEle=document.getElementById('rechargeID') as HTMLDataElement;
    recEle.style.display="none";
    const travelEle=document.getElementById('travelID') as HTMLDataElement;
    travelEle.style.display="none";
    const ticEle=document.getElementById('ticketID') as HTMLDataElement;
    ticEle.style.display="block";
    // alert("im in");
    const TicketFairList=await fetchTicket();
    ticketDetailsBody.innerHTML="";
    for(let i=0;i<TicketFairList.length;i++)
    {
        const row=document.createElement("tr");
        row.innerHTML=
        `
        
        <td>${TicketFairList[i].ticketID}</td>
        <td>${TicketFairList[i].fromLocation}</td>
        <td>${TicketFairList[i].toLocation}</td>
        <td>${TicketFairList[i].fair}</td>
        <td><button onclick="bookticket(${TicketFairList[i].ticketID})">update</button></td>
        <td><button onclick="deleteTicket(${TicketFairList[i].ticketID})">delete</button></td>
        `
        ticketDetailsBody.appendChild(row);
    }
}
function deleteTicket(ticID:number)
{
    deleteTravel(ticID);
    viewTravelHistory();
    //alert(ticID);
}
async function bookticket(ticID:number)
{
    const userDetailsList=await fetchUser();

    // alert("ia m in book ticket");
    for(let i=0;i<userDetailsList.length;i++)
    {
        // alert(1);
        if(currentUserCardNumber==userDetailsList[i].cardNumber)
        {
            // alert(2);
            const TicketFairList=await fetchTicket();

                for(let j=0;j<TicketFairList.length;j++)
                {
                    if(ticID==TicketFairList[j].ticketID)
                    {
                        if(userDetailsList[i].balance>=TicketFairList[j].fair)
                        {
                            alert("sufficient balance");
                            let from=TicketFairList[j].fromLocation;
                            let to=TicketFairList[j].toLocation;
                            let tikID=TicketFairList[j].ticketID;
                            userDetailsList[i].balance-=TicketFairList[j].fair;
                            updateRecharge(currentUserCardNumber,userDetailsList[i].balance)
                            const todayDate:string=getTodayDate();
                            //TravelHistoryList.push(new TravelHistory(currentUserCardNumber,from,to,todayDate,TicketFairList[j].fair));
                            const travel1: TravelHistory = {
                                travelID:0,
                                ticketID:tikID,
                                cardNumber:currentUserCardNumber,
                                fromLocation:from,
                                toLocation:to,
                                date:todayDate,
                                travelCost:TicketFairList[j].fair
                                
                            };
                            addTravel(travel1);
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
//post
async function addUser(user:UserDetails):Promise<void> {
    const response=await fetch('http://localhost:5177/api/UserDetails',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
        });
        if(!response.ok){
            throw new Error('Failed to Add Contacts');
        }
   
}
async function addTravel(travel:TravelHistory):Promise<void> {
    const response=await fetch('http://localhost:5177/api/TravelHistory',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(travel)
        });
        if(!response.ok){
            throw new Error('Failed to Add Travel');
        }
   
}
async function addTicket(ticket:TicketFair):Promise<void> {
    const response=await fetch('http://localhost:5177/api/TicketFair',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(ticket)
        });
        if(!response.ok){
            throw new Error('Failed to Add Ticket');
        }
   
}
//update
async function updateTicket(id:number,ticket:TicketFair):Promise<void> {
    const response=await fetch(`http://localhost:5177/api/TicketFair/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(ticket)
        });
        if(!response.ok){
            throw new Error('Failed to update Ticket');
        }
    }   

async function updateTravel(id:number,travel:TravelHistory):Promise<void> {
    const response=await fetch(`http://localhost:5177/api/TravelHistory/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(travel)
            });
            if(!response.ok){
                throw new Error('Failed to update Travel');
        }
    }   
//recharge
async function updateRecharge(id:number,amount:number):Promise<void> {
    const response=await fetch(`http://localhost:5177/api/UserDetails/${id}/${amount}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(amount)
            });
            if(!response.ok){
                throw new Error('Failed to update Travel');
        }
    }   

//delete
async function deleteTravel(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5177/api/TravelHistory/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact');
    }
   
  }
//fetch
async function fetchUser():Promise<UserDetails[]> {
    const apiURL='http://localhost:5177/api/UserDetails';
    const response=await fetch(apiURL);
        
        if(!response.ok){
            throw new Error('Failed to Add Contacts');
        }
        return await response.json();
}
async function fetchTravel():Promise<TravelHistory[]> {
    const apiURL='http://localhost:5177/api/TravelHistory';
    const response=await fetch(apiURL);
        
        if(!response.ok){
            throw new Error('Failed to Add Travel');
        }
        return await response.json();
}
async function fetchTicket():Promise<TicketFair[]> {
    const apiURL='http://localhost:5177/api/TicketFair';
    const response=await fetch(apiURL);
        
        if(!response.ok){
            throw new Error('Failed to Add Contacts');
        }
        return await response.json();
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