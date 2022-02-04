(function (){
    const para1 = document.querySelector('#para-1');
    document.querySelector('#button-3').addEventListener('click',function(){
        para1.classList.toggle('hide');
    });
})();