const loadurl = () => {

    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(response => response.json())
        .then(data => console.log(data))
}
loadurl();