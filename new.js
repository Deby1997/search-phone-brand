

const searchPhone = () => {
    const searchText = document.getElementById('input-field').value;
    //display spinner

    show(searchText);
    document.getElementById('input-field').value = '';
}

const show = (searchText) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const displayPhones = phones => {
    const container = document.getElementById('phones');
    container.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
            <h6 class="card-title">Brand: ${phone.brand}</h6>
            <h6 class="card-title">Slug: ${phone.slug}</h6>
            <div>
            <button onclick="clickButton('${phone.data}')" type="button" class="btn btn-success">Details</button>
        </div>
        </div>
    </div>
       
        `;
        container.appendChild(div);

    })

}

show('iphone');
// button click for deatail
const clickButton = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => detailShow(data.phones))
}

const detailShow = user => {
    const details = document.getElementById('detail');
    user.forEach(use => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${use.image}" class="card-img-top p-3" alt="...">
        <div class="card-body">
            <h5 class="card-title">Phone Name: ${use.storage}</h5>
            <h6 class="card-title">Brand: ${use.storage}</h6>
            <h6 class="card-title">Slug: ${use.storage}</h6>
           
        </div>
    </div>
       
        `;
        details.appendChild(div);

    })
}
