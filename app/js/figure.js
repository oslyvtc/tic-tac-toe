var figure = (function() {

	function createCross() {
		var cross = '<div class="cross-wrapper"><div class="cross"></div></div>'
		return cross;
	};

	function createCircle() {
		var circle = '<div class="circle-wrapper"><div class="circle"></div></div>'
		return circle;
	};

	return {
		createCross: createCross,
		createCircle: createCircle
	}

})();