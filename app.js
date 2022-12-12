const toggler = document.querySelectorAll('ul li > a'),
    toggleFun = (ele) => {
        ele.onclick = () => {
            if (ele.parentElement.classList.contains('expand')) {
                ele.parentElement.classList.remove('expand');
            } else {
                Array.from(toggler).map(ele => ele.parentElement.classList.remove('expand'));
            ele.parentElement.classList.add('expand')
            }
            
          }
    };

Array.from(toggler).map(toggleFun);