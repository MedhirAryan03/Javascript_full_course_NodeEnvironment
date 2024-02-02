//Code related to all the object and its properties in javascript


//Declare an object
const student = {
    "Name":"Rahul",
    "Age":20,
    "id":45820
}

//how to acess the properties of an object
console.log("Name is "+student.Name);
console.log("Age is "+student.Age);
console.log("Id is "+student.id);

//Alternative Method 

console.log("Alternate Method: Name is "+student["Name"])

//To change the name of Value

student.Age=21;
console.log(student["Age"]);

//Add a new property to the list

student.Course="Btech"
console.log("Added course is "+student.Course)

//loop through the properties

console.log("***LOOPING THROUGH KEYS***")
for(let i in student){
    console.log(i)
}

console.log("***LOOPING THROUGH VALUES***")
for(let i in student){
    console.log(student[i])
}

//Check if the key is present in the object or not 
console.log("Age" in student)
