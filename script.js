

(() => {
    //-------------my variables---------------
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
    let multCost = 20;
    multCostTag.innerHTML = multCost;
    let auto = 0;
    let autoCost = 110;
    autoCostTag.innerHTML= autoCost;
    //-------------my variables End--------------


    //-------------My Functions------------------
    setInterval(()=>{
        counter+= auto;
        tagUpdate(countertag , counter)
    }, 1000)


    const tagUpdate = ( tagname, text) => {
      tagname.innerHTML = text;
    }
    //-------------My Functions End--------------

    //event listener for cookie
    cookie.addEventListener('click', () =>{
       counter += mult;
        tagUpdate(countertag , counter)
    })


    //event listener for click multiplier
    clickMultBtn.addEventListener('click' , ()=>{
        if (counter>= multCost){
            mult++;
            counter = counter - multCost;
            multCost += Math.floor(multCost/2);
            tagUpdate(countertag , counter)
            tagUpdate(multCountTag, `${mult} cookies`)
            tagUpdate(multCostTag, multCost)
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })


    //event listener for auto clicker
    autoClickBtn.addEventListener('click', ()=>{
        if (counter>= autoCost){
            auto++;
            if (auto == 1){
                tagUpdate(autoCountTag, '1 cookie')
            }else {
                tagUpdate(autoCountTag, `${auto} cookies`)
                // autoCountTag.innerHTML = `${auto} cookies`;
            }
            counter = counter - autoCost;
            autoCost+= Math.floor(autoCost/2);
            tagUpdate(countertag , counter)
            tagUpdate(autoCostTag , autoCost)
            // autoCostTag.innerHTML = autoCost;
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })
})();