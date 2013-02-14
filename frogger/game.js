// Your work goes here...
//blue = #191970
//black = #000000
//header "Frogger"
//purple roadside
//lives
// level number
//score
//high score
//fron facing up
//two vehicles
//log in water


function start_game(){
	initialize();
	draw_board();
}s

function draw_board(){
		canvas = document.getElementById('game');
		if(canvas.getContext){
			ctx = canvas.getContext('2d');
			ctx.save();
			img = new Image();
			img.src = 'assets/frogger_sprites.png';
			ctx.fillStyle = "rgb(19, 19, 70)";
			ctx.fillRect (0,0, 399, 275);//water
			ctx.drawImage(img,10,10,325,40,15,15,325,40);	//frogger
			ctx.drawImage(img,0,55,399,55,0,55,399,55);		//pads
			ctx.drawImage(img,5,165,180,25,20,185,180,25);	//log 1
			ctx.drawImage(img,5,195,120,25,90,240,120,25); //log 2
			ctx.fillStyle = "rgb(00, 00, 00)";
			ctx.fillRect (0,309,399,255);//road 166
			ctx.drawImage(img,0,119,399,35,0,275,399,35); //side road top
			ctx.drawImage(img,0,119,399,35,0,475,399,35);//side road bottom
			ctx.drawImage(img,5,265,35,20,20,400,35,20);//car1
			ctx.drawImage(img,46,265,35,20,70,350,35,20);//car2
	
		}
		else{
			alert('Sorry, canvas not supported by your browser');
		}
}

function initialize(){
	speed_car1 = speed_car2 = speed_log = 1;
	cur_time = new Date();
}