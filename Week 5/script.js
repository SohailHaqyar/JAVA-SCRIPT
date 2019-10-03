// Question Number 1 
// let Numbers = [1,2,3,4];
 
// const Double = function(element){
//     const doubled = element*2;
//     return doubled;
// }
// const result = Numbers.map(Double);
// console.log(result);
//Done//

//Question Number 2 //

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];
//collect two day's worth of task

let tasks = monday.concat(tuesday);
//convert mins to hrs

let durations=[];
for (let i=0;i<tasks.length;i++){
    durations.push((tasks[i].duration)/60);
};
console.log(durations);
//filtered out stuff
let filtered = durations.filter(x => x < 2)
console.log(filtered);
//multiplications and stuff
let Allthemoney = filtered.map(x => x*20);
console.log(Allthemoney)//hhhah console .log the money//
let TheTotalAmount = 0;
for (let i in Allthemoney){
    total += salary[i];
}

//how much is this mmoney of yours
console.log('All you fucking get is'+ '\u20AC'+TheTotalAmount);
//Done with some help from someone..




