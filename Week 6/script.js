//Okay question 1;
// Your task is to write a function that takes another function as an argument and runs it.
//function
function sup() {
    console.log('dumb cunt')
}
function wassup(sup){
    sup()
}
console.log(wassup);
//done
//Okay Question 2 ;
//I am not gonna bother with the instrunctions //
function threeCallback (){
    console.log("yeah man by 3")
}
function fiveCallback (){
    console.log("yeah bro by 5")
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const array=[];
    for(let i=startIndex; i<=stopIndex; i++){
        array.push(i)
        if(i%3 === 0){
            threeCallback();
        }
        if(i%5 === 0){
            fiveCallback();
        }
    }
    console.log(array);
}


threeFive(10, 15, threeCallback, fiveCallback);
//Awesome//
