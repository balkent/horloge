var Clock = function () {
	this.date;
	this.heure;
	this.minutes;
	this.second;
	this.reste;

	/**
	 * Run all functions
	 */
	this.run = function () {
		this.init();
		this.resetClock();
		this.setClockElement("heure");
		this.displayHour();
		this.displayTenMinuteDigit();
		this.displayUniteMinuteDigit();
		this.displaySecond();
	}

	/**
	 * Initiate all variables
	 */
	this.init = function () {
		var date = new Date();

		this.date    = date;
		this.heure   = date.getHours();
		this.minutes = date.getMinutes();
		this.second  = date.getSeconds();
		this.reste   = 0;
	}

	/**
	 * Set element opcity
	 * @param {string} id html id of the element
	 * @param {int} opacity value of opacity
	 */
	this.setOpacity = function (id, opacity) {
		var element = document.getElementById(id);
		element.style.opacity = opacity / 100;
		element.style.filter = 'alpha(opacity=' + opacity + ')';
	}

	/**
	 * Loop for Set element opcity
	 * @param {int} length lenght of the loop
	 * @param {string} id html id of the element
	 * @param {int} opacity value of opacity
	 */
	this.setOpacityLoop = function (length, id, opacity) {
		for (var i = 1; i <= length; i++)
			this.setOpacity(id + i, opacity);
	}

	/**
	 * Set empty clock
	 */
	this.resetClock = function () {
		this.setOpacityLoop(12, "heure_", 20);
		this.setOpacityLoop(11, "minutes_", 20);
		this.setOpacityLoop(4, "minute_", 20);
		this.setOpacityLoop(60, "seconde_", 20);
	}

	/**
	 * Display the clock
	 * @param {string} id html id of the element
	 */
	this.setClockElement = function (id) {
		document
			.getElementById(id)
			.innerHTML = 'Heure : ' + this.heure + ' : ' + this.minutes + ' : ' + this.second;
	}

	/**
	 * Display hours
	 */
	this.displayHour = function () {
		if (this.heure > 12)
			this.heure = this.heure - 12;

		if (this.heure == 0)
			this.heure = 12;

		this.setOpacityLoop(this.heure, "heure_", 100);
	}

	/**
	* Display ten-minutes digit
	*/
	this.displayTenMinuteDigit = function () {
		var arrondi = Math.floor(this.minutes / 5);

		if (arrondi > 0) {
			this.setOpacity("minutes_" + arrondi, 100);
			this.reste = this.minutes - arrondi * 5;

			return true;
		}
		this.reste = this.minutes;

		return true;
	}

	/**
	* Display unit minute digit
	*/
	this.displayUniteMinuteDigit = function () {
		if (this.reste > 0) {
			this.setOpacityLoop(this.reste, "minute_", 100);
		}
	}

	/**
	* Display seconds
	*/
	this.displaySecond = function () {
		this.setOpacityLoop(this.second, "seconde_", 100);
	}
}
