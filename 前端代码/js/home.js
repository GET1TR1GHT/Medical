window. onload= function(){
	var ool= document. getElementById('top');
	var oLe= document. getElementById('le');
	var obtn= ool. getElementsByTagName('input');
	var oool= oLe. getElementsByTagName('div');

	for (var i = 0; i < obtn. length; i++) {
		obtn[i]. index= i;
		obtn[i]. onclick =function(){
			for (var i = 0; i < obtn.length; i++) {
				obtn[i]. className='he';
				oool[i]. style. display= "none";
			}
			this. className='active';
			oool[this. index]. style. display="block";
		}
	}
}