"use strict";
(function(){
    // Mainheader
    var btnHeader = document.getElementById('btnHeader');
    var mainHeader = document.querySelector('#main-header');

    var headerListener = function(){
        mainHeader.innerHTML = 'JavaScript is Cool';
    }
    btnHeader.addEventListener('click', headerListener);

    // Subheader
    var btnSubHeader = document.querySelector('#btnSubHeader');
    var subHeader = document.querySelector('#sub-header');
    // console.log(subHeader.innerHTML);
    var subHeadListener = function(){
        subHeader.style.color = '#0096FF'
    }
    btnSubHeader.addEventListener('click', subHeadListener);

    //  List items
    var btnList = document.querySelector('#btnUl');
    var listItems = document.querySelectorAll('li');
    // console.log(listItems);
    var listListener = function(){
        for(var i = 0; i < listItems.length; i++){
            if(listItems[i].getAttribute("data-dbid") == 1){
                listItems[i].style.color = '#0096FF';
            }else if((i+1) % 2 !== 0){
                continue;
            }else{
                listItems[i].style.color = '#808080';
            }
        }
    }
    btnList.addEventListener('click', listListener);

    //  Paragraph
    var paraBtn = document.querySelector('#btnPara');
    var subParagraphs = document.querySelectorAll('.sub-paragraph');
    var paraListener = function (){
        subParagraphs[0].innerText = 'Mission Accomplished!';
    }
    paraBtn.addEventListener('click', paraListener);
})();