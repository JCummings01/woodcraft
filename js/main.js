var circle = $('.btn-circle')
setInterval(function () {
  circle.toggleClass('hovered')
}, 2800)

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo')
    event.preventDefault()
  })
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click()
  }
})

var map = null
// var isDraggable = $(document).width() > 480 ? true : false

// Stamen Map details
var layer = 'watercolor'

map = new google.maps.Map(document.getElementById('map'), {
  center: new google.maps.LatLng(39.658156, -105.602292),

  zoom: 10,
  scrollwheel: false,
  // draggable: isDraggable,
  mapTypeId: layer,
  mapTypeControlOptions: {
    mapTypeIds: [layer]
  }
})
var breckHaus = { lat: 39.4996, lng: -106.0433 }
var breckMarker = new google.maps.Marker({
  position: breckHaus,
  map: map,
  title: 'Breck Haus'
})
var vailHaus = { lat: 39.6358, lng: -106.3631 }
var vailMarker = new google.maps.Marker({
  position: vailHaus,
  map: map,
  title: 'Vail Haus'
})
var avonHaus = { lat: 39.6418, lng: -106.5159 }
var avonMarker = new google.maps.Marker({
  position: avonHaus,
  map: map,
  title: 'Avon Haus'
})
var airportCoords = { lat: 39.8617, lng: -104.6731 }
var airportMarker = new google.maps.Marker({
  position: airportCoords,
  map: map,
  title: 'Denver International Airport'
})
map.mapTypes.set(layer, new google.maps.StamenMapType(layer))
