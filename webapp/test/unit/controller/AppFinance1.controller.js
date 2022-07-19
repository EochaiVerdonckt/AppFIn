/*global QUnit*/

sap.ui.define([
	"comcoopersap/project1/controller/AppFinance1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppFinance1 Controller");

	QUnit.test("I should test the AppFinance1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
