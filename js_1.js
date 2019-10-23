var first_val = '', operator = '', second_val='', answer, flag = 0;

var screen = document.getElementById('display');

function assign_value(val){
	if (!operator){
		if(flag){
			first_val = '';
			second_val = '';
			flag = 0;
		}
		first_val += val;
		screen.value = first_val;
	}
	else{
		second_val += val;
		screen.value = first_val + ' ' + operator + ' ' + second_val;
	}
}

function assign_operator(opt){
	if(flag){
		first_val = answer + '';
		second_val = '';
		flag = 0;
	}
	else{
		if(first_val && operator && second_val){
			calculate();
			first_val = answer;
			operator = opt;
			second_val = '';
			flag = 0;
			screen.value = first_val + ' ' + operator;
		}	
	}

	operator = opt;
	screen.value = first_val + ' ' + operator;
}

function calculate(){
	let a = parseFloat(first_val);
	let b = parseFloat(second_val);

	if (operator === '+'){
		answer = a + b;
	}
	if (operator === '-'){
		answer = a - b;
	}
	if (operator === '*'){
		answer = a * b;
	}
	if (operator === '/'){
		answer = a / b;
	}
	flag = 1;
	operator = '';
}

document.getElementById('b1').addEventListener('click', function(){
	let val = 1;
	assign_value(val);
});
document.getElementById('b2').addEventListener('click', function(){
	let val = 2;
	assign_value(val);
});
document.getElementById('b3').addEventListener('click', function(){
	let val = 3;
	assign_value(val);
});
document.getElementById('b4').addEventListener('click', function(){
	let val = 4;
	assign_value(val);
});
document.getElementById('b5').addEventListener('click', function(){
	let val = 5;
	assign_value(val);
});
document.getElementById('b6').addEventListener('click', function(){
	let val = 6;
	assign_value(val);
});
document.getElementById('b7').addEventListener('click', function(){
	let val = 7;
	assign_value(val);
});
document.getElementById('b8').addEventListener('click', function(){
	let val = 8;
	assign_value(val);
});
document.getElementById('b9').addEventListener('click', function(){
	let val = 9;
	assign_value(val);
});
document.getElementById('b0').addEventListener('click', function(){
	let val = 0;
	assign_value(val);
});
document.getElementById('bdot').addEventListener('click',function(){
	operator = '.';
});


document.getElementById('b+').addEventListener('click',function(){
	let opt = '+';
	assign_operator(opt);
});
document.getElementById('b-').addEventListener('click',function(){
	let opt = '-';
	assign_operator(opt);
});
document.getElementById('b*').addEventListener('click',function(){
	let opt = '*';
	assign_operator(opt);
});
document.getElementById('b/').addEventListener('click',function(){
	let opt = '/';
	assign_operator(opt);
});


document.getElementById('bclr').addEventListener('click',function(){
	first_val = '';
	operator = '';
	second_val = '';
	screen.value = '0';
});


document.getElementById('beql').addEventListener('click',function(){
	calculate();
	screen.value = answer;
});
