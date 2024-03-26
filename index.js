// code your solution here

function saturdayFun(activity = 'roller-skate'){
        return  'This Saturday, I want to ${activity}!'
    }
    


function mondayWork(plan = 'go to the office'){
    let result = 'This Monday, I will ${plan}.'
    return result
}


function wrapAdjective(style = '*'){
    return function (adjective = 'You are *a hard worker*!'){
        return 'You are ${style}${adjectives}${style}'
    }
}

console.log(mondayWork)


const awesome = wrapAdjective('||');
console.log(awesome('awesome'));