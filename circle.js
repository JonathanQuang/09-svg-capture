console.log("loaded");
svg = document.getElementById("svgElement");

var createCircle = function(e){
	console.log('create');
	theCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");

	theCircle.setAttribute("cx",e.offsetX.toString());
	theCircle.setAttribute("cy",e.offsetY.toString());
	theCircle.setAttribute("r","25");
	theCircle.addEventListener("click",colorCircle,true);
	svg.append(theCircle);
	e.stopPropagation();
}

var colorCircle = function(e){
	console.log('color change');
	this.setAttribute("fill","red");
	e.stopPropagation();
	this.addEventListener("click",removeCircle,true);
	this.removeEventListener('click',colorCircle);
}

var removeCircle = function(e){
	console.log('remove');
	svg.removeChild(this);
	e.stopPropagation();

	
	theCircle.setAttribute("cx",Math.random()*500);
	theCircle.setAttribute("cy",Math.random()*500);
	theCircle.setAttribute("r","25");
	theCircle.addEventListener("click",colorCircle,true);
	e.stopPropagation();
	svg.append(theCircle);
	
}


document.getElementById("svgElement").addEventListener("click",createCircle);
