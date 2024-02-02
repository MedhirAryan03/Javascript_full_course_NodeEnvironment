
//declaration of a set
const x = new Set(["a","b","c","D","E","F"]);

//add
x.add("10");
console.log(x);

//iterate over any set
for(let it of x){
    console.log(it)
}

//delete

console.log("***After Deletion***")
x.delete("10");
console.log(x);


//forEach(CallBack Function)

// *** forEACH() for callbacks***
x.forEach((x)=>{
    console.log(x+" has been called");
})