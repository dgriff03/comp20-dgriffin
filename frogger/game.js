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

var cord-x,cord-y,lives,game_over,level;
var speed_car1,speed_car2,speed_log;
var x_log1,y_log1; 
var x_car1,y_car1;
var x_car2,y_car2;
var time_allowed,time,cur_time;

function start_game(){
	initialize();
	draw_board();
}

function draw_board(){
	cur_time = new Date(milliseconds);
	

}

function initialize(){
	speed_car1 = speed_car2 = speed_log = 1;
	
}