const searchPhone = ()=>{
    const phone= document.getElementById('phoneField');
    const searchPhone= phone.value;
    phone.value="";
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json.data))

}

