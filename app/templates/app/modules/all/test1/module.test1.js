define([
        'app'
    ],

    function( App ){
        'use strict';

        App.module( 'Test1', function( Test1 ) {

            /**** NEED TO ACTUALLY CREATE SCAFFOLD ****/
            // var API = {
            //     initializeLayout: function() {
            //         // Handles the overall Header layout
            //         var headerLayout = new HeaderLayout();
            //         ld.headerRegion.show( headerLayout );

            //         Main.headerLayout = headerLayout;
            //     },
            // };

            Test1.on( 'start', function(){
                // API.initializeLayout();
                App.EventManager.trigger('module:test1:loaded');
            });
        });

        return App.Test1;
    }
);