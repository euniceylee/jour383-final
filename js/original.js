// $("#flipcard").flip();

$( function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry'
  });

  // filter functions
  var filterFns = {
    // // show if number is greater than 50
    // numberGreaterThan50: function() {
    //   var number = $(this).find('.number').text();
    //   return parseInt( number, 10 ) > 50;
    // },

    // filter by data category
    nosegroup: function() {
      var name = $(this).find('.nose').text();
      return name.match( /nosegroup$/ );
    }
  };

  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


  
});
