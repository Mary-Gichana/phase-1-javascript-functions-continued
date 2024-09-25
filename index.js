// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();


function mondayWork(place = 'go to the office'){
    return `This Monday, I will ${place}.`;
}
mondayWork();
function wrapAdjective(flair = "*"){
    return function (nice = "special"){
        return `You are ${flair}${nice}${flair}!`
    }
}

const encouragingPromptFunction = wrapAdjective("!!!")