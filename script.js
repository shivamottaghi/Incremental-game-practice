

(() => {
    let counter = 0
    let countertag = document.getElementById('countNum');
    let cookie = document.getElementById('cookie');
    console.log(cookie);
    cookie.addEventListener('click', () =>{
        counter ++;
        console.log(counter);
        countertag.innerHTML = counter ;
    })
})();