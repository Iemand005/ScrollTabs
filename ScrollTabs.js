

function Tab(content, id) {
	
	this.content = content || document.createElement("section");
	this.content.className = "tab-page";
	this.content.id = id;
}

Tab.prototype.createButton = function(asButton) {
	var button = null;
	if (asButton) {
		button = document.createElement("button");
	} else {
		button = document.createElement("a");
		button.href = this.content.id;
	}
	button.className = "tab-button";

}

function TabScroller(hasButtons) {

	this.buttonHeader = hasButtons && document.createElement("div");

	this.element = document.createElement("div");

	this.element.className = "tab-scroller";

	this.tabs = [];
}

TabScroller.prototype.addTab = function(content) {
	var tab = new Tab(content, "tab-" + this.tabs.length);
	this.tabs.push(tab);
	
	this.element.appendChild(tab.content);

	if (this.buttonHeader) 
};