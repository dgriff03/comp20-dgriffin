function start_game(){
	initialize();
	draw_board();
	setInterval("draw_game()", 50 );
}

var move_value = 4;

function log(num,x,y)
{
this.left = function(){
	this.cut5 -= move_value*this.speed;
	this.cut5 = in_x(this.cut5);
	this.draw();
}
this.right = function(){
	this.cut5 += move_value *this.speed;
	this.cut5 = in_x(this.cut5);
	this.draw();
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
}
else if(num == 4){
	this.speed = 1;
	this.cut1=15;
	this.cut2=407;
	this.cut3=110;
	this.cut4=20;
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

function in_x(num,car){
var divider = 1000;
var off = -180;
if(car){
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
if(i == 1){
	space == 100;
}
if(i == 3 || i == 4){
	space = 200;
}
else if(i == 0){
 space = 300;
}
else if(i == 2){
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
	this.cut5 = in_x(this.cut5,true);
	this.draw();
}
this.right = function(){
	this.cut5 += move_value*this.speed;
	this.cut5 = in_x(this.cut5,true);
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

//left right left right left
}

function frog(d){	//d is the direction



}


function move(){
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

}


function draw_game(){
ctx.fillStyle = "rgb(19, 19, 70)";
			ctx.fillRect (0,0, 399, 275);//water
			ctx.drawImage(img,12,12,327,40,15,15,325,40);	//frogger
			ctx.drawImage(img,0,55,399,55,0,55,399,50);		//pads
			ctx.fillStyle = "rgb(00, 00, 00)";
			ctx.fillRect (0,309,399,255);//road 166
			move();
			ctx.drawImage(img,0,119,399,35,0,275,399,35); //side road top
			ctx.drawImage(img,0,119,399,35,0,475,399,35);//side road bottom
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

function draw_board(){
		canvas = document.getElementById('game');
		if(canvas.getContext){
			ctx = canvas.getContext('2d');
			ctx.save();
			img = new Image();
			img.src = 'assets/frogger_sprites.png';
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
	logx = 15; logy = 110;
	carx = 20; cary = 315;
	make_logs();
	make_cars();
	Level = 1;
	Score = 0;
	High_Score = 0;
}