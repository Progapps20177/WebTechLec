var textdisplay = "";

var answers = new Array(25);

answers[0] = "1. The correct answer is : Cascading Style Sheets\n";
answers[1] = "2. The correct answer is : opacity\n";
answers[2] = "3. The correct answer is : Author, User, User agent\n";
answers[3] = "4. The correct answer is : framework";
answers[4] = "5. The correct answer is : inherit, initial, unset";
answers[5] = "6. The correct answer is : selector, declaration block";
answers[6] = "7. The correct answer is : at-rule";
answers[7] = "8. The correct answer is : CSS selectors";
answers[8] = "9. The correct answer is : preprocessor";
answers[9] = "10. The correct answer is : length";
answers[10] = "11. The correct answer is : reject";
answers[11] = "12. The correct answer is : resolve";
answers[12] = "13. The correct answer is : const";
answers[13] = "14. The correct answer is : let";
answers[14] = "15. The correct answer is : var";
answers[15] = "16. The correct answer is : callback";
answers[16] = "17. The correct answer is : &lt;script&gt &lt;/script&gt";
answers[17] = "18. The correct answer is : function";
answers[18] = "19. The correct answer is : single, double, template";
answers[19] = "20. The correct answer is : MouseEvent";
answers[20] = "21. The correct answer is : Boolean, Null, Undefined, Number, String";
answers[21] = "22. The correct answer is : while(condition) or do{}while(condition);";
answers[22] = "23. The correct answer is : async\n";
answers[23] = "24. The correct answer is : script src = filename.js\n";
answers[24] = "25. The correct answer is : Asynchronous\n";


var questions = new Array(25);
questions[0] = "q1";
questions[1] = "q2";
questions[2] = "q3";
questions[3] = "q4";
questions[4] = "q5";
questions[5] = "q6";
questions[6] = "q7";
questions[7] = "q8";
questions[8] = "q9";
questions[9] = "q10";
questions[10] = "q11";
questions[11] = "q12";
questions[12] = "q13";
questions[13] = "q14";
questions[14] = "q15";
questions[15] = "q16";
questions[16] = "q17";
questions[17] = "q18";
questions[18] = "q19";
questions[19] = "q20";
questions[20] = "q21";
questions[21] = "q22";
questions[22] = "q23";
questions[23] = "q24";
questions[24] = "q25";




var score = 0;
var count = 1;


function checkQs(questionNum){
	var qs = document.getElementsByName(questionNum);
	
	for(var i = 0; i < 3 ; i++){
		if(qs[i].checked){
			if(qs[i].value == "correct"){
				textdisplay = textdisplay + count + "." + "Correct!\n";
				score++;
			}
			else{
				textdisplay = textdisplay + answers[questions.indexOf(questionNum)];
			}
			break;
		}
	}
	count++;	
}

function checkAllQs(){
	for(var k = 0; k < questions.length; k++){
		checkQs(questions[k]);
	}
	document.getElementById("showAnswer").innerHTML = textdisplay + "<br />";
	document.getElementById("showScore").innerHTML = "Your score is: " + score + "/" + questions.length;
	
}