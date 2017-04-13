function selAll(a) {
	return document.querySelectorAll(a);
}

function sel(a) {
	return document.querySelector(a);
}

var game = (function() {

	var turn = 0;
	var cross = 0;
	var circle = 0;
	var markEmpty = [];

	function addNewPlayer() {
		var player1 = prompt('Enter name for player 1', '');
		var player2 = prompt('Enter name for player 2', '');
		if (player1 == null) {
			sel('.player1').innerHTML = `Your turn Player1`;
		} else {
			sel('.player1').innerHTML = `Your turn ${player1}`;
		};
		if (player2 == null) {
			sel('.player2').innerHTML = `Your turn Player2`;
		} else {
			sel('.player2').innerHTML = `Your turn ${player2}`;
		};
		sel('.player2').style.display = 'none';
	};

	function letsStart() {
		for (var i = 0; i < selAll('td').length; i++) {

			(function(i) {

				function play() {
					if (turn % 2 == 0) {
						this.innerHTML = figure.createCross();
						markEmpty[i] = 'cross';
						sel('.player1').style.display = 'none';
						sel('.player2').style.display = 'block';
						turn += 1;
					} else {
						this.innerHTML = figure.createCircle();
						markEmpty[i] = 'circle';
						sel('.player1').style.display = 'block';
						sel('.player2').style.display = 'none';
						turn += 1;
					};

					for (var r = 0; r <= 6; r += 3) {
						if (markEmpty[r] != undefined && markEmpty[r] == markEmpty[r + 1] && markEmpty[r + 1] == markEmpty[r + 2]) {
							alert(`Win ${markEmpty[r]}`);
							location.reload();
						}; 
					};

					for (var r = 0; r <= 2; r++) {
						if (markEmpty[r] != undefined && markEmpty[r] == markEmpty[r + 3] && markEmpty[r + 3] == markEmpty[r + 6]) {
							alert(`Win ${markEmpty[r]}`);
							location.reload();
						}; 
					};

					for(var r = 0, j = 4; r <= 2 ; r = r + 2, j = j - 2) {
						if (markEmpty[r] != undefined && markEmpty[r] == markEmpty[r + j] && markEmpty[r + j] == markEmpty[r + 2*j]) {
							alert(`Win ${markEmpty[r]}`);
							location.reload();
						}; 
					};
					this.removeEventListener('click', play) // remove clickable
				}

				return selAll('td')[i].addEventListener('click', play); // click

			})(i); // anonim
		}; // for loop
	}; // start

	return {
		addNewPlayer: addNewPlayer,
		letsStart: letsStart
	}
	

})();