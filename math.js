var mathArray = ['+','-','*'];
function doMath() 
{
	var wrongCount = 0;
	var correctCount = 0;
	var grade = 0;
	var num1 = Math.round(Math.random()*100);
	var num2 = Math.round(Math.random()*100);
	var operator = Math.round(Math.random()*2);
	var correctAnswer;

	document.getElementById('question').innerHTML = num1 + ' ' + mathArray[operator] + ' ' + num2;
	document.getElementById('answer').onkeyup = function() {
		if (!isNaN(parseFloat(document.getElementById('answer').value)) && isFinite(document.getElementById('answer').value)) {
			document.getElementById('error').innerHTML = "";
			document.getElementById('bttn').disabled = false;
		}
		else {
			document.getElementById('error').innerHTML = "Use only numbers";
			document.getElementById('bttn').disabled = true;
		}
	}

	document.forms["check"].onsubmit = function()
	{
		switch(mathArray[operator])
		{
			case '+':
				correctAnswer = num1 + num2;
				break;
			case '-':
				correctAnswer = num1 - num2;
				break;
			case '*':
				correctAnswer = num1 * num2;
				break;
			default:
				correctAnswer = num1 / num2;
		}
		var answer = document.getElementById('answer').value;
		if (correctAnswer != answer) 
		{
			document.getElementById('yes').innerHTML = "Wrong!";
			wrongCount += 1;
		}
		else
		{
			document.getElementById('yes').innerHTML = "Correct!";
			correctCount += 1;
			}
		num1 = Math.round(Math.random()*100);
		num2 = Math.round(Math.random()*100);
		operator = Math.round(Math.random()*2);
		grade = ((correctCount / (correctCount+wrongCount))*100).toFixed(0);

		document.getElementById('question').innerHTML = num1 + ' ' + mathArray[operator] + ' ' + num2;
		document.getElementById('answer').value = '';
		document.getElementById('grade').innerHTML = "Correct: " + correctCount + " <br>Incorrect: " + wrongCount;
		document.getElementById('correct').innerHTML = correctCount + '/' + (correctCount+wrongCount) + '<br>' + grade + "% correct";
		return false;
	};
	document.getElementById('reset').onclick = function() 
	{
		location.reload();
	};
};

doMath();