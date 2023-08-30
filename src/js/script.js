

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1,
          touch: true,
          nav: true,
          navPosition: "top"

        },
        700: {
          gutter: 30,
          nav: true,
          touch: true,
          navPosition: "top"


        },
        900: {
          items: 1,
          nav: false

        }
      }
    });
  

document.querySelector('.prev').addEventListener('click', function (){
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function (){
    slider.goTo('next');
});


//tabs


const tabContent = document.querySelectorAll('.catalog__content'),
          tabWrapper = document.querySelector('.catalog__tabs'),
          tabs = document.querySelectorAll('.catalog__tab');


function hideTabContent () {
    tabContent.forEach(item => {
        item.style.display = 'none';
    });

    tabs.forEach(item => {
        item.classList.remove('catalog__tab_active')
    })
}

function showTabContent(i=0) {
    tabContent[i].style.display = 'flex';
    tabs[i].classList.add('catalog__tab_active');
}

hideTabContent();
showTabContent();

tabWrapper.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.closest('.catalog__tab')) { 
        tabs.forEach((item, i) => {
            if (target == item || target.parentElement == item ) {  
                hideTabContent();
                showTabContent(i);
            }
        });
    }
  });

  //

const links = document.querySelectorAll('.catalog-item__link'),
        backs = document.querySelectorAll('.catalog-item__back');
      
function toggle(elems) {
    elems.forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.catalog-item__content')[i].classList.toggle('catalog-item__content_active');
    document.querySelectorAll('.catalog-item__list')[i].classList.toggle('catalog-item__list_active');
    });
    });
}

toggle(links);
toggle(backs);




// const link = document.querySelectorAll('.catalog-item__link'),
//         back = document.querySelectorAll('.catalog-item__back'),
//         main = document.querySelectorAll('.catalog-item__content'),
//         descr = document.querySelectorAll('catalog-item__list');

// function hideMainContent () {
//     e.preventDefault();
//     main.forEach(item => {
//         item.classList.toggle('catalog-item__content_active')
//     })
   
// }

// function showMainContent () {
//     e.preventDefault();
//     descr.forEach(item => {
//         item.classList.toggle('catalog-item__list_active')
//     })
   
// }


// link[0].addEventListener('click', (e)  => {
//     const target = e.target;
//     e.preventDefault();
//     console.log(target);
//     // e.preventDefault();
//     // console.log('ok');
//     // hideMainContent();
// });

// // back.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     console.log('osk');
// //     showMainContent();
// // });
