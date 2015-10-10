jQuery(function($) {
    'use strict',

    (function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 405) {
                    $('.main-nav').addClass('fixed-menu animated slideInDown');
                } else {
                    $('.main-nav').removeClass(
                        'fixed-menu animated slideInDown');
                }
            });
        } else {
            $('.main-nav').addClass('fixed-menu animated slideInDown');
        }
    })();

    $(window).resize(function() {
        menuToggle();
    });

    $('.main-nav ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollOffset: 0,
        filter: ':not(.no-scroll)'
    });

});


// events 

var getEvent = function(event) {
    var eventImage = $("<img>").attr("src", event.eventImageUrl)
        .attr("alt", event.eventInfoAltText);
    var eventTitle = $("<div class='event-title'>").text(event.title);
    var eventSubTitle = $("<div class='event-subtitle'>").text(event.subTitle);
    var eventSummary = $("<div class='event-item'>").append(eventImage).append(eventTitle).append(eventSubTitle);

    var eventInfoImage = $("<img>").attr("src", event.eventInfoImgUrl)
        .attr("alt", event.eventInfoAltText);
    var closeBtn = $("<i>").addClass("close fa fa-times").click(closeEventInfoBox);
    var registerBtn = $("<a>").attr("href", event.registerLink).addClass("register").text("Register");
    var eventInfoDiv = $("<div class='info'>").append(eventInfoImage).append(closeBtn).append(registerBtn);

    var next = $("<div class='next'>")
        .append($("<i>").addClass("fa fa-chevron-right"))
        .click(function(e) {
            navigateEvent($(this), true);
            e.preventDefault();
            e.stopPropagation();
        });
    var prev = $("<div class='prev'>")
        .append($("<i>").addClass("fa fa-chevron-left"))
        .click(function(e) {
            navigateEvent($(this), false);
            e.preventDefault();
            e.stopPropagation();
        });;
    var infoDivWrapper = $("<div class='infoWrapper'>").append(prev).append(eventInfoDiv).append(next);
    return $("<div class='event'>").append(eventSummary).append(infoDivWrapper);
}

var initEvents = function() {
    var events = [{
            title: "Primus",
            subTitle: "Best Manager",
            eventImageUrl: "images/events/Roman.png",
            eventInfoAltText: "Primus (Best Manager)",
            eventInfoImgUrl: "images/events/infoimages/Primus_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Consilium",
            subTitle: "B Plan",
            eventImageUrl: "images/events/Aztec.png",
            eventInfoAltText: "Consilium (B Plan)",
            eventInfoImgUrl: "images/events/infoimages/Consilium_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Ingenium",
            subTitle: "B-Quiz",
            eventImageUrl: "images/events/Indus%20Valley.png",
            eventInfoAltText: "Ingenium (B-Quiz)",
            eventInfoImgUrl: "images/events/infoimages/Ingenium_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Emporio",
            subTitle: "Marketing",
            eventImageUrl: "images/events/Roman.png",
            eventInfoAltText: "Emporio (Marketing)",
            eventInfoImgUrl: "images/events/infoimages/Emporio_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Stamenon",
            subTitle: "Finance",
            eventImageUrl: "images/events/Byzantine.png",
            eventInfoAltText: "Stamenon (Finance)",
            eventInfoImgUrl: "images/events/infoimages/Stamenon_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Effectus",
            subTitle: "Operations",
            eventImageUrl: "images/events/Egypt.png",
            eventInfoAltText: "Effectus (Operations)",
            eventInfoImgUrl: "images/events/infoimages/Effectus_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Populo",
            subTitle: "HR",
            eventImageUrl: "images/events/Mongolian.png",
            eventInfoAltText: "Populo (HR)",
            eventInfoImgUrl: "images/events/infoimages/Populo_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Quaestus",
            subTitle: "Entrepreneurship",
            eventImageUrl: "images/events/Mesopotamian.png",
            eventInfoAltText: "Quaestus (Entrepreneurship)",
            eventInfoImgUrl: "images/events/infoimages/Quaestus_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Primiceirius",
            subTitle: "General Management",
            eventImageUrl: "images/events/Persian.png",
            eventInfoAltText: "Primiceirius (General Management)",
            eventInfoImgUrl: "images/events/infoimages/Primiceirius_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }, {
            title: "Officium",
            subTitle: "CSR",
            eventImageUrl: "images/events/Incas.png",
            eventInfoAltText: "Officius (CSR)",
            eventInfoImgUrl: "images/events/infoimages/Officium_info.jpg",
            registerLink: "https://bluestreaklabs.typeform.com/to/KQUJof"
        }

    ];
    for (var count in events) {
        $("#events .eventlist").append(getEvent(events[count]));
    }
}
initEvents();

var startWaitAnimation = function(iconImageUrl) {
    var waitAnimationEle = $("#waitAnimation");
    waitAnimationEle.find("#icon img").attr("src", iconImageUrl.replace(".png", "_.png"));
    waitAnimationEle.fadeToggle();
}
var stopWaitAnimation = function() {
    $("#waitAnimation").fadeToggle(10);
}

var disableScroll = function(disable) {
    if (disable) {
        $(document).on('scroll touchmove mousewheel', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
    } else {
        $(document).off('scroll touchmove mousewheel');
    }
}

function navigateEvent($arrawEle, isNext) {
    var $event;
    if (isNext) {
        $event = $($arrawEle.closest(".event").next());
         if(!$event.hasClass("event")) {
             $event = $(".event").first();
         }
    } else {
        $event = $($arrawEle.closest(".event").prev());
        if(!$event.hasClass("event")) {
            $event = $(".event").last()
        }
    }
    showEventInfo($event, true);
}

$(".event").click(function() {
    showEventInfo($(this), false);
});

function closeEventInfoBox(e){
        $("#events .halo").fadeToggle(100);
        $(".event .infoWrapper.visible").removeClass("visible").fadeToggle(300);
        disableScroll(false);
        e.preventDefault();
        e.stopPropagation();
}

function showEventInfo($event, fromNavigation) {
    var $eventInfoWrapper = $event.find(".infoWrapper");
    var $eventInfoEvent = $event.find(".info");
    var visibleEle = $(".event .infoWrapper.visible").size();
    if ( visibleEle !== 0 && !fromNavigation ) {
        return;
    }
    var imageUrl = $event.find(".event-item img").attr("src");
    var image = $eventInfoEvent.find("img");
    image.height($(window).height() * 0.8);
    if (fromNavigation) {
        $(".event .infoWrapper.visible").fadeToggle(0).removeClass("visible");
        $eventInfoWrapper.fadeToggle(0);
        $eventInfoWrapper.addClass("visible");
        $eventInfoWrapper.css('margin-left', -1 * (image.width() / 2));
    } else {
        disableScroll(true);
        startWaitAnimation(imageUrl);
        $("#events .halo").fadeToggle(100);
        setTimeout(function() {
            stopWaitAnimation();
            $eventInfoWrapper.addClass('visible');
            $eventInfoWrapper.fadeToggle(300);
            $eventInfoWrapper.css('margin-left', -1 * (image.width() / 2));
        }, 1000);
    }
}

// Google Map Customization
(function() {

    var map;

    map = new GMaps({
        el: '#gmap',
        lat: 12.8483482,
        lng: 77.674908,
        scrollwheel: false,
        zoom: 16,
        zoomControl: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: false
    });

    var image = 'images/pin.png';
    map.addMarker({
        lat: 12.8483482,
        lng: 77.674908,
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#C34C39',
    });

}());
