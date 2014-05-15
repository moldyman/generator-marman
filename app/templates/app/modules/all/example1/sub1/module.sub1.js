/*
 *  Example : Sub1 sub-module
 *
 *  This module shows the most basic configuration: A module with no sub-modules.
 *  When you've reached the end of the road, you don't need a Router, and you don't need
 *  a Controller that extends from shared.controller. You just need the Module, a Marionette.Controller,
 *  and the views and templates for the module.
 *
 */

define(function(require){
	'use strict';

	var Controller = require('./controller.sub1');

	App.module( 'Example1.Sub1', function( Sub1 ){
		// Instantiate Module components
        Sub1.Controller = new Controller();

    	console.log('[MODULE] Example1::Sub1 started');
	});

	return App.Example1.Sub1;
});