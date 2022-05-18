

(() => {
    //-------------my variables---------------
    // XxXxX tags XxXxX

    let countertag = document.getElementById('countNum');
    let cookie = document.getElementById('cookie');
    let clickMultBtn = document.getElementById('cookieMultiplier');
    let multCostTag = document.getElementById('multCost');
    let multCountTag = document.getElementById('multCount');
    let autoClickBtn = document.getElementById('cookieAutoClicker');
    let autoCostTag = document.getElementById('autoClickCost');
    let autoCountTag = document.getElementById('autoCount');
    let oventCostTag = document.getElementById('ovenCost');
    let ovenBtn = document.getElementById('oven');
    let howManyCursor = document.getElementById('cursor');
    let howManyChef = document.getElementById('chef');
    let howManyOven = document.getElementById('howmanyoven');
    let bonusBtn = document.getElementById('bonus');
    let bonusCostTag = document.getElementById('bonusCost');
    let scoreToBuyBonusTag = document.getElementById('scoreToBuyBonus');
    let bonusIncreaseRateTag = document.getElementById('bonusIncreaseRate');
    let timerTag = document.getElementById('timer');
    // XxXxX  tags End XxXxX
    let counter = 0;
    let mult = 1 ;
    let multCost = 20;
    multCostTag.innerHTML = multCost;
    let auto = 0;
    let autoCost = 110;
    autoCostTag.innerHTML= autoCost;
    let oven = 0;
    let ovenCost = 550;
    oventCostTag.innerHTML = ovenCost;
    // let chance = 0.1;
    let cursor = 1;
    let chef = 0;
    let myOven = 0;

    let check = false;
    let bonusCost = 1400;
    let bonusIncreaseRate = 0.2;
    let scoreToBuyBonus = 1500;
    let bonusTimerCounter = 5;
    let bonusIntervalCalled = false;
    //-------------my variables End--------------


    //-------------My Functions------------------
    /*
    //Bonus By Chance function. RIP
    setInterval(()=>{
        let random = Math.random();
        if (random < chance && check){
            bonus()
        }

    }, 6000)
    const bonus = () => {
        check = false;
        let timeLeft = 8
        let bonusTag = document.getElementById('heading');
        let origintext = bonusTag.innerText;
        let originbgColor = bonusTag.style.backgroundColor;
        bonusTag.style.backgroundColor = '#e71d36';
        let bonustext = `IT\'S BONUS TIME!!!! NOW YOU HAVE 2X CLICKS!!! TIME LEFT: ${timeLeft}`;
        bonusTag.innerHTML = bonustext;
        mult *= 2;
        let bonusInterval = setInterval(()=>{
            if(timeLeft==0){
                clearInterval(bonusInterval);
                mult = mult/2;
                tagUpdate(bonusTag, origintext)
                bonusTag.style.backgroundColor = originbgColor;
                check = true;
            }else {
                timeLeft --;
                bonustext = `IT\'S BONUS TIME!!!! NOW YOU HAVE 2X CLICKS!!! TIME LEFT: ${timeLeft}`;
                bonusTag.innerHTML = bonustext;
            }
        }, 1000)

    }
    */
    setInterval(()=>{
        //update the counter
        counter+= auto + oven;
        tagUpdate(countertag , counter)
    }, 1000)



    const tagUpdate = ( tagname, text) => {
      tagname.innerHTML = text;
    }
    //-------------My Functions End--------------

    //event listener for cookie
    cookie.addEventListener('click', () =>{
        if (check == false){
            counter += mult;
            tagUpdate(countertag , counter)
        } else {
            counter += Math.floor(counter * bonusIncreaseRate);
            if (bonusIntervalCalled == true){
                bonusIntervalCalled = false;
                bonusFunc();
            }
        }

    })
    function bonusFunc() {
        timerTag.innerText = `Time left : ${bonusTimerCounter}`;
        const bonusTimer = setInterval(()=>{
            if (bonusTimerCounter == 0){
                clearInterval(bonusTimer)
                check = false;
                timerTag.innerText = '';
            }else {
                bonusTimerCounter --;
                timerTag.innerText = `Time left : ${bonusTimerCounter}`;
            }
        },1000)
    }


    //event listener for click multiplier
    clickMultBtn.addEventListener('click' , ()=>{
        if (counter>= multCost){
            cursor++;
            mult= mult + Math.ceil(cursor/10);
            console.log(Math.ceil(cursor/10));
            counter = counter - multCost;
            multCost += Math.floor(multCost/5);
            tagUpdate(countertag , counter)
            tagUpdate(multCountTag, `${mult} cookies`)
            tagUpdate(multCostTag, multCost)
            tagUpdate(howManyCursor, `X ${cursor}`)
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })


    //event listener for auto clicker
    autoClickBtn.addEventListener('click', ()=>{
        if (counter>= autoCost){
            auto++;
            chef++;
            if (auto + oven == 1){
                tagUpdate(autoCountTag, '1 cookie')
            }else {
                tagUpdate(autoCountTag, `${auto + oven} cookies`)
            }
            counter = counter - autoCost;
            autoCost+= Math.floor(autoCost/4);
            tagUpdate(countertag , counter)
            tagUpdate(autoCostTag , autoCost)
            tagUpdate(howManyChef, `X ${chef}`)
        } else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })

    //event listener for oven
    ovenBtn.addEventListener('click', () => {
        if (counter>= ovenCost){
            oven+= 4;
            myOven++;
            if (auto + oven == 1){
                tagUpdate(autoCountTag, '1 cookie')
            }else {
                tagUpdate(autoCountTag, `${auto + oven} cookies`)
            }
            counter = counter - ovenCost;
            ovenCost += Math.floor(ovenCost/2);
            tagUpdate(countertag , counter)
            tagUpdate(oventCostTag , ovenCost)
            tagUpdate(howManyOven, `X ${myOven}`)
        } else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })

    bonusBtn.addEventListener('click', () =>{
        if (counter >= scoreToBuyBonus){
            counter -= bonusCost;
            check = true;
            bonusIntervalCalled = true;
        }else {
            window.alert('OOPS!! You don\'t have enough Cookies!');
        }
    })
})();