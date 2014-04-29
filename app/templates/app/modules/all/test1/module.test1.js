define([
		'shared.modulemanager',
        './router.test1',

		'json!./config.module.test1.json'
	],

    function( ModuleManager, Router, ModulesList ){
        'use strict';

        App.module( 'Test1', function( Test1 ) {
            Test1.on( 'start', function(){
            	this.ModuleManager = new ModuleManager(ModulesList);
                this.Router = new Router(this);

                App.EventManager.trigger('module:test1:loaded');
            });
        });

        return App.Test1;
    }
);