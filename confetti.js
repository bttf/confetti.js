var confetti = (function(options){
	var defaults = {
		height : (window.innerHeight)?window.innerHeight:(document.documentElement.offsetHeight)?document.documentElement.offsetHeight:document.body.offsetHeight,
		width : (window.innerWidth)?window.innerWidth:(document.documentElement.offsetWidth)?document.documentElement.offsetWidth:document.body.offsetWidth,
		colors : ["#F00","#0F0","#00F"],
		maxSize : 20,
		fallSpeed : 2
	};
	if(options) {
		for(var key in options) {
			defaults[key] = options[key];
		}
	}
	
	var confetti_container = document.createElement("div");
	confetti_container.style.cssText = "height:0; width:0; overflow:visible; top:0; left:0;position:absolute;";
	
	var confetti_piece = function() {
		this.x = Math.random() * defaults.width;
		this.y = 0;
		this.xdirection = (Math.random() > .5)?1:-1;
		this.height = Math.random() * defaults.maxSize;
		this.width = Math.random() * defaults.maxSize;
		this.rotation = Math.random() * 360;
		this.color = defaults.colors[Math.round(Math.random() * (defaults.colors.length-1))];
		this.yspeed = (Math.random() + .5) * defaults.fallSpeed
		this.xspeed = (Math.random() + .1);
		this.element = document.createElement("div");
		this.render();
	}
	
	confetti_piece.prototype.render = function() {
		this.y += this.yspeed;
		this.x += this.xspeed * this.xdirection;
		if(Math.random() > .9) { this.xdirection *= -1; }
		this.element.style.cssText = "position:absolute;";
		this.element.style.cssText += "top:"+this.y+"px;"; 
		this.element.style.cssText += "left:"+this.x+"px;";
		this.element.style.cssText += "height:"+this.height+"px;";
		this.element.style.cssText += "width:"+this.width+"px;";
		this.element.style.cssText += "background-color:"+this.color+";";
		this.element.style.cssText += "-moz-transform:rotate("+this.rotation+"deg);";
		this.element.style.cssText += "-webkit-transform:rotate("+this.rotation+"deg);";
		this.element.style.cssText += "-o-transform:rotate("+this.rotation+"deg);";
		this.element.style.cssText += "filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1.5);";
	}
	
	var elements = [];
	
	var generate_piece = function() {
		var t_piece = new confetti_piece();
		elements.push(t_piece);
		confetti_container.appendChild(t_piece.element);
	}
	
	var render_pieces = function() {
		var deletion_index = [];
		for(var i=0;i<elements.length;i++) {
			elements[i].render();
			if(elements[i].y > defaults.height || elements[i].x > defaults.width) {
				deletion_index.push(i);
			}
		}
		for(var i=0;i<deletion_index.length;i++) {
			try{
				confetti_container.removeChild(elements[deletion_index[i]].element);
			} catch (e){}
			elements.slice(deletion_index[i],1);
		}
	}
	
	return {
		
		start: function(){
			document.getElementsByTagName("body")[0].appendChild(confetti_container);
			for(var i=0;i<10;i++) {
				generate_piece();
			}
			setInterval(generate_piece, 400);
			setInterval(render_pieces, 50);
		},
		
		stop: function() {
			document.getElementsByTagName("body")[0].removeChild(confetti_container);
			clearInterval(generate_piece);
			clearInterval(render_pieces);
		}
	}
	
});
