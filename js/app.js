const searchPhone = ()=>{
    const phone= document.getElementById('phoneField');
    const searchPhone= phone.value;
    phone.value="";
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
    .then(res => res.json())
    .then(json => searchDisplay(json.data))

}

const searchDisplay = phones =>{
   const serchPhones = document.getElementById('show-Phone');
   phones.forEach(phone => {
    console.log(phone);
    const div= document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div class="card">
            <img  src="${phone.image}" class="card-img-top w-75" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">A mobile phone (or cellphone) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone).</p>
              <button  class="btn btn-primary w-50">Show-Details</button>
            </div>
           
          </div>
          
    `
    serchPhones.appendChild(div);
    
   });

}