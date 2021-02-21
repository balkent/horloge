var Clock = function () {
	this.date;
	this.heure;
	this.minutes;
	this.seconde;
	this.reste;
	this.arrondi;

	this.run = function () {
		this.init();
		this.resetClock();
		this.setClockElement("heure");
		this.displayHour();
		this.displayMinute();
		this.setRest();
		this.displaySeconde();
	}

	this.init = function () {
		var date = new Date();
		this.date = date;
		this.heure = date.getHours();
		this.minutes = date.getMinutes();
		this.seconde = date.getSeconds();
		this.reste = 0;
		this.arrondi = Math.floor(this.minutes / 5);
	}

	this.setOpacity = function (id, value) {
		var element = document.getElementById(id);
		element.style.opacity = value / 100;
		element.style.filter = 'alpha(opacity=' + value + ')';
	}

	this.resetClock = function () {
		for (var i = 1; i <= 12; i++)
			this.setOpacity("heure_" + i, 20);
		for (var i = 1; i <= 11; i++)
			this.setOpacity("minutes_" + i, 20);
		for (var i = 1; i <= 4; i++)
			this.setOpacity("minute_" + i, 20);
		for (var i = 1; i <= 60; i++)
			this.setOpacity("seconde_" + i, 20);
	}

	this.setClockElement = function ($idElem) {
		document
			.getElementById($idElem)
			.innerHTML = 'Heure : ' + this.heure + ' : ' + this.minutes + ' : ' + this.seconde;
	}

	this.displayHour = function () {
		if (this.heure > 12)
			this.heure = this.heure - 12;

		if (this.heure == 0)
			this.heure = 12;

		this.setOpacity("heure_" + this.heure, 100);
	}

	this.displayMinute = function () {
		if (this.arrondi > 0) {
			this.setOpacity("minutes_" + this.arrondi, 100);
			this.reste = this.minutes - this.arrondi * 5;

			return true;
		}
		this.reste = this.minutes;

		return true;
	}

	this.setRest = function () {
		if (this.reste > 0) {
			for (var i = 1; i <= this.reste; i++) {
				this.setOpacity("minute_" + i, 100);
			}
		}
	}

	this.displaySeconde = function () {
		for (var i = 1; i <= this.seconde; i++) {
			this.setOpacity("seconde_" + i, 100);
		}
	}
}
