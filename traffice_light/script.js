function switchOffLight(lightColor) {
    const light = document.getElementById(lightColor);
    const lightElement = document.getElementById(`${lightColor}-light`);
    if (light.classList.contains(`toggle-${lightColor}`)) {
        light.classList.remove(`toggle-${lightColor}`);
    }
    if (lightElement.classList.contains(`toggle-${lightColor}`)) {
        lightElement.classList.remove(`toggle-${lightColor}`);
    }
}

function switchOnLight(lightColor){
    const light = document.getElementById(lightColor);
    const lightElement = document.getElementById(`${lightColor}-light`);
    light.classList.toggle(`toggle-${lightColor}`);
    lightElement.classList.toggle(`toggle-${lightColor}`);
}

function switchOnAllLights(){
    switchOnLight("red");
    switchOnLight("yellow");
    switchOnLight("green");
}

function switchOnAlternateLights(){
    switchOffLight("red");
    switchOffLight("yellow");
    switchOffLight("green");
    const interValId1 = setInterval(() => {
        switchOnLight("red");
        setTimeout(() => switchOffLight("red"), 300);
    }, 600);
    
    const interValId2 = setInterval(() => {
        switchOnLight("yellow");
        setTimeout(() => switchOffLight("yellow"), 300);
    }, 1200);
    
    const interValId3 = setInterval(() => {
        switchOnLight("green");
        setTimeout(() => switchOffLight("green"), 300);
    }, 1800);
}

function handleClickRed(){
    switchOffLight("yellow");
    switchOffLight("green");
    switchOnLight("red");
}

function handleClickYellow(){
    switchOffLight("red");
    switchOffLight("green");
    switchOnLight("yellow");
}

function handleClickGreen(){
    switchOffLight("red");
    switchOffLight("yellow");
    switchOnLight("green");
}

function handleClickAll(){
    switchOffLight("red");
    switchOffLight("yellow");
    switchOffLight("green");
    switchOnAllLights();
}

function handleClickAlt(){
    switchOnAlternateLights();
}
