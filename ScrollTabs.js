

function Tab() {
	this.button = document.createElement("button");
	this.content = document.createElement("section");
}

function TabScroller(tabCount) {
	this.element = document.createElement("div");

	this.tabs = [];
}

TabScroller.prototype.addTab = function() {
	var tab = new Tab();
	
	this.element.appendChild(tab.content);
};