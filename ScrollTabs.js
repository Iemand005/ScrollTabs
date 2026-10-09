

function Tab(content) {
	this.button = document.createElement("button");
	this.content = content || document.createElement("section");
	this.content.className = "tab-page";
}

function TabScroller(tabCount) {
	this.element = document.createElement("div");

	this.element.className = "tab-scroller"

	this.tabs = [];
}

TabScroller.prototype.addTab = function(content) {
	var tab = new Tab(content, "tab-" + this.tabs.length);
	
	this.element.appendChild(tab.content);
};