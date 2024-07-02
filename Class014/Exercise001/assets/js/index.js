const cardContainer = document.getElementById('container-card');
const name = document.getElementById('name');
const age = document.getElementById('age');
const nin = document.getElementById('nin'); 
const phone = document.getElementById('phone');

const url = "../db/data.json";



fetch(url)
.then(response => response.json())
.then(data => {
   
   printDataInScreen(data);

}); 


const printDataInScreen = (data) => {

   for (const reg of data.User) {
      
   // console.log(reg);

   const main = document.getElementById('container-cards'); 
   
   main.innerHTML += `
      
   <div class="container-card">
      <h2> Name: </h2>
      <p> ${reg.name} </p>
      
      <h2> Age: </h2>
      <p> ${reg.age} </p>

      <h2> NIN: </h2>
      <p> ${reg.nin} </p>

      <h2> Phone: </h2>
      <p> ${reg.phone} </p>

   </div>
   
   `
}

}


// For of (Returns the object in the array positino)
// For in (Returns the array index)

