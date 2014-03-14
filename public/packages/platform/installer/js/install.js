(function() {

	var DEBUG = true;
	var DOGTAG = 'Installer';

	var Install = {};

	Install.Platform = {

		init: function() {

			// Scope Helper
			this._bind = function(fn, me) {
				return function() {
					return fn.apply(me, arguments);
				};
			};

			// Safety for Transitions
			$(document.body).removeClass('preload');

			// Add Event Listeners
			this.addListeners();

		},

		addListeners: function() {

			$('.installer').on('submit', this.handleLoader);

			$('#choose-database-driver').on('change', this.handleStorage);
			$('#choose-database-driver').trigger('change');

		},

		handleLoader: function(event) {

			$(".loader").show();

			return true;
		},

		handleStorage: function(event) {

			var $chooser = $(this),

		    $target = $('#database-driver-' + $chooser.val());

			$('.database-driver').not($target).addClass('hide');

			$target.removeClass('hide');

		},


	};


	$(function() {
		return Install.Platform.init();
	});

}).call(this);
