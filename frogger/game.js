var img = new Image();
var dead = new Image();
var frog1;
var frog_dead;
var time_dead;
var game_over;
var move_value;
var frogs_home;
var start_time;
var time;

function start_game(restart){
	img.src = 'assets/frogger_sprites.png';
	img.onload = function(){
	dead.src = 'assets/dead_frog.png';
	dead.onload = function(){
		frog1 = new frog(185,485);
		initialize();
		draw_board();
		start();
	}
	}
}	

function start(){
	setInterval("draw_game()", 50 );
}



//returns nothing if dead, returns 2 if on log
//returns 1 to quit
function collision(){
if(!frog_dead){
var x = frog1.cut5;
var y = frog1.cut6;
if(x < 0 || x > 400 || y >=500 || y < 55){
	death();
	return 1;
}
for(i in car_array){
	for(j in car_array[i]){
			if( x >= car_array[i][j].cut5 && x <= (car_array[i][j].cut5 + car_array[i][j].cut3)
			&& y >= car_array[i][j].cut6 && y <= (car_array[i][j].cut6 + car_array[i][j].cut4)){
				 death();
				 return 1;
				}
	}
}
for(i in log_array){
	for(j in log_array[i]){
			if( x >= log_array[i][j].cut5 && x <= (log_array[i][j].cut5 + log_array[i][j].cut3)
			&& y >= log_array[i][j].cut6 && y <= (log_array[i][j].cut6 + log_array[i][j].cut4)){
				 return 2;
				}
	}	
}
if( y >= 105 && y <= 275){
	death();
	return 1;
}
if(y <= 105 && (between(x,10,35) || between(x,95,120) || 
	between(x,175,205) || between(x,255,290) || between(x,340,365))){
		death();
		return 1;
	}
else if(y <= 105){	//if in pad section and not on water home!
	across();
	frog1 = new frog(185,485);
	start_time = new Date().getTime();
	frog_dead = false;
	draw_game();
}
return 0;
}
}

function across(){	//made it home, update score
	current_time = new Date().getTime();
	time = (120000 - (current_time - start_time))/1000;
	Score += 50;
	frogs_home++;
	if(frogs_home == 5){
		Score += 1000;
		level++;
		frogs_home -= 5;
	}
	Score += Math.round(time) * 10;
}

function between(a,b,c){
if(a <= c && a >= b){
	return true
}
return false
}

function death(){
	time_dead = new Date().getTime();
	lives--;
	frog_dead = true;

}

function log(num,x,y)
{
this.left = function(){
	this.cut5 -= move_value*this.speed;
	this.cut5 = in_x(this.cut5,this.type);
	this.draw();
	this.movement = -1 * move_value*this.speed;
}
this.right = function(){
	this.cut5 += move_value *this.speed;
	this.cut5 = in_x(this.cut5,this.type);
	this.draw();
	this.movement = move_value*this.speed;
}
if(num == 2){
	this.speed = 1.5;
	this.cut1=5;
	this.cut2=166;
	this.cut3=180;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
else if(num == 0){
	this.speed = 1.25;
	this.cut1=5;
	this.cut2=198;
	this.cut3=120;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
else if(num == 3){
	this.speed = 1;
	this.cut1=5;
	this.cut2=230;
	this.cut3=85;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
else if(num == 1){
	this.speed = 1;
	this.cut1=15;
	this.cut2=407;
	this.cut3=70;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
	this.type = "tur";
}
else if(num == 4){
	this.speed = 1;
	this.cut1=15;
	this.cut2=407;
	this.cut3=110;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
	this.type = "tur";
}

	this.cut5 = x;
	this.cut6 = y;
	this.draw = function(){
		ctx.drawImage(img,this.cut1,this.cut2,this.cut3,this.cut4,
		this.cut5,this.cut6,this.cut7,this.cut8);
	}
}

function in_x(num,type){
var divider = 800;
var off = -180;
if(type == "tur"){
	off = -100;
	divider = 500;
}
if(type == "car"){
	off = -35;
	divider = 600;	
}

if(num < off){
	num = divider;
}
else{
	if(num > divider){
		num = off;
	}
}
return num;
}

function make_logs(){
var space;
for(var i = 0; i < 5; i++){
if(i == 1 || i == 4){
	space == 100;
}
if(i == 3){
	space = 200;
}
if(i == 0){
 space = 300;
}
if(i == 2){
 space = 270;
}
	log1 = new log(i,in_x(logx + i * space),logy + 33 * i);
	if( i != 2){
		log2 = new log(i,in_x(logx + (i+1) * space),logy + 33 * i);
	}
	log3 = new log(i,in_x(logx + (i+2) * space),logy + 33 * i);
	var row = [log1,log2,log3];
	log_array[i] = row;
}
//left right left right left
}


function car(car_num,x,y)
{

this.left = function(){
	this.cut5 -= move_value*this.speed;
	this.cut5 = in_x(this.cut5,"car");
	this.draw();
}
this.right = function(){
	this.cut5 += move_value*this.speed;
	this.cut5 = in_x(this.cut5,"car");
	this.draw();
}
if(car_num == 2){
	this.speed = 1.1;
	this.cut1=5;
	this.cut2=265;
	this.cut3=35;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
if(car_num == 1){
	this.speed = 1.4;
	this.cut1=46;
	this.cut2=265;
	this.cut3=35;
	this.cut4=25;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
if(car_num == 0){
	this.speed = 1;
	this.cut1=105
	this.cut2=300
	this.cut3=45;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
if(car_num == 3){
	this.speed = 1.3;
	this.cut1=9
	this.cut2=300
	this.cut3=30;
	this.cut4=22;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
if(car_num == 4){
	this.speed = 1;
	this.cut1=81;
	this.cut2=265;
	this.cut3=25;
	this.cut4=25;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
	this.cut5 = x;
	this.cut6 = y;
	this.draw = function(){
		ctx.drawImage(img,this.cut1,this.cut2,this.cut3,this.cut4,
		this.cut5,this.cut6,this.cut7,this.cut8);
	}	
}

function make_cars(){
var space;
for(var i = 0; i < 5; i++){
	if( i %2 == 0){
		space = 75;
	}
	else{
		space = 150;
	}
	if( i != 0){
		car1 = new car(i,carx + i * space,cary + 33 * i);
		car2 = new car(i,carx + (i+2) * space,cary + 33 * i);
		car3 = new car(i,carx + (i+3) * space,cary + 33 * i);
	}
	else{
		car1 = new car(0,in_x(carx),cary + 33 * i);
		car2 = new car(0,in_x(carx +120),cary + 33 * i);
		car3 = new car(0,in_x(carx + 2 * 120),cary + 33 * i);
	}
	var	row = [car1,car2,car3];
	car_array[i] = row;
}

}


function frog(x,y){
this.dead = function(){
	ctx.drawImage(dead,this.cut5,this.cut6,20,25);
}

this.forward = function(){
	this.cut6 -= 34;
	this.f;
}
this.back = function(){
	this.cut6 += 34;
	this.b;
}
this.right = function(){
	this.cut5 += 28;
	this.b;
}
this.left = function(){
	this.cut5 -= 28;
	this.b;
}

this.f = function(){
	this.cut1=10;
	this.cut2=367;
	this.cut3=25;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
this.b = function(){
	this.cut1=80;
	this.cut2=367;
	this.cut3=25;
	this.cut4=20;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
this.r = function(){
	this.cut1=10;
	this.cut2=334;
	this.cut3=20;
	this.cut4=25;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
this.l = function(){
	this.cut1=80;
	this.cut2=334;
	this.cut3=20;
	this.cut4=25;
	this.cut7=this.cut3;
	this.cut8=this.cut4;
}
	this.cut5=x
	this.cut6=y;
	this.f();
this.draw = function(){
	if(!frog_dead){
		ctx.drawImage(img,this.cut1,this.cut2,this.cut3,this.cut4,
		this.cut5,this.cut6,this.cut7,this.cut8);
	}
	else{
		this.dead();
	}
}

}

function in_row(){
var y = frog1.cut6;
for(var i = 0; i < 560; i += 34){
	if(y < i){
		return i/34;
	}
}

}

function move(){
	var on_log;
	for(i in car_array){
		if(i%2 == 0){
			car_array[i][0].left();
			car_array[i][1].left();
			car_array[i][2].left();
		}
		else{
			car_array[i][0].right();
			car_array[i][1].right();
			car_array[i][2].right();
		}
		if(i == 0 || i == 2 || i ==3){
			log_array[i][0].right();
			log_array[i][1].right();
			log_array[i][2].right();
		}
		else{
			log_array[i][0].left();
			log_array[i][1].left();
			log_array[i][2].left();
		}
	}
	var on_log = collision();
	in_row();
	if(!frog_dead && on_log){
		var rw = in_row();
		rw -= 4;
		frog1.cut5 += log_array[rw][0].movement;
	}
}


function draw_game(){
if(!game_over){
	move_value = 4 * level;
	ctx.fillStyle = "rgb(19, 19, 70)";
	ctx.fillRect (0,0, 399, 275);//water
	ctx.drawImage(img,12,12,327,40,15,15,325,40);	//frogger
	ctx.drawImage(img,0,55,399,55,0,55,399,50);		//pads
	ctx.fillStyle = "rgb(00, 00, 00)";
	ctx.fillRect (0,309,399,255);//road 166
	ctx.drawImage(img,0,119,399,35,0,275,399,35); //side road top
	ctx.drawImage(img,0,119,399,35,0,475,399,35);//side road bottom
	if(lives >= 1){ctx.drawImage(img,10,335,25,20,0,516,20,15);}//life1
	if(lives >= 2){ctx.drawImage(img,10,335,25,20,20,516,20,15);}//life2
	if(lives >= 3){ctx.drawImage(img,10,335,25,20,40,516,20,15);}//life3
	if(lives >= 4){ctx.drawImage(img,10,335,25,20,60,516,20,15);}//life4
	if(lives >= 5){ctx.drawImage(img,10,335,25,20,80,516,20,15);}//life5
	ctx.fillStyle="rgb(51, 204, 0)";
	ctx.font = "24px Arial Bold";
	ctx.fillText("Level" + level, 100, 530);
	ctx.font = "12px Arial Bold";
	ctx.fillText("Score:" + Score, 0, 560);
	ctx.fillText("High Score" + High_Score, 80, 560);
	current_time = new Date().getTime();
	time = (120000 - (current_time - start_time))/1000;
	if(time <= 0){ death();}
	ctx.fillText("time: " + time,300, 560);
	move();
	frog1.draw();
	if (frog_dead && (new Date().getTime() - time_dead) > 2000){
     	start_time = new Date().getTime();
		frog1 = new frog(185,485);
		frog_dead = false;    
		if(lives == 0){
			end_game();
		}
	}
	if(lives == 0){
		end_game();
	}
}
}

function end_game(){
		ctx.fillText("Game Over", 150, 200);
		ctx.fillText("Hit Space to play again:", 150, 220);
		game_over = true;
		clearInterval(refreshId);
}

 document.addEventListener("keydown", function(event) {
if(!frog_dead && !game_over){
	if (event.keyCode == 38) {
		frog1.f();
		frog1.forward();
		Score += 10;
    }
	if (event.keyCode == 40) {
		frog1.b();
      frog1.back();
    }
	if (event.keyCode == 37) {
		frog1.l();
      frog1.left();
    }
	if (event.keyCode == 39) {
		frog1.r();
      frog1.right();
    }
}
if(game_over){
	if (event.keyCode == 32) {
		lives = 5;
		Score = 0;
		level = 1;
		game_over = false;
		draw_board();
    }
}
 });

function draw_board(){
		start_time = new Date().getTime();
		canvas = document.getElementById('game');
		if(canvas.getContext){
			ctx = canvas.getContext('2d');
			ctx.save();
			draw_game();
		}
		else{
			alert('Sorry, canvas not supported by your browser');
		}
}

function initialize(){
	log_array = new Array();
	car_array = new Array();
	cur_time = new Date();
	frog_dead = false;
	game_over = false;
	logx = 15; logy = 110;
	carx = 20; cary = 315;
	make_logs();
	make_cars();
	frogs_home = 0;
	lives = 5;
	level = 1;
	Score = 0;
	High_Score = 0;
}