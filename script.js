

(() => {
    let counter = 0;
    let countertag = document.getElementById('countNum');
    let cookie = document.getElementById('cookie');
    let clickMultBtn = document.getElementById('cookieMultiplier');
    var mult = 1 ;
    console.log(cookie);
    cookie.addEventListener('click', () =>{
       counter += mult;
        countertag.innerHTML = counter ;
    })

    clickMultBtn.addEventListener('click' , ()=>{
        if (counter>= 25){
            mult++;
            document.getElementById('multCount').innerText = mult;
            counter = counter - 25;
            countertag.innerHTML = counter;
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })

})();