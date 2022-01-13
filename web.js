

// identifying browser
//-required variables
let userAgent = navigator.userAgent;
let message;
var browser;
//function to verify which browser is used
function getBrowser(userAgent){
    
    if(userAgent.match(/edg/i)){
        browser = "edge";

    }else if(userAgent.match(/firefox/i)){
        browser = "firefox";

    }else if(userAgent.match(/chrome|chromium|crios/i)){
        browser = "chrome";

    }else if(userAgent.match(/opr/i)){
        browser = "opera";

    }else if(userAgent.match(/safari/i)){
        browser = "safari";

    }else{
        alert("Unknown browser")
    }      
    
}

//running the function
getBrowser(userAgent);

//generating message for button
message="Add to "+ browser +" - It's Free!";

//add button with message on it



//what to get from html
let addButtonDiv = ['0', 'addButtonDiv1','addButtonDiv2', 'addButtonDiv3','addButtonDiv4', 'addButtonDiv5'];
let addBtnDiv = ['0', 'addBtnDiv1','addBtnDiv2', 'addBtnDiv3','addBtnDiv4', 'addBtnDiv5'];
//what to create to html
let addBtn = ['0', 'addBtn1', 'addBtn2','addBtn3', 'addBtn4', 'addBtn5'];

for (let i=1;i<=5; i++){
    addButtonDiv[i] = document.getElementById(addBtnDiv[i]);
    addBtn[i] = document.createElement('button')
    addBtn[i].className ="addButton1";
    addBtn[i].textContent=message;
    addButtonDiv[i].appendChild(addBtn[i])
}

//old code

// let addButtonDiv1 = document.getElementById('addBtnDiv1')
// let addBtn1 = document.createElement('button')
// addBtn1.className ="addButton1";
// addBtn1.textContent=message;
// addButtonDiv1.appendChild(addBtn1);

// let addButtonDiv4 = document.getElementById('addBtnDiv4')
// let addBtn4 = document.createElement('button')
// addBtn4.className ="addButton4";
// addBtn4.textContent=message;
// addButtonDiv4.appendChild(addBtn4);


// let addButtonDiv5 = document.getElementById('addBtnDiv5')
// let addBtn5 = document.createElement('button')
// addBtn5.className ="addButton";
// addBtn5.textContent=message;
// addButtonDiv5.appendChild(addBtn5);


// let addButtonDiv6 = document.getElementById('addBtnDiv6')
// let addBtn6 = document.createElement('button')
// addBtn6.className ="addButton";
// addBtn6.textContent=message;
// addButtonDiv6.appendChild(addBtn6);


// let addButtonDiv8 = document.getElementById('addBtnDiv8')
// let addBtn8 = document.createElement('button')
// addBtn8.className ="addButton";
// addBtn8.textContent=message;
// addButtonDiv8.appendChild(addBtn8);






