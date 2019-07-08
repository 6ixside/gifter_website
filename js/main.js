// JavaScript Document
(() => {

    //VARIABLE STACK
    let navInd = document.querySelector('.navInd'),
        navEnt = document.querySelector('.navEnt'),
        navOv = document.querySelector('.navOv'),
        learnInd = document.querySelector('.learnInd'),
        learnEnt = document.querySelector('.learnEnt'),
        mainTitleText = document.querySelector('.mainTitleText'),
        iconLogo = document.querySelector('.iconLogo'),
        overviewImg = document.querySelector('.overviewImg'),
        indImg = document.querySelector('.indImg'),
        optPeople = document.querySelector('.optPeople'),
        optTextArea = document.querySelector('.optTextArea'),
        optExp = document.querySelector('.optExp'),
        optBlurb = document.querySelector('.optBlurb'),
        shopBut = document.querySelector('.shopBut'),
        chromeBut = document.querySelector('.chromeBut1'),
        footInd = document.querySelector('.footInd'),
        footEnt = document.querySelector('.footEnt'),
        iconImg1 = document.querySelector('.iconImg1'),
        iconImg2 = document.querySelector('.iconImg2'),
        iconImg3= document.querySelector('.iconImg3'),
        iconImg4 = document.querySelector('.iconImg4'),
        infoBoxTitle1 = document.querySelector('.infoBoxTitle1'),
        infoBoxTitle2 = document.querySelector('.infoBoxTitle2'),
        infoBoxTitle3 = document.querySelector('.infoBoxTitle3'),
        infoBoxTitle4 = document.querySelector('.infoBoxTitle4'),
        infoBoxBody1 = document.querySelector('.infoBoxBody1'),
        infoBoxBody2 = document.querySelector('.infoBoxBody2'),
        infoBoxBody3 = document.querySelector('.infoBoxBody3'),
        infoBoxBody4 = document.querySelector('.infoBoxBody4'),
        chromeIcon = document.querySelector('.chromeIcon1'),
        chromeTitle = document.querySelector('.chromeTitle'),
        butLineChrome = document.querySelector('.butLineChrome1'),
        downloadIconChrome = document.querySelector('.downloadIconChrome1'),
        shopIcon = document.querySelector('.shopIcon'),
        shopTitle = document.querySelector('.shopTitle'),
        butLineShop = document.querySelector('.butLineShop'),
        downloadIconShop = document.querySelector('.downloadIconShop'),
        chromeButForm = document.querySelector('.chromeButForm'),
        shopButForm = document.querySelector('.shopButForm'),
        chromeButSub = document.querySelector('.chromeButSub'),
        shopButSub = document.querySelector('.shopButSub');

    
    //FUNCTIONS

    function indSwap(){
        mainTitleText.innerHTML = 'For Individuals';
        iconLogo.src = 'images/GFTR-Yellow.png';
        overviewImg.classList.add('hidden');
        indImg.classList.remove('hidden');
        indImg.classList.remove('entImg');
        iconImg1.src = 'images/iconValue-Individuals-1.png';
        iconImg2.src = 'images/iconValue-Individuals-3.png';
        iconImg3.src = 'images/iconValue-Individuals-2.png';
        iconImg4.src = 'images/iconValue-Individuals-4.png';
        optPeople.src = 'images/illustration-2a.png';
        optPeople.style.opacity = "0.7";
        optPeople.style.marginRight = "10%";
        optExp.style.flexDirection = "row-reverse";
        optBlurb.style.width = '60%';
        optBlurb.style.textAlign = 'left';
        optBlurb.style.marginLeft = '4%';
        optTextArea.style.marginRight = '-20%';
        shopBut.classList.add('hidden');
        chromeBut.classList.remove('hidden');
        infoBoxTitle1.innerHTML = 'Too many gift cards?';
        infoBoxBody1.innerHTML = 'Never lose or forget about a gift card by having them all in one place.';
        infoBoxTitle2.innerHTML = 'Save Money!';
        infoBoxBody2.innerHTML = 'Get customized offers without giving up your privacy.';
        infoBoxTitle3.innerHTML = 'Easy Gifting!';
        infoBoxBody3.innerHTML = 'Send gift cards easily to friends &amp; family.';
        infoBoxTitle4.innerHTML = 'Unwanted gift cards?';
        infoBoxBody4.innerHTML = "Don't settle for less. Trade your unwanted gift card away to get the one you want!";
    }

    function entSwap(){
        mainTitleText.innerHTML = 'For Enterprises';
        iconLogo.src = 'images/GFTR-Blue.png';
        overviewImg.classList.add('hidden');
        indImg.classList.remove('hidden');
        indImg.classList.add('entImg');
        iconImg1.src = 'images/iconValue-Enterprises-1.png';
        iconImg2.src = 'images/iconValue-Enterprises-2.png';
        iconImg3.src = 'images/iconValue-Enterprises-3.png';
        iconImg4.src = 'images/iconValue-Enterprises-4.png';
        infoBoxTitle1.innerHTML = 'Small &amp; Medium Sized Business?';
        infoBoxBody1.innerHTML = "Implement the world's first free gift card platform into your e-commerce store. Let your gift card program grow your business, the right way.";
        infoBoxTitle2.innerHTML = 'Maximize Revenue Generation';
        infoBoxBody2.innerHTML = '59% of customers spend more than the total gift card value. Increase the chance of your gift card being utilized through customer trading &amp; peer to peer gifting.';
        infoBoxTitle3.innerHTML = 'Low CAC &amp; Increased Loyalty';
        infoBoxBody3.innerHTML = 'Tap into the $320B global gift card market, increase loyalty and lower costs of aquiring customers all by interacting with customers in a totally new manner.';
        infoBoxTitle4.innerHTML = 'Customizable Campaigns';
        infoBoxBody4.innerHTML = "Provide value for your customers through personalized offers delivered to them in the most frictionless manner possible - without email.";
        optPeople.src = 'images/illustration-2b.png';
        optPeople.style.opacity = "0.7";
        optPeople.style.marginLeft = "10%";
        optExp.style.flexDirection = "row";
        optBlurb.style.width = '60%';
        optBlurb.style.textAlign = 'left';
        optBlurb.style.marginLeft = '4%';
        optTextArea.style.marginRight = '0%';
        optPeople.style.marginRight = '-20%';
        chromeBut.classList.add('hidden');
        shopBut.classList.remove('hidden');
    }

    function ovSwap(){
        mainTitleText.innerHTML = 'Overview';
        iconLogo.src = 'images/GFTR-Red.png';
        overviewImg.classList.remove('hidden');
        indImg.classList.add('hidden');
        optPeople.src = 'images/illustration-1.png';
        optPeople.style.opacity = "1";
        optPeople.style.marginRight = "0%";
        optExp.style.flexDirection = "column";
        optBlurb.style.width = '52%';
        optBlurb.style.textAlign = 'center';
        optBlurb.style.marginLeft = '0%';
        optTextArea.style.marginRight = '0%';
        shopBut.classList.remove('hidden');
        chromeBut.classList.remove('hidden');
    }

    function chromeButHide(){
        chromeIcon.classList.add('hidden');
        chromeTitle.classList.add('hidden');
        butLineChrome.classList.add('hidden');
        downloadIconChrome.classList.add('hidden');
        chromeButForm.classList.remove('hidden');
    }

    function chromeButShow(){
        chromeIcon.classList.remove('hidden');
        chromeTitle.classList.remove('hidden');
        butLineChrome.classList.remove('hidden');
        downloadIconChrome.classList.remove('hidden');
        chromeButForm.classList.add('hidden');
    }

    function shopButHide(){
        shopIcon.classList.add('hidden');
        shopTitle.classList.add('hidden');
        butLineShop.classList.add('hidden');
        downloadIconShop.classList.add('hidden');
        shopButForm.classList.remove('hidden');
    }

    function shopButShow(){
        shopIcon.classList.remove('hidden');
        shopTitle.classList.remove('hidden');
        butLineShop.classList.remove('hidden');
        downloadIconShop.classList.remove('hidden');
        shopButForm.classList.add('hidden');
    }



    //EVENT HANDLING
    navOv.addEventListener('click', ovSwap);
    navInd.addEventListener('click', indSwap);
    learnInd.addEventListener('click', indSwap);
    footInd.addEventListener('click', indSwap);
    navEnt.addEventListener('click', entSwap);
    learnEnt.addEventListener('click', entSwap);
    footEnt.addEventListener('click', entSwap);
    chromeBut.addEventListener('click', chromeButHide);
    chromeButSub.addEventListener('click', chromeButShow);
    shopBut.addEventListener('click', shopButHide);
    shopButSub.addEventListener('click', shopButShow);
    

})();