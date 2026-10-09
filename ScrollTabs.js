

function Tab() {
	this.button = document.createElement("button");
	this.content = document.createElement("section");
	this.content.className = "tab-page";
}

function TabScroller(tabCount) {
	this.element = document.createElement("div");

	this.element.className = "tab-scroller"

	this.tabs = [];
}

TabScroller.prototype.addTab = function() {
	var tab = new Tab();
	
	this.element.appendChild(tab.content);
};