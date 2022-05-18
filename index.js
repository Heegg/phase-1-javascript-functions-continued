// code your solution here
function saturdayFun (play = "roller-skate") {
    return `This Saturday, I want to ${play}!`
}
saturdayFun()

function mondayWork (work = "go to the office") {
    return `This Monday, I will ${work}.`
}
mondayWork()




// function wrapAdjective(wrap = "special") {
//     const part1 = "*a hard worker*!"
//     return function (){
//         const part2 = "||a dedicated programmer||!"
//         console.log(`You are ${wrap}`)
//     }
// }
// wrapAdjective()



function wrapAdjective(wrap = "special") {
    const encouragingPromptFunction = wrapAdjective("*a hard worker*!")
    const encouragingPromptFunction2 = wrapAdjective("||a dedicated programmer||!")
    return `You are ${wrap}`
}
wrapAdjective()