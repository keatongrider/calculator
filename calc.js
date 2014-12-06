var first = 0;
var second = 0;
var opp=0;

function display(val) {
	if (scr) {
		scr.value += val;
	} else {
		alert('Failed to find the screen');
	}	

}

function clearit() {
	if (scr) {
		scr.value = "";
	} else {
		alert('Failed to find the screen to clear');
	}
}

function multiply() {
	first = scr.value;
	clearit();
	opp=2;
}

	
function divide() {
	first = scr.value;
	clearit();
	opp=3;
}

function add() {
	first = scr.value;
	clearit();
	opp=0;
}

function subtract() {
	first = scr.value;
	clearit();
	opp=1;
}

function equals() {
	second = scr.value;
	clearit();
	if (opp == 0) {
		scr.value = parseInt(first) + parseInt(second);
	} else if (opp == 2) {
		scr.value = parseInt(first) * parseInt(second);	
	} else if (opp == 3) {
		scr.value = parseInt(first) / parseInt(second);	
	} else if (opp == 1) {
		scr.value = parseInt(first) - parseInt(second);
	}
}
