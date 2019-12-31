let mainBody = document.querySelector('body');
mainBody.onload = function(){
    setUserName();
}


// dealing with the main image
let waifuImg = document.getElementById('waifu-pic');
waifuImg.onclick = function() {
    let mySrc = waifuImg.getAttribute('src');
    
    let myIntro = document.getElementById('intro');
    let myIntroChildNodes = myIntro.childNodes;
    for (let i = 0; i < myIntroChildNodes.length; i++){
        myIntro.removeChild(myIntroChildNodes[i]);
    }

    if(mySrc === 'images/bestbirb.jpg'){
        waifuImg.setAttribute('src', 'images/bestsnek.jpg');
        waifuImg.setAttribute('alt', 'Best Snake');

        myIntro.appendChild(document.createTextNode('Medusa is best snake!'));
    }

    if(mySrc === 'images/bestsnek.jpg'){
        waifuImg.setAttribute('src', 'images/bestbirb.jpg');
        waifuImg.setAttribute('alt', 'Best Birb');

        myIntro.appendChild(document.createTextNode('Circe is best birb!'));
    }
}

// change user
let changeUserBtn = document.getElementById('change-user-btn');
changeUserBtn.onclick = function() {
    setUserName();
}

function setUserName(){
    let myName = prompt('Please enter your name.');

    if(!myName || myName === null || myName === ''){
        setUserName();
    } else{
        let welcomeMsg =  document.getElementById('welcome-msg');
        let welcomeMsgChildNodes = welcomeMsg.childNodes;
        for (let i = 0; i < welcomeMsgChildNodes.length; i++){
            welcomeMsg.removeChild(welcomeMsgChildNodes[i]);
        }    

        localStorage.setItem('name', myName);
        welcomeMsg.appendChild(document.createTextNode('Welcome ' + myName + '!'));
    }
}