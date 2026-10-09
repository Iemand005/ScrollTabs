

function Tab(content, id) {
	
	this.content = content || document.createElement("section");
	this.content.className = "tab-page";
	this.content.id = id;
}

Tab.prototype.createButton = function() {
	var button = document.createElement("button");
	button.className = "tab-button";
	
}

function TabScroller(tabCount) {
	this.element = document.createElement("div");

	this.element.className = "tab-scroller";

	this.tabs = [];
}

TabScroller.prototype.addTab = function(content) {
	var tab = new Tab(content, "tab-" + this.tabs.length);
	this.tabs.push(tab);
	
	this.element.appendChild(tab.content);
};