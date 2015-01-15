function init() {
    var name = "address book"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();



var Contact = {
	index: 1, //global variable

	// init:functin(){},
	contactAdd: function(entry) {},
	contactEdit: function(entry) {},
	contactRemove: function(entry) {},

	tableAdd: function(entry) {},
	tableEdit: function(entry) {},
	tableRemove: function(entry) {}

};

// Contact.init();
