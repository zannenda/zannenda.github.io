let waifuBody = document.body;
waifuBody.onload = function(){
    loadWaifuData();
}

let waifuNameHeader = document.getElementById("waifu-name");
let waifuImg = document.getElementById("waifu-pic");
let waifuOrigImgLink = document.getElementById("waifu-original-pic-link");
let waifuIntro = document.getElementById("waifu-intro");

let waifuClass = document.getElementById("waifu-class");
let waifuAlignment = document.getElementById("waifu-alignment");
let waifuNP = document.getElementById("waifu-np");

let waifuYoutube = document.getElementById("waifu-youtube");

function loadWaifuData(){
    removeAllChildNodes(waifuIntro);

    let waifuName = sessionStorage.getItem("current-waifu");
    waifuNameHeader.innerText = waifuName;

    switch(waifuName){
        case "MEDUSA":
            waifuImg.setAttribute("src", "images/best-snek-480px.png");
            waifuImg.setAttribute("alt", "Best Snake");
            waifuOrigImgLink.setAttribute("href", "images/best-snek.png");

            waifuIntro.appendChild(document.createTextNode("Medusa is best snake!"));

            waifuClass.appendChild(document.createTextNode("Rider"));
            waifuAlignment.appendChild(document.createTextNode("Chaotic Good"));
            waifuNP.appendChild(document.createTextNode("Bellerophon"));

            waifuYoutube.setAttribute("src", "https://www.youtube-nocookie.com/embed/WIvkVs0Z0xY");
            break;
        case "GRAY":
            waifuImg.setAttribute("src", "images/best-girl-480px.png");
            waifuImg.setAttribute("alt", "Best Girl");
            waifuOrigImgLink.setAttribute("href", "images/best-girl.png");

            waifuIntro.appendChild(document.createTextNode("Gray is best girl!"));

            waifuClass.appendChild(document.createTextNode("Assassin"));
            waifuAlignment.appendChild(document.createTextNode("Lawful Good"));
            waifuNP.appendChild(document.createTextNode("Rhongomyniad"));

            waifuYoutube.setAttribute("src", "https://www.youtube-nocookie.com/embed/ZG34meoeLlc");
            break;
        case "CIRCE":
            waifuImg.setAttribute("src", "images/best-birb-480px.png");
            waifuImg.setAttribute("alt", "Best Birb");
            waifuOrigImgLink("href", "images/best-birb.png");

            waifuIntro.appendChild(document.createTextNode("Circe is best birb!"));

            waifuClass.appendChild(document.createTextNode("Caster"));
            waifuAlignment.appendChild(document.createTextNode("Chaotic Balanced"));
            waifuNP.appendChild(document.createTextNode("Metabole Piglets"));

            waifuYoutube.setAttribute("src", "https://www.youtube-nocookie.com/embed/T07dr0Ay1wo");
            break;
    }
}

function removeAllChildNodes (parentNode){
    while(parentNode.hasChildNodes()){
        parentNode.removeChild(parentNode.firstChild);
    }
}