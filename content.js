function changeFullWithCards() {
	var cards = document.getElementsByClassName("eve-card js-card js-task");
	for (let card of cards) {
		card.style.width = "100%"
	}
}

var scriptjs = document.createElement('script');
scriptjs.src = chrome.runtime.getURL('ajaxmediator.js');
scriptjs.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(scriptjs);

window.onload=changeFullWithCards;
