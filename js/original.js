// $("#flipcard").flip();

$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

// filter .metal items
$grid.isotope({ filter: '.metal' });

// filter .alkali OR .alkaline-earth items
$grid.isotope({ filter: '.alkali, .alkaline-earth' });

// filter .metal AND .transition items
$grid.isotope({ filter: '.metal.transition' });

// show all items
$grid.isotope({ filter: '*' });


// init Isotope
var $grid = $('.grid').isotope({
  // options
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});