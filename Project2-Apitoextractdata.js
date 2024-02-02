const axios = require('axios');
const apiUrl = 'https://randomuser.me/api/';

axios.get(apiUrl)
  .then(response => {
    // Assuming response.data.results is an array of user objects
    const user = response.data.results[0];
    //console.log(user)
    // Assuming the user object has a property 'name' with 'first' and 'last' properties
    const username = `${user.name.first} ${user.name.last}`;
    const address =`${user.location.street.name},${user.location.city},${user.location.state}`
    const email =`${user.email}`
    const cell =`${user.cell}`
    console.log("Name is " + username);
    console.log("Address is "+address)
    console.log("Email: "+email)
    console.log("Phone no. "+cell)
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

