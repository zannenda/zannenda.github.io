let medusaLink = document.getElementById("medusa");
medusaLink.onclick = function(){
    sessionStorage.setItem("current-waifu", "MEDUSA");
}
let grayLink = document.getElementById("gray");
grayLink.onclick = function(){
    sessionStorage.setItem("current-waifu", "GRAY");
}
let circeLink = document.getElementById("circe");
circeLink.onclick = function(){
    sessionStorage.setItem("current-waifu", "CIRCE");
}




// --------------------------------------------------------------------------------------------------
// change user

// let changeUserBtn = document.getElementById("change-user-btn");
// changeUserBtn.onclick = function() {
//     setUserName();
// }

function setUserName(){
    let myName = prompt("Please enter your name.");

    if(!myName || myName === null || myName === ""){
        setUserName();
    } else{
        localStorage.setItem("name", myName);

        let japLangSection = document.createElement("span");
        japLangSection.setAttribute("lang", "ja");
        japLangSection.appendChild(document.createTextNode("喜べ" + myName + "。君の願いをようやく叶う。"));

        let welcomeMsg =  document.getElementById("welcome-msg");
        removeAllChildNodes(welcomeMsg); 
        welcomeMsg.appendChild(japLangSection);
    }
}