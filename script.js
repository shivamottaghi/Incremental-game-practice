

(() => {
    let counter = 0;
    let countertag = document.getElementById('countNum');
    let cookie = document.getElementById('cookie');
    let clickMultBtn = document.getElementById('cookieMultiplier');
    let multCostTag = document.getElementById('multCost');
    let multCountTag = document.getElementById('multCount');
    let mult = 1 ;
    let multCost = 25;
    //event listener for cookie
    cookie.addEventListener('click', () =>{
       counter += mult;
        countertag.innerHTML = counter ;
    })
    //event listener for click multiplier
    clickMultBtn.addEventListener('click' , ()=>{
        if (counter>= multCost){
            mult++;
            multCountTag.innerText = `${mult} cookies`;
            counter = counter - multCost;
            multCost += Math.floor(multCost/2);
            countertag.innerHTML = counter;
            multCostTag.innerText = multCost;
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })

})();