// input search
const searchPhone = ()=>{
    const phone= document.getElementById('phoneField');
    const searchPhone= phone.value;
    phone.value="";
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
    .then(res => res.json())
    .then(json => searchDisplay(json.data))

}
// show Phone 
const searchDisplay = phones =>{
   const serchPhones = document.getElementById('show-Phone');
   phones.forEach(phone => {
    const div= document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card">
            <img  src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">A mobile phone (or cellphone) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone).</p>
              <button onclick="getPhone('${phone.slug}')"  class="btn btn-primary w-50">Show-Details</button>
            </div>
           
          </div>
          
    `
    serchPhones.appendChild(div);
    
   });

}

// show phone Details
const getPhone=phoneId=>{
const url= `https://openapi.programming-hero.com/api/phone/${phoneId}`;
fetch(url)
.then(res => res.json())
.then(json => showDetails(json.data));
}

const showDetails=data=>{
    console.log(data);
    const manufacring= data.mainFeatures;
    const getSinglePhone=document.getElementById('singlePhone');
    const div=document.createElement('div');
    div.innerHTML=`
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">Release Date: ${data.releaseDate}</p>
              <p class="card-text">Phone Storage: ${manufacring.storage}</p>
              <p class="card-text">Memory: ${manufacring.memory}</p>
              <p class="card-text">Display-Size: ${manufacring.displaySize}</p>
            </div>
          </div>
        </div>
      </div>
    `
    getSinglePhone.appendChild(div);
    

}

