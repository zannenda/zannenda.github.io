let waifuBody = document.body;
waifuBody.onload = function(){
    loadWaifuData();
}

let waifuNameHeader = document.getElementById("waifu-name");
let waifuImg = document.getElementById("waifu-pic");
let waifuIntro = document.getElementById("waifu-intro");
let waifuTraitList = document.getElementById("waifu-traits");

function loadWaifuData(){
    removeAllChildNodes(waifuIntro);
    removeAllChildNodes(waifuTraitList);

    let waifuName = sessionStorage.getItem("current-waifu");
    waifuNameHeader.innerText = waifuName;

    let waifuClass = document.createElement("li");
    waifuClass.appendChild(document.createTextNode("Class: "));
    let waifuAlignment = document.createElement("li");
    waifuAlignment.appendChild(document.createTextNode("Alignment: "));
    let waifuNP = document.createElement("li");
    waifuNP.appendChild(document.createTextNode("Noble Phantasm: "));

    switch(waifuName){
        case "MEDUSA":
            waifuImg.setAttribute("src", "images/best-snek.jpg");
            waifuImg.setAttribute("alt", "Best Snake");

            waifuIntro.appendChild(document.createTextNode("Medusa is best snake!"));

            waifuClass.appendChild(document.createTextNode("Rider"));
            waifuAlignment.appendChild(document.createTextNode("Chaotic Good"));
            waifuNP.appendChild(document.createTextNode("Bellerophon"));
            break;
        case "GRAY":
            waifuImg.setAttribute("src", "images/best-girl.jpg");
            waifuImg.setAttribute("alt", "Best Girl");

            waifuIntro.appendChild(document.createTextNode("Gray is best girl!"));

            waifuClass.appendChild(document.createTextNode("Assassin"));
            waifuAlignment.appendChild(document.createTextNode("Lawful Good"));
            waifuNP.appendChild(document.createTextNode("Rhongomyniad"));
            break;
        case "CIRCE":
            waifuImg.setAttribute("src", "images/best-birb.png");
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
}

function removeAllChildNodes (parentNode){
    while(parentNode.hasChildNodes()){
        parentNode.removeChild(parentNode.firstChild);
    }
}