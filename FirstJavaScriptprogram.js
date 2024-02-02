function display(x){
    console.log(x);
}

function abc(a,b,callback){
    let sum=a+b;
    callback(sum);
};

abc(2,3,display)