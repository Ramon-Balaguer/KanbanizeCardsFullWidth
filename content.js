function changeFullWithCards() {
	var cards = document.getElementsByClassName("eve-card js-card js-task");
	for (let card of cards) {
		card.style.width = "100%"
	}
}
window.onload=changeFullWithCards;


var scriptjs = document.createElement('script');
scriptjs.src = chrome.runtime.getURL('ajaxmediator.js');
scriptjs.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(scriptjs);

const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
			if(added_node.classList.contains("drag-card")) {
				added_node.style.width = "300px";
				//observer.disconnect();
			}
		});
	});
});

observer.observe(document.querySelector(".kapp"), { subtree: false, childList: true });

