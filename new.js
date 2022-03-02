const show = (searchText) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const displayPhones = phones => {
    const container = document.getElementById('phones');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `
        
        <div class="container design">
        <div class="row-3 row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top p-3" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <h5 class="card-title">${phone.brand}</h5>
                        <h5 class="card-title">${phone.slug}</h5>
                        <h5 class="card-title">${phone.phone_name}</h5>
                        
                    </div>
                </div>
            </div>

        </div>
        `;
        container.appendChild(div);

    })
}

show('iphone');

// const load = user => {
//     console.log(user);
// }