
//slide
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    mouseDrag: true,
    responsive: {
        640: {
          edgePadding: 20,
          items: 1,
          touch: true,
          mouseDrag: true
        },
        700: {
            mouseDrag: true,
            touch: true,
            items: 1,
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

//modal
// const modalConsultation = document.querySelectorAll('[data-modal="consultation"]'),
//         modalBtnClose = document.querySelectorAll('.modal__close'),
//         modalBtnBuy = document.querySelectorAll('.button_mini'),
//         modalDescr = document.querySelectorAll('.modal__descr'),
//         modalSubtitle = document.querySelectorAll('.catalog-item__subtitle')
//         orderTrigger = document.querySelectorAll('[data-modal="order"]');

//        console.log(modalDescr)
    
// function openModal (modalSelector) {
//     const modal = document.querySelector(modalSelector);
//     modal.style.display = 'block';
// }

// function closeModal(modalSelector) {
//     const modal = document.querySelector(modalSelector);
//     modal.style.display = 'none';
// }

// modalConsultation.forEach(elem => {
//     elem.addEventListener('click', () => {
//         openModal('.overlay')
//         openModal('#consultation')
//     })
// })


// modalBtnBuy.forEach((elem, i) => {
//         elem.addEventListener('click', () => {
//             openModal('.overlay')
//             openModal('#order')
//             // modalDescr[i].textContent(modalSubtitle[i]);
//         });

// })


///coment

// orderTrigger.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//         openModal('.overlay')
//         openModal('#order')
//         console.log(modalSubtitle[i])
//         modalDescr[i].textContent(modalSubtitle[i])
//     });
// });

// modalBtnBuy.forEach((elem, i) => {
//     elem.addEventListener('click', () => {
//         openModal('.overlay')
//         openModal('#order')
//         modalDescr[i].textContent(modalSubtitle[i])
//     })
// })






//my
// modalBtnClose.forEach(elem => {
//     elem.addEventListener('click', () => {
//         closeModal('#consultation')
//         closeModal('#order')
//         closeModal('.overlay')
//     } )
// })






$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});


//validation


function validateForms (form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: 'required'
        },
        messages: {
            name: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
            },
            phone: "Please specify your phone number"
        
        }
        
    
    })
}
validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

$('input[name=phone]').mask("+1 (111) 999-99-99");



$('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});


//smooth scroll and pageup

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#up']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});



new WOW().init();