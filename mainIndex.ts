let medId01:number=10;
let CurrentUSerID:string;
let CurrentUserName:string;
let CurrentUSerBalance:number;
const tablebody=document.querySelector("#datatable tbody") as HTMLTableSectionElement;
const purchasetablebody=document.querySelector("#purchasedataTable tbody") as HTMLTableSectionElement;
const Historytablebody=document.querySelector("#orderHistorytable tbody") as HTMLTableSectionElement;
const hisTabBody=document.querySelector("#orderHistorytable2 tbody") as HTMLTableSectionElement;
class MedichineInfo
{
     medichineID:number;
     medichineName:string;
     medichineCount:number;
     medicinePrice:number;
     medicineExpiryDate:string;
     constructor(medName:string, medCount:number, medPrice:number, medExDate:string)
     {
        this.medichineID=medId01++;
        this.medichineName=medName;
        this.medichineCount=medCount;
        this.medicinePrice=medPrice;
        this.medicineExpiryDate=medExDate;
     }
}
//order history
let OID=2000;
class orderHistory
{
     OrderID:number;
     medichineID:number;
     medichineName:string;
     medichineCount:number;
     medicinePrice:number;
     medicineExpiryDate:string;
     medicineStatus:string;
     constructor(medId:number,medName:string, medCount:number, medPrice:number, medExDate:string,medsts:string)
     {
      this.OrderID=OID++;
        this.medichineID=medId;
        this.medichineName=medName;
        this.medichineCount=medCount;
        this.medicinePrice=medPrice;
        this.medicineExpiryDate=medExDate;
        this.medicineStatus=medsts;
     }
}

//order
let orderHistortList:Array<orderHistory>=new Array<orderHistory>();
let LocalOrderHistoryList:Array<orderHistory>=new Array<orderHistory>();
//creating medicine list
let medichineList:Array<MedichineInfo>=new Array<MedichineInfo>();
medichineList.push(new MedichineInfo("Paracitamal",50,5,"5/02/2025"));
medichineList.push(new MedichineInfo("colpol",30,10,"5/02/2025"));
medichineList.push(new MedichineInfo("stepsil",50,5,"5/02/2025"));
medichineList.push(new MedichineInfo("Iodex",50,5,"5/02/2025"));
// let combine:string="";
// for(let i=0;i<medichineList.length;i++)
// {
//     combine=medichineList[i].medichineID+medichineList[i].medichineName+medichineList[i].medichineCount+medichineList[i].medicinePrice+medichineList[i].medicineExpiryDate;
//     document.getElementById("med1").innerHTML=combine+"<br>";
// }
const renderTable = () => {
  let md = document.getElementById('tablediv') as HTMLDivElement;
    md.style.display="block";
    let pr = document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
    pr.style.display="none";
    let co = document.getElementById('cancelOrder2') as HTMLDivElement;
    co.style.display="none";
    let tu = document.getElementById('topUpId') as HTMLDivElement;
    tu.style.display="none";
    let oh = document.getElementById('orderHistorytable') as HTMLDivElement;
    oh.style.display="none";
    let hm = document.getElementById('homepage') as HTMLDivElement;
    hm.style.display="none";
  
  
    tablebody.innerHTML = "";
    medichineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.medichineID}</td>
        <td>${item.medichineName}</td>
        <td>${item.medichineCount}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.medicineExpiryDate}</td>
        
        
        
        `;
      tablebody.appendChild(row);
    });
  };
//user details
let uID=100;
class userDetails
{
     userId:string;
     userName:string;
     PassWord:string;
     WalletBalance:number;
     PhoneNumber:number;
     constructor(UName:string, UPW:string, WBalance:number,pNum:number)
     {
        this.userId="UID"+uID++;
        this.userName=UName;
        this.PassWord=UPW;
        this.WalletBalance=WBalance;
        this.PhoneNumber=pNum;
     }
}
let userList:Array<userDetails>=new Array<userDetails>();
userList.push(new userDetails("suruthi","suruthi@123",500,9098765434));
userList.push(new userDetails("abi","abi@123",500,9098765434));
//visibility sign-up
function signUpFun()
{
  let signuppage = document.getElementById('signiUpPAge') as HTMLDivElement;
  signuppage.style.display = "block";
  let homePage = document.getElementById('existingUserPage') as HTMLDivElement;
  homePage.style.display = "none";
}
//visibility-signin
function signinShow(){
  let homePage = document.getElementById('existingUserPage') as HTMLDivElement;
  //let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;

  homePage.style.display = "block";
  let signuppage = document.getElementById('signiUpPAge') as HTMLDivElement;
  signuppage.style.display = "none";
 // newUserPage.style.display = "none";
}
//signIn
function signIn()
{
  
    
    let noExUserID:boolean=false;
    let ExuserId=(document.getElementById("existinguserID") as HTMLInputElement).value;
    let exUserIdRedex =/^UID\d{3}$/;
    if(exUserIdRedex.test(ExuserId))
    {
        for(let i=0;i<userList.length;i++)
        {
            if(userList[i].userId==ExuserId)
            {
                CurrentUSerID=userList[i].userId;
                CurrentUserName=userList[i].userName;
                CurrentUSerBalance=userList[i].WalletBalance;
                alert("LoginSuccessful");
                let homePage = document.getElementById('homediv') as HTMLDivElement;
                let mainPage = document.getElementById('mainmainID') as HTMLDivElement;
                homePage.style.visibility="visible";
                mainPage.style.display="none";
                return;
            }
            else{
                
                noExUserID=true;
            }
        }
    }
}
//top-up----------
function topUpVisible(){
  let md = document.getElementById('tablediv') as HTMLDivElement;
  md.style.display="none";
  let pr = document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
  pr.style.display="none";
  let co = document.getElementById('cancelOrder2') as HTMLDivElement;
  co.style.display="none";
  let oh = document.getElementById('orderHistorytable') as HTMLDivElement;
  oh.style.display="none";
  let hm = document.getElementById('homepage') as HTMLDivElement;
  hm.style.display="nobr";
  let pur=document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
    pur.style.display="none";
  let tu = document.getElementById('topUpId') as HTMLDivElement;
  tu.style.display="block";
}
function topup()
{
 

    let amt=(document.getElementById("getAmount") as HTMLLIElement).value;
    let fin=+amt;
    CurrentUSerBalance+=fin;
    let tu = document.getElementById('topUpId') as HTMLDivElement;
    tu.style.display="none";
    // let cb:number=CurrentUSerBalance+amount;
    // CurrentUSerBalance=cb;
    alert(CurrentUSerBalance);
    // console.log(CurrentUSerBalance);

}
function showBalance()
{
  let md = document.getElementById('tablediv') as HTMLDivElement;
  md.style.display="none";
  let pr = document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
  pr.style.display="none";
  let co = document.getElementById('cancelOrder2') as HTMLDivElement;
  co.style.display="none";
  let tu = document.getElementById('topUpId') as HTMLDivElement;
  tu.style.display="none";
  let oh = document.getElementById('orderHistorytable') as HTMLDivElement;
  oh.style.display="none";
  let hm = document.getElementById('homepage') as HTMLDivElement;
  hm.style.display="none";
    alert("your current balance is"+CurrentUSerBalance);
}
function purchace()
{
    renderTable();
}
function checkPurchase()
{
  let md = document.getElementById('tablediv') as HTMLDivElement;
    md.style.display="block";
    
    let pr = document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
    pr.style.display="block";
    let co = document.getElementById('cancelOrder2') as HTMLDivElement;
    co.style.display="none";
    let tu = document.getElementById('topUpId') as HTMLDivElement;
    tu.style.display="none";
    let oh = document.getElementById('orderHistorytable') as HTMLDivElement;
    oh.style.display="none";
    let hm = document.getElementById('homepage') as HTMLDivElement;
    hm.style.display="none";

    const ShowTable = () => {
        tablebody.innerHTML = "";
        medichineList.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
          
            <td>${item.medichineID}</td>
            <td>${item.medichineName}</td>
            <td>${item.medichineCount}</td>
            <td>${item.medicinePrice}</td>
            <td>${item.medicineExpiryDate}</td>
            <td><button onclick="fun(${item.medichineID})">buy</button></td>
            `;
          tablebody.appendChild(row);
        });
    };
    ShowTable();
    
}
//purchase list------------------------------------------------------------------------------------
class purchaseMEd{

}
//----------------------------------------
//let data: TableData[] = [];
  let medichineID: Number | null = null;
const edit = (id: Number) => {
  medichineID = id;
  // const item = data.find((item) => item.id === id);
  // if (item) {
  //   nameInput.value = item.name;
  //   ageInput.value = String(item.age);
  for(let i=0;i<medichineList.length;i++)
  {
    if(medichineID==medichineList[i].medichineID)
    {
      alert("please im pavam");
    }
  }

  }
//};
function home()
{
    // document.getElementById('homeName') as HTMLDivElement=CurrentUserName;
    //document.getElementById("#homeName").innerHTML=CurrentUserName;
    let md = document.getElementById('tablediv') as HTMLDivElement;
    md.style.display="none";
    let pr = document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
    pr.style.display="none";
    let co = document.getElementById('cancelOrder2') as HTMLDivElement;
    co.style.display="none";
    let tu = document.getElementById('topUpId') as HTMLDivElement;
    tu.style.display="none";
    let oh = document.getElementById('orderHistorytable') as HTMLDivElement;
    oh.style.display="none";
    let hm = document.getElementById('homepage') as HTMLDivElement;
    hm.style.display="block";
    let greet = document.getElementById('homeName') as HTMLLabelElement;
    greet.innerHTML = `<h3>Hello ${CurrentUserName}</h3>`;
}
function fun(medId: number)
{

    alert("very fun");
    let purchaseQuan=(document.getElementById("Quan") as HTMLInputElement).value;
    let purchaceQ=parseInt(purchaseQuan);
    let mID=medId;
    let mediID2=medId;       //(document.getElementById("medPurchase") as HTMLInputElement).value;
    let mediId=mediID2;
    for(let i=0;i<medichineList.length;i++)
    {
        if(mediId==medichineList[i].medichineID)
        {
            alert("somethings match");
            //check quantity
            if(purchaceQ < medichineList[i].medichineCount)
            {
                alert("medicine count is available");
                if(CurrentUSerBalance>medichineList[i].medicinePrice)
                {
                    alert("you have enough balance");
                    medichineList[i].medichineCount-=purchaceQ;
                    CurrentUSerBalance-=(medichineList[i].medicinePrice*purchaceQ);
                    let medTotalAmt=medichineList[i].medicinePrice*purchaceQ;
                    orderHistortList.push(new orderHistory(mediId,medichineList[i].medichineName,purchaceQ,medTotalAmt,medichineList[i].medicineExpiryDate,"ordered"));
                    OID--;
                    LocalOrderHistoryList.push(new orderHistory(mediId,medichineList[i].medichineName,purchaceQ,medTotalAmt,medichineList[i].medicineExpiryDate,"ordered"));

                    alert("purchased successfully");
                
                }
            
            }
            
        }
    }
}

    const showOrderHistory = () => {
        Historytablebody.innerHTML = "";
        let pur=document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
        pur.style.display="none";
        let x=document.getElementById('orderHistorytable') as HTMLDivElement;
        x.style.display="block";
        orderHistortList.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.medichineID}</td>
            <td>${item.medichineName}</td>
            <td>${item.medichineCount}</td>
            <td>${item.medicinePrice}</td>
            <td>${item.medicineExpiryDate}</td>
            <td>${item.medicineStatus}</td>
            
            
            
            `;
            Historytablebody.appendChild(row);
        });
      };

/*  
function checkPurchaseDetails()
{
  const cancelOrder = () => {
      Historytablebody.innerHTML = "";
      orderHistortList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.medichineID}</td>
          <td>${item.medichineName}</td>
          <td>${item.medichineCount}</td>
          <td>${item.medicinePrice}</td>
          <td>${item.medicineExpiryDate}</td>
          <td><button onclick="canOrd(${item.medichineID})">Cancel</button></td>
          
          
          
          `;
          Historytablebody.appendChild(row);
      });
    };
    cancelOrder();
    
}
//CancelOrder()
function canOrd(mediID:string)
{
    alert(mediID);
}
*/
function checkPurchaseDetails()
{
  let md = document.getElementById('tablediv') as HTMLDivElement;
  md.style.display="none";
  let pr = document.getElementById('purchaseMesdicineShow') as HTMLDivElement;
  pr.style.display="none";
  let co = document.getElementById('cancelOrder2') as HTMLDivElement;
  co.style.display="none";
  let tu = document.getElementById('topUpId') as HTMLDivElement;
  tu.style.display="none";
  let oh = document.getElementById('orderHistorytable') as HTMLDivElement;
  oh.style.display="none";
  let displaydetails=document.getElementById('tablediv') as HTMLDivElement;
  displaydetails.style.display="none";
  
  let details = document.getElementById('cancelOrder2') as HTMLDivElement;
  details.style.display="block";
  // for(let i=0;i<orderHistortList.length;i++)
  // {
  //   for(let j=0;j<LocalOrderHistoryList.length;j++)
  //   {
  //     if(orderHistortList[i].medicineStatus=="ordered" && LocalOrderHistoryList[i].OrderID!)
  //   }
  // }

  
      hisTabBody.innerHTML = "";
      LocalOrderHistoryList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.medichineID}</td>
          <td>${item.medichineName}</td>
          <td>${item.medichineCount}</td>
          <td>${item.medicinePrice}</td>
          <td>${item.medicineStatus}</td>
          <td><button onclick="remove1(${item.OrderID})" >Remove</button></td>
          `;
          hisTabBody.appendChild(row);
          
      });
    };
  // function remove()
  // {
  //   alert("welcome to cancel");
  // }
const remove1=(Cid:number)=>
{
  alert("1");
    // for(let i=0;i<orderHistortList.length;i++)
    // {
    //     if(Cid==orderHistortList[i].OrderID)
    //     {
    //       alert("cancel1");
    //       for(let i=0; i<medichineList.length;i++)
    //       {
    //         alert("cancel2");
    //         if(medichineList[i].medichineID==orderHistortList[i].medichineID)
    //         {
    //           alert("cancel3");
    //           medichineList[i].medichineCount+=orderHistortList[i].medichineCount;
    //           CurrentUSerBalance+=orderHistortList[i].medicinePrice;
    //           break;
    //         }
    //       }
    //     }
    // }
    for(let i=0;i<LocalOrderHistoryList.length;i++)
    {
      alert("2");
      if(LocalOrderHistoryList[i].OrderID==Cid)
      {
        alert("3");
        for(let j=0;j<orderHistortList.length;j++)
        {
          alert("4");
          if(orderHistortList[j].OrderID==Cid)
          {
            orderHistortList[j].medicineStatus="Cancelled";
            let medId=orderHistortList[j].medichineID;
            CurrentUSerBalance+=orderHistortList[j].medicinePrice;
            alert(CurrentUSerBalance);
            for(let j=0;i<medichineList.length;j++)
            {
              if(medichineList[j].medichineID==medId)
              {
                medichineList[j].medichineCount+=orderHistortList[j].medichineCount;
                alert(Cid);
                
                LocalOrderHistoryList=LocalOrderHistoryList.filter((item)=>item.OrderID!==Cid);
                checkPurchaseDetails();
                alert(CurrentUSerBalance);
                alert("done");
                break;
              }
            }
            break;

          }
        }
        
      
      }
    }
    
}
    
    

//CancelOrder()
function canOrd(mediID:string)
{
    alert(mediID);
}
//signUP--------------------------------------------------sign up--------------------------------------------*****
function signUpShow() {
    let uname = (document.getElementById('signUPUname') as HTMLInputElement).value;
    let mail1 = (document.getElementById('signUpmailID') as HTMLInputElement).value;
    let pw1 = (document.getElementById('signUpPW') as HTMLInputElement).value;
    let pw2 = (document.getElementById('signUpConPW') as HTMLInputElement).value;
    let pn1 = (document.getElementById('signUppn') as HTMLInputElement).value;
    let SUBlance = (document.getElementById('signUpBalance') as HTMLInputElement).value;
    userList.push(new userDetails(uname,pw1,+SUBlance,+pn1));


}