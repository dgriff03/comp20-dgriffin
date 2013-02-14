function start_game(){
	initialize();
	draw_board();
}

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
			ctx.drawImage(img,5,165,180,25,log1x,log1y,180,25);	//log 1
			ctx.drawImage(img,5,195,120,25,log2x,log2y,120,25); //log 2
			ctx.fillStyle = "rgb(00, 00, 00)";
			ctx.fillRect (0,309,399,255);//road 166
			ctx.drawImage(img,0,119,399,35,0,275,399,35); //side road top
			ctx.drawImage(img,0,119,399,35,0,475,399,35);//side road bottom
			ctx.drawImage(img,5,265,35,20,car1x,car1y,35,20);//car1
			ctx.drawImage(img,46,265,35,20,car2x,car2y,35,20);//car2
			ctx.drawImage(img,10,335,25,20,0,516,20,15);//life1
			ctx.drawImage(img,10,335,25,20,20,516,20,15);//life2
			ctx.drawImage(img,10,335,25,20,40,516,20,15);//life3
			ctx.fillStyle="rgb(51, 204, 0)";
			ctx.font = "24px Arial Bold";
			ctx.fillText("Level" + Level, 60, 530);
			ctx.font = "12px Arial Bold";
			ctx.fillText("Score:" + Score, 0, 560);
			ctx.fillText("High Score" + High_Score, 50, 560);
		}
		else{
			alert('Sorry, canvas not supported by your browser');
		}
}

function initialize(){
	speed_car1 = speed_car2 = speed_log = 1;
	cur_time = new Date();
	log1x = 20; log1y = 185;
	log2x = 90; log2y = 240;
	car1x = 20; car1y = 400;
	car2x = 70; car2y = 350;
	Level = 1;
	Score = 0;
	High_Score = 0;
}