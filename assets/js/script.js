// $( '[data-curtain-menu-button]' ).click( function () {
//     $( 'body' ).toggleClass( 'curtain-menu-open' );
// } )

// document.addEventListener( 'DOMContentLoaded', function () {
//     var elems = document.querySelectorAll( '.sidenav' );
//     var instances = M.Sidenav.init( elems, options );
// } );

$( document ).ready( function () {
    $( '.sidenav' ).sidenav();
} );
