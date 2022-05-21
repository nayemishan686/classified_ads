$(window).on("scroll", (function() {
    $(this).scrollTop() > 100 ? $(".header-part").addClass("header-fixed") : $(".header-part").removeClass("header-fixed")
})), $(".option-btn").on("click", (function() {
    $(".header-search").toggleClass("active"), $(".header-option").slideToggle("slow")
})), $(".search-btn").on("click", (function() {
    $(".header-form").slideToggle("slow"), $(this).children(".fa-search").toggleClass("fa-times")
})), $(".sidebar-btn").on("click", (function() {
    $(".sidebar-part").addClass("active"), $(".sidebar-cross").on("click", (function() {
        $(".sidebar-part").removeClass("active")
    }))
})), $(".header-widget").on("click", (function() {
    $(this).next(".dropdown-card").slideToggle();
    var e = $(this).next(".dropdown-card");
    $(".dropdown-card:visible") ? ($(".dropdown-card").hide(), e.show()) : $(".dropdown-card:hidden") && e.show()
})), $((function() {
    $(".navbar-dropdown a").click((function() {
        $(this).next().toggle(), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show())
    }))
})), $((function() {
    $(".nasted-menu").click((function() {
        $(this).next().toggle(), $(".nasted-menu-list:visible").length > 1 && ($(".nasted-menu-list:visible").hide(), $(this).next().show())
    }))
})), $(".feature-wish").on("click", (function() {
    $(this).toggleClass("active")
})), $(".product-btn .fa-heart").on("click", (function() {
    $(this).toggleClass("fas")
})), $(".modal-link").on("click", (function() {
    $(".modal-body").children().removeClass("active"), $(this).addClass("active")
})), $(".product-widget-link").on("click", (function() {
    $(".product-widget-link").removeClass("active"), $(".product-widget-dropdown").slideUp("slow"), $(this).addClass("active"), $(this).next(".product-widget-dropdown").slideDown("slow")
})), $(".eye").on("click", (function() {
    $(".eye").toggleClass("fa-eye-slash"), $(".eye").toggleClass("fa-eye");
    var e = $("#pass");
    "password" === e.attr("type") ? e.attr("type", "text") : e.attr("type", "password")
})), $(".navbar-widget li").on("click", (function() {
    $(".navbar-widget li").removeClass("active"), $(this).addClass("active")
})), $(".navbar-user").on("click", (function() {
    $(".sidebar-part").addClass("active"), $(".cross-btn").on("click", (function() {
        $(".sidebar-part").removeClass("active")
    }))
})), $(".edit-btn").on("click", (function() {
    $(".edit-option").addClass("active"), $(".cancel").on("click", (function() {
        $(".edit-option").removeClass("active")
    }))
})), $(".message-filter-btn").on("click", (function() {
    $(".message-filter-src").toggleClass("active"), $(this).children(".fa-search").toggleClass("fa-times")
})), $(".message-item").on("click", (function() {
    $(".message-list li").removeClass("active"), $(this).addClass("active")
})), $(".author-widget .follow").on("click", (function() {
    $(this).toggleClass("active")
})), $(".wish").on("click", (function() {
    $(this).toggleClass("active")
})), $(".review-dots-btn").on("click", (function() {
    $(this).next(".review-widget-list").toggleClass("active")
}));

//code for product slider
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    navText: ['<i class="far fa-arrow-alt-circle-left"></i>', '<i class="far fa-arrow-alt-circle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

//code for testimonial
const clientTabItems = document.querySelectorAll('.client-item');
const showDiv = document.querySelector('.show-info');

clientTabItems.forEach((item) => {
    item.addEventListener('click', () => {
        showInfo(item);
    });
});

function showInfo(item) {
    showDiv.querySelector('.show-img img').src = item.querySelector('.client-thumbnail img').src;
    showDiv.querySelector('.show-name').innerHTML = item.querySelector('.client-name').innerHTML;
    showDiv.querySelector('.show-designation').innerHTML = item.querySelector('.client-designation').innerHTML;
    showDiv.querySelector('.show-description').innerHTML = item.querySelector('.client-description').innerHTML;
    setActiveTab(item);
}

function setActiveTab(item) {
    clientTabItems.forEach((item) => {
        item.classList.remove('active'); // resetting active tab
    });
    item.classList.add('active');
}

showInfo(clientTabItems[0]); // default active tab


//code counter overview
$('.counter').counterUp({
    delay: 10,
    time: 2000
});