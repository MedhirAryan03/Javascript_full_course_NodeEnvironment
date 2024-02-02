//A callback is a function passed as an argument to another function.

//Lets understand by a program which removes all the odd elements from the array 
//and shows only the even numbers

const arr=[20,25,29,60,20,12,13,15,19,99,44,89,77,68];

const onlyeven=create_new(arr,function check(x){
    if (x%2==0){
        return true
    }else{
        return false
    }
});

function create_new(n,callback){
    newarr=[]
    for(let it of n){
        if(callback(it)){
            newarr.push(it);
        }
    }
    return newarr;
}

console.log(onlyeven)




//Go through the example well


/* TASK - Create an array with user input of n numbers, run 2 for loops from o to n/2 and n/2
to n with 2 and 3 seconds delay simultaneously(dont make one loop wait for the other)
and add them in a new array and display the array */