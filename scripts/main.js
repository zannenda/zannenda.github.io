let mainBody = document.querySelector("body");
mainBody.onload = function(){
    setUserName();

    loadWaifuData("MEDUSA");
}

// ------------------------------------------------------------------------------------------------------------------------------------
// dealing with the main image
let waifuImg = document.getElementById("waifu-pic");
waifuImg.onclick = function() {
    switch(sessionStorage.getItem("current-waifu")){
        case "CIRCE":
            loadWaifuData("MEDUSA");
            break;
        case "MEDUSA":
            loadWaifuData("CIRCE");
            break;
    }
}


function loadWaifuData(waifuName){
    let waifuIntro = document.getElementById("waifu-intro");
    removeAllChildNodes(waifuIntro);

    let waifuTraitList = document.getElementById("waifu-traits");
    removeAllChildNodes(waifuTraitList);

    let waifuClass = document.createElement("li");
    waifuClass.appendChild(document.createTextNode("Class: "));
    let waifuAlignment = document.createElement("li");
    waifuAlignment.appendChild(document.createTextNode("Alignment: "));
    let waifuNP = document.createElement("li");
    waifuNP.appendChild(document.createTextNode("Noble Phantasm: "));

    switch(waifuName){
        case "MEDUSA":
            waifuImg.setAttribute("src", "images/bestsnek.jpg");
            waifuImg.setAttribute("alt", "Best Snake");

            waifuIntro.appendChild(document.createTextNode("Medusa is best snake!"));

            waifuClass.appendChild(document.createTextNode("Rider"));
            waifuAlignment.appendChild(document.createTextNode("Chaotic Good"));
            waifuNP.appendChild(document.createTextNode("Bellerophon"));
            break;
        case "CIRCE":
            waifuImg.setAttribute("src", "images/bestbirb.jpg");
            waifuImg.setAttribute("alt", "Best Birb");

            waifuIntro.appendChild(document.createTextNode("Circe is best birb!"));

            waifuClass.appendChild(document.createTextNode("Caster"));
            waifuAlignment.appendChild(document.createTextNode("Chaotic Balanced"));
            waifuNP.appendChild(document.createTextNode("Metabole Piglets"));
            break;
    }

    waifuTraitList.appendChild(waifuClass);
    waifuTraitList.appendChild(waifuAlignment);
    waifuTraitList.appendChild(waifuNP);

    sessionStorage.setItem("current-waifu", waifuName);
}




// --------------------------------------------------------------------------------------------------
// change user
let changeUserBtn = document.getElementById("change-user-btn");
changeUserBtn.onclick = function() {
    setUserName();
}

function setUserName(){
    let myName = prompt("Please enter your name.");

    if(!myName || myName === null || myName === ""){
        setUserName();
    } else{
        let welcomeMsg =  document.getElementById("welcome-msg");
        removeAllChildNodes(welcomeMsg); 

        localStorage.setItem("name", myName);

        let japLangSection = document.createElement("span");
        japLangSection.setAttribute("lang", "ja");
        japLangSection.appendChild(document.createTextNode("喜べ" + myName + "。君の願いをようやく叶う。"));

        welcomeMsg.appendChild(japLangSection);
    }
}




function removeAllChildNodes (parentNode){
    while(parentNode.hasChildNodes()){
        parentNode.removeChild(parentNode.firstChild);
    }
}
