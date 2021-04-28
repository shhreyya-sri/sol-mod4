var names=["shhreyya","john", "yaakov","riya","joey","samuel","ruby","Jenny"];

for (var i=0; i<names.length; i++) {
	var letter = names[i].charAt(0);
	if (letter=='j' || letter =='J') {
		console.log("Goodbye "+ names[i]);
	} 
	else {
		console.log("Hello "+ names[i]);
	}
}