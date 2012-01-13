This is a javascript library to place falling multi-colored confetti onto your webpage.

Demo
--
http://nickgartmann.github.com/confetti.js/demo.html

Usage
--
```javascript
<script src="confetti.js" type="text/javascript"></script>
<script type="text/javascript">
	window.addEventListener("load", function(){
		confetti({
			//optional configuration
		}).start();
	});
</script>
```

Settings
--
The following settings can be passed into the confetti function to change behavior

	height:		number	// height of the area you want your confetti in
	width:		number	// widht of the area you want your confetti in
	colors:		array	// array of valid CSS colors for the confetti pieces to be [chosen at random from the list].
	maxSize:	number	// maximum height and width of the confetti
	fallSpeed:	number	// average number of pixels to fall per 50 milliseconds

Additional Functions
--
	var cf = confetti({
		//optional configuration
	});
	cf.start()	// Begins generation of confetti pieces
	cf.stop()	// Stops generation of confetti pieces and removes current pieces from the DOM

TODO
--
* Optional css class configuration
* Optional gradients
* Test performance boost of recycling elements