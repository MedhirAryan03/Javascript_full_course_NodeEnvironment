//Medhir here,This is a very important topic for javascript,do give it ample time
/*In asynchronous functions, tasks are not necessarily executed in sequence. 
Instead, the program can continue to execute while waiting for certain tasks to complete.
Asynchronous code is well-suited for tasks like fetching data from a remote server, 
reading files, or handling user input without freezing the entire program. */

async function play(callback){
console.log("Process 1");
setTimeout(function(){
    for(let it=2;it<=9;it++){
        console.log("Process "+it);
}
},3000);
console.log("Process 10");
callback();
}
play(()=>{
    console.log("Notice how 10 and this statement got printed before 2 to 9 as the system didnt freeze")
})


//task will be given together in await.js file
