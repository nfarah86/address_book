alert("hi"); 

document.getElementById("myBtn").addEventListener("click", function (e){
    alert("hi");
});

	//document.getElementById("remove").addEventListener("click", function(e){

	function contactObject(){
		var contact = {
			index: window.localStorage.getItem("Contacts: index"), //global variable
			$table: document.getElementById("list-contacts"),
			$form: document.getElementById("main-parent-form"),
			$button_submit:document.getElementById("submit"),
			$button_remove: document.getElementById("remove")
		};

		contactStorage = function(){
			if(!(contact.index)){
			window.localStorage.setItem("Contacts:index", contact.index = 1);
			}
		}
	
		  				// FORM SETUP  //
		
		contact.$form.reset();
			document.getElementById("button_remove").addEventListener("click", function (event){
			contact.$form.reset();
			contact.$form.id_entry = 0;
			alert("bye");
		});



		document.getElementById("button-submit").addEventListener("click", function (event){
     		alert("hi");

			var entry = {
				id: parseInt(this.id_entry.value),
				first_name: this.first_name.value,
				last_name: this.last_name.value,
				email: this.email.value,
				phone_number: this.phone_number.value
			};
	
			if(entry.id == 0){
				Contact.contactAdd(entry);
				Contact.tableAdd(entry);
			}
			else{
				Contact.contactEdit(entry);
				Contact.table.edit(entry);
			}

			this.reset();
			this.id_entry.value = 0;
			event.preventDefault();


		});

	}

	
			// TABLE // 

	// if(window.localStorage.length -1){
	// 	var contacts_list = [], i, key;
	// 	for (i=0; i < window.localStorage.length; i++){
	// 		key = window.localStorage.key(i);
	// 		if(/Contacts:\d+/.test(key)){
	// 			contact_list.push(JSON.parse(window.localStorage.getItem(key)));
	// 		}
	// 	}
	
	// 	if (contacts_list.length){
	// 		contacts_list.sort(function(a,b){
	// 		return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
	// 		})
	// 		.forEach(contact.tableAdd);
	// 	}
	// }


	//another table function....


	// contact.$table.addEventListener("click", function(event){
	// 	var op = event.target.getAttribute("data-op");

	// })


	
					// START HERE!!!!!  // 


					

	// contactAdd: function(entry) {
	// 	entry.id = contact.index;
	// 	window.localStorage.setItem("Contacts: index", ++contact.index);
	// },


// 	contactEdit: function(entry) {},
// 	contactRemove: function(entry) {},

// 	tableAdd: function(entry) {},
// 	tableEdit: function(entry) {},
// 	tableRemove: function(entry) {}

// };

// Contact.init();









	// var init = function(){
		// 	if(!(Contact.index)){
		// 		window.localStorage.setItem("Contacts: index", Contacts.index = 1);
		// }
	








