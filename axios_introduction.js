const axios = require('axios');
//let str=""
  for(let i=1;i<=5;i++){
    var k="https://jsonplaceholder.typicode.com/posts/"
    k=k+(i.toString())
    axios.get(k)
    .then(response => {
       console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
  }
 
