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

	this.setOpacityLoop = function (length, element, opacity) {
		for (var i = 1; i <= length; i++)
			this.setOpacity(element + i, opacity);
	}

	this.resetClock = function () {
		this.setOpacityLoop(12, "heure_", 20);
		this.setOpacityLoop(11, "minutes_", 20);
		this.setOpacityLoop(4, "minute_", 20);
		this.setOpacityLoop(60, "seconde_", 20);
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

	this.displaySeconde = function () {
		this.setOpacityLoop(this.seconde, "seconde_", 100);
	}

	this.setRest = function () {
		if (this.reste > 0) {
			this.setOpacityLoop(this.reste, "minute_", 100);
		}
	}
}
