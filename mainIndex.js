var medId01 = 10;
var CurrentUSerID;
var CurrentUserName;
var CurrentUSerBalance;
var tablebody = document.querySelector("#datatable tbody");
var purchasetablebody = document.querySelector("#purchasedataTable tbody");
var Historytablebody = document.querySelector("#orderHistorytable tbody");
var hisTabBody = document.querySelector("#orderHistorytable2 tbody");
var MedichineInfo = /** @class */ (function () {
    function MedichineInfo(medName, medCount, medPrice, medExDate) {
        this.medichineID = medId01++;
        this.medichineName = medName;
        this.medichineCount = medCount;
        this.medicinePrice = medPrice;
        this.medicineExpiryDate = medExDate;
    }
    return MedichineInfo;
}());
//order history
var OID = 2000;
var orderHistory = /** @class */ (function () {
    function orderHistory(medId, medName, medCount, medPrice, medExDate, medsts) {
        this.OrderID = OID++;
        this.medichineID = medId;
        this.medichineName = medName;
        this.medichineCount = medCount;
        this.medicinePrice = medPrice;
        this.medicineExpiryDate = medExDate;
        this.medicineStatus = medsts;
    }
    return orderHistory;
}());
//order
var orderHistortList = new Array();
var LocalOrderHistoryList = new Array();
//creating medicine list
var medichineList = new Array();
medichineList.push(new MedichineInfo("Paracitamal", 50, 5, "5/02/2025"));
medichineList.push(new MedichineInfo("colpol", 30, 10, "5/02/2025"));
medichineList.push(new MedichineInfo("stepsil", 50, 5, "5/02/2025"));
medichineList.push(new MedichineInfo("Iodex", 50, 5, "5/02/2025"));
// let combine:string="";
// for(let i=0;i<medichineList.length;i++)
// {
//     combine=medichineList[i].medichineID+medichineList[i].medichineName+medichineList[i].medichineCount+medichineList[i].medicinePrice+medichineList[i].medicineExpiryDate;
//     document.getElementById("med1").innerHTML=combine+"<br>";
// }
var renderTable = function () {
    var md = document.getElementById('tablediv');
    md.style.display = "block";
    var pr = document.getElementById('purchaseMesdicineShow');
    pr.style.display = "none";
    var co = document.getElementById('cancelOrder2');
    co.style.display = "none";
    var tu = document.getElementById('topUpId');
    tu.style.display = "none";
    var oh = document.getElementById('orderHistorytable');
    oh.style.display = "none";
    var hm = document.getElementById('homepage');
    hm.style.display = "none";
    tablebody.innerHTML = "";
    medichineList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>".concat(item.medichineID, "</td>\n        <td>").concat(item.medichineName, "</td>\n        <td>").concat(item.medichineCount, "</td>\n        <td>").concat(item.medicinePrice, "</td>\n        <td>").concat(item.medicineExpiryDate, "</td>\n        \n        \n        \n        ");
        tablebody.appendChild(row);
    });
};
//user details
var uID = 100;
var userDetails = /** @class */ (function () {
    function userDetails(UName, UPW, WBalance, pNum) {
        this.userId = "UID" + uID++;
        this.userName = UName;
        this.PassWord = UPW;
        this.WalletBalance = WBalance;
        this.PhoneNumber = pNum;
    }
    return userDetails;
}());
var userList = new Array();
userList.push(new userDetails("suruthi", "suruthi@123", 500, 9098765434));
userList.push(new userDetails("abi", "abi@123", 500, 9098765434));
//visibility sign-up
function signUpFun() {
    var signuppage = document.getElementById('signiUpPAge');
    signuppage.style.display = "block";
    var homePage = document.getElementById('existingUserPage');
    homePage.style.display = "none";
}
//visibility-signin
function signinShow() {
    var homePage = document.getElementById('existingUserPage');
    //let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    homePage.style.display = "block";
    var signuppage = document.getElementById('signiUpPAge');
    signuppage.style.display = "none";
    // newUserPage.style.display = "none";
}
//signIn
function signIn() {
    var noExUserID = false;
    var ExuserId = document.getElementById("existinguserID").value;
    var exUserIdRedex = /^UID\d{3}$/;
    if (exUserIdRedex.test(ExuserId)) {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].userId == ExuserId) {
                CurrentUSerID = userList[i].userId;
                CurrentUserName = userList[i].userName;
                CurrentUSerBalance = userList[i].WalletBalance;
                alert("LoginSuccessful");
                var homePage = document.getElementById('homediv');
                var mainPage = document.getElementById('mainmainID');
                homePage.style.visibility = "visible";
                mainPage.style.display = "none";
                return;
            }
            else {
                noExUserID = true;
            }
        }
    }
}
//top-up----------
function topUpVisible() {
    var md = document.getElementById('tablediv');
    md.style.display = "none";
    var pr = document.getElementById('purchaseMesdicineShow');
    pr.style.display = "none";
    var co = document.getElementById('cancelOrder2');
    co.style.display = "none";
    var oh = document.getElementById('orderHistorytable');
    oh.style.display = "none";
    var hm = document.getElementById('homepage');
    hm.style.display = "nobr";
    var pur = document.getElementById('purchaseMesdicineShow');
    pur.style.display = "none";
    var tu = document.getElementById('topUpId');
    tu.style.display = "block";
}
function topup() {
    var amt = document.getElementById("getAmount").value;
    var fin = +amt;
    CurrentUSerBalance += fin;
    var tu = document.getElementById('topUpId');
    tu.style.display = "none";
    // let cb:number=CurrentUSerBalance+amount;
    // CurrentUSerBalance=cb;
    alert(CurrentUSerBalance);
    // console.log(CurrentUSerBalance);
}
function showBalance() {
    var md = document.getElementById('tablediv');
    md.style.display = "none";
    var pr = document.getElementById('purchaseMesdicineShow');
    pr.style.display = "none";
    var co = document.getElementById('cancelOrder2');
    co.style.display = "none";
    var tu = document.getElementById('topUpId');
    tu.style.display = "none";
    var oh = document.getElementById('orderHistorytable');
    oh.style.display = "none";
    var hm = document.getElementById('homepage');
    hm.style.display = "none";
    alert("your current balance is" + CurrentUSerBalance);
}
function purchace() {
    renderTable();
}
function checkPurchase() {
    var md = document.getElementById('tablediv');
    md.style.display = "block";
    var pr = document.getElementById('purchaseMesdicineShow');
    pr.style.display = "block";
    var co = document.getElementById('cancelOrder2');
    co.style.display = "none";
    var tu = document.getElementById('topUpId');
    tu.style.display = "none";
    var oh = document.getElementById('orderHistorytable');
    oh.style.display = "none";
    var hm = document.getElementById('homepage');
    hm.style.display = "none";
    var ShowTable = function () {
        tablebody.innerHTML = "";
        medichineList.forEach(function (item) {
            var row = document.createElement("tr");
            row.innerHTML = "\n          \n            <td>".concat(item.medichineID, "</td>\n            <td>").concat(item.medichineName, "</td>\n            <td>").concat(item.medichineCount, "</td>\n            <td>").concat(item.medicinePrice, "</td>\n            <td>").concat(item.medicineExpiryDate, "</td>\n            <td><button onclick=\"fun(").concat(item.medichineID, ")\">buy</button></td>\n            ");
            tablebody.appendChild(row);
        });
    };
    ShowTable();
}
//purchase list------------------------------------------------------------------------------------
var purchaseMEd = /** @class */ (function () {
    function purchaseMEd() {
    }
    return purchaseMEd;
}());
//----------------------------------------
//let data: TableData[] = [];
var medichineID = null;
var edit = function (id) {
    medichineID = id;
    // const item = data.find((item) => item.id === id);
    // if (item) {
    //   nameInput.value = item.name;
    //   ageInput.value = String(item.age);
    for (var i = 0; i < medichineList.length; i++) {
        if (medichineID == medichineList[i].medichineID) {
            alert("please im pavam");
        }
    }
};
//};
function home() {
    // document.getElementById('homeName') as HTMLDivElement=CurrentUserName;
    //document.getElementById("#homeName").innerHTML=CurrentUserName;
    var md = document.getElementById('tablediv');
    md.style.display = "none";
    var pr = document.getElementById('purchaseMesdicineShow');
    pr.style.display = "none";
    var co = document.getElementById('cancelOrder2');
    co.style.display = "none";
    var tu = document.getElementById('topUpId');
    tu.style.display = "none";
    var oh = document.getElementById('orderHistorytable');
    oh.style.display = "none";
    var hm = document.getElementById('homepage');
    hm.style.display = "block";
    var greet = document.getElementById('homeName');
    greet.innerHTML = "<h3>Hello ".concat(CurrentUserName, "</h3>");
}
function fun(medId) {
    alert("very fun");
    var purchaseQuan = document.getElementById("Quan").value;
    var purchaceQ = parseInt(purchaseQuan);
    var mID = medId;
    var mediID2 = medId; //(document.getElementById("medPurchase") as HTMLInputElement).value;
    var mediId = mediID2;
    for (var i = 0; i < medichineList.length; i++) {
        if (mediId == medichineList[i].medichineID) {
            alert("somethings match");
            //check quantity
            if (purchaceQ < medichineList[i].medichineCount) {
                alert("medicine count is available");
                if (CurrentUSerBalance > medichineList[i].medicinePrice) {
                    alert("you have enough balance");
                    medichineList[i].medichineCount -= purchaceQ;
                    CurrentUSerBalance -= (medichineList[i].medicinePrice * purchaceQ);
                    var medTotalAmt = medichineList[i].medicinePrice * purchaceQ;
                    orderHistortList.push(new orderHistory(mediId, medichineList[i].medichineName, purchaceQ, medTotalAmt, medichineList[i].medicineExpiryDate, "ordered"));
                    OID--;
                    LocalOrderHistoryList.push(new orderHistory(mediId, medichineList[i].medichineName, purchaceQ, medTotalAmt, medichineList[i].medicineExpiryDate, "ordered"));
                    alert("purchased successfully");
                }
            }
        }
    }
}
var showOrderHistory = function () {
    Historytablebody.innerHTML = "";
    var pur = document.getElementById('purchaseMesdicineShow');
    pur.style.display = "none";
    var x = document.getElementById('orderHistorytable');
    x.style.display = "block";
    orderHistortList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n            <td>".concat(item.medichineID, "</td>\n            <td>").concat(item.medichineName, "</td>\n            <td>").concat(item.medichineCount, "</td>\n            <td>").concat(item.medicinePrice, "</td>\n            <td>").concat(item.medicineExpiryDate, "</td>\n            <td>").concat(item.medicineStatus, "</td>\n            \n            \n            \n            ");
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
function checkPurchaseDetails() {
    var md = document.getElementById('tablediv');
    md.style.display = "none";
    var pr = document.getElementById('purchaseMesdicineShow');
    pr.style.display = "none";
    var co = document.getElementById('cancelOrder2');
    co.style.display = "none";
    var tu = document.getElementById('topUpId');
    tu.style.display = "none";
    var oh = document.getElementById('orderHistorytable');
    oh.style.display = "none";
    var displaydetails = document.getElementById('tablediv');
    displaydetails.style.display = "none";
    var details = document.getElementById('cancelOrder2');
    details.style.display = "block";
    // for(let i=0;i<orderHistortList.length;i++)
    // {
    //   for(let j=0;j<LocalOrderHistoryList.length;j++)
    //   {
    //     if(orderHistortList[i].medicineStatus=="ordered" && LocalOrderHistoryList[i].OrderID!)
    //   }
    // }
    hisTabBody.innerHTML = "";
    LocalOrderHistoryList.forEach(function (item) {
        var row = document.createElement("tr");
        row.innerHTML = "\n          <td>".concat(item.medichineID, "</td>\n          <td>").concat(item.medichineName, "</td>\n          <td>").concat(item.medichineCount, "</td>\n          <td>").concat(item.medicinePrice, "</td>\n          <td>").concat(item.medicineStatus, "</td>\n          <td><button onclick=\"remove1(").concat(item.OrderID, ")\" >Remove</button></td>\n          ");
        hisTabBody.appendChild(row);
    });
}
;
// function remove()
// {
//   alert("welcome to cancel");
// }
var remove1 = function (Cid) {
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
    for (var i = 0; i < LocalOrderHistoryList.length; i++) {
        alert("2");
        if (LocalOrderHistoryList[i].OrderID == Cid) {
            alert("3");
            for (var j = 0; j < orderHistortList.length; j++) {
                alert("4");
                if (orderHistortList[j].OrderID == Cid) {
                    orderHistortList[j].medicineStatus = "Cancelled";
                    var medId = orderHistortList[j].medichineID;
                    CurrentUSerBalance += orderHistortList[j].medicinePrice;
                    alert(CurrentUSerBalance);
                    for (var j_1 = 0; i < medichineList.length; j_1++) {
                        if (medichineList[j_1].medichineID == medId) {
                            medichineList[j_1].medichineCount += orderHistortList[j_1].medichineCount;
                            alert(Cid);
                            LocalOrderHistoryList = LocalOrderHistoryList.filter(function (item) { return item.OrderID !== Cid; });
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
};
//CancelOrder()
function canOrd(mediID) {
    alert(mediID);
}
//signUP--------------------------------------------------sign up--------------------------------------------*****
function signUpShow() {
    var uname = document.getElementById('signUPUname').value;
    var mail1 = document.getElementById('signUpmailID').value;
    var pw1 = document.getElementById('signUpPW').value;
    var pw2 = document.getElementById('signUpConPW').value;
    var pn1 = document.getElementById('signUppn').value;
    var SUBlance = document.getElementById('signUpBalance').value;
    userList.push(new userDetails(uname, pw1, +SUBlance, +pn1));
}
