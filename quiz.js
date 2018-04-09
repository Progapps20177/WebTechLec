var text2display = "";
var answers = new Array(1);
answers[0] = "1. This is the right answer, idiot!";
var questions = new Array(1);
questions[0] = "q1";




function checkQs(questionNum){
	var qs = document.getElementsByName(questionNum);
	
	for(var i = 0; i < 3 ; i++){
		if(qs[i].checked){
			if(qs[i].value == "correct"){
				text2display = text2display + (i+1) + "." + "Correct!";
			}
			else{
				text2display = text2display + answers[questions.indexOf(questionNum)];
			}
			break;
		}
	}
}

function checkAllQs(){
	for(var i = 0; i < questions.length; i++){
		checkQs(questions[i]);
	}
	document.write(text2display);	
}