// console.log('Request data ...');

// const p = new Promise(function(resolve, reject){
//   setTimeout(() => {
//   console.log('Praparing data ...');

//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
//   }
//   resolve(backendData)
// }, 2000)
// })

// p.then(data=>{
//   const p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       data.modified = true
//       resolve (data)
//     }, 2000);
//   })

//   p2.then(clientData =>{
//     console.log("Data recieved", clientData);
//   })
// })

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(let i = 0; i < data.length; i++){
    document.body.innerHTML=`<h1>${data.results[i].name}</h1>`
    console.log(data.results[i].name);
  }
  });

