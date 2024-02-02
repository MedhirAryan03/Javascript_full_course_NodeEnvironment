const readline=require('readline')
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//Medhir here to explains some key points
/* readline.createInterface({ input, output }): 
Creates an instance of the readline.Interface class. It takes an object as an argument with two properties:
input: Specifies the readable stream from which to read input. Typically set to process.stdin for command line input.
output: Specifies the writable stream to which the interface writes its output. Usually set to process.stdout for command line output.
*/

r1.question("Enter your Age? ",(x)=>{
    if(x>=18){
        console.log("You are an adult as your age is "+x);
    }else{
        console.log("You are a teenager as your age is "+x);
    }
});

//rl.question() is a method provided by readline which takes 2 parameters (prompt,callback function)
/*I will explain you about callback function later in the project for now just know that when the user
gives a prompt,the callback() function is triggered*/

