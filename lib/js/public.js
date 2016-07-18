function $(selector) {	
	return (document.querySelectorAll(selector).length == 1)?document.querySelectorAll(selector)[0]:document.querySelectorAll(selector);
	 // body...  
}