

(() => {
    let counter = 0;
    let countertag = document.getElementById('countNum');
    let cookie = document.getElementById('cookie');
    let clickMultBtn = document.getElementById('cookieMultiplier');
    let multCostTag = document.getElementById('multCost');
    let multCountTag = document.getElementById('multCount');
    let autoClickBtn = document.getElementById('cookieAutoClicker');
    let autoCostTag = document.getElementById('autoClickCost');
    let autoCountTag = document.getElementById('autoCount');
    let mult = 1 ;
    let multCost = 15;
    let auto = 0;
    let autoCost = 100;
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
    //event listener for auto clicker
    autoClickBtn.addEventListener('click', ()=>{
        if (counter>= autoCost){
            auto++;
            if (auto == 1){
                autoCountTag.innerHTML= '1 cookie';
            }else {
                autoCountTag.innerHTML = `${auto} cookies`;
            }
            counter = counter - autoCost;
            countertag.innerHTML = counter;
            autoCost+= Math.floor(autoCost/2);
            autoCostTag.innerHTML = autoCost;
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })
    setInterval(()=>{
        counter+= auto;
        countertag.innerHTML = counter;
    }, 1000)
})();