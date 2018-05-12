'use strict';

$(document).ready(function () {
	//loadq1()
});
var prog = document.querySelector('.w3-green');
function radiochange() {
	var $radioButtons = $('input[type="radio"]');
	$radioButtons.click(function () {
		$radioButtons.each(function () {
			$(this).parent().toggleClass('checked', this.checked);
		});
	});
}

function loadq2() {
	$("#Q1").load("./htm/Q2.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q2-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq2').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'first') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}
function loadq3() {
	$("#Q1").load("./htm/Q3.html", function () {
		var input = document.querySelector('textarea');
		input.addEventListener('input', function (e) {
			document.getElementById("answerbox").innerHTML = e.target.value;
			if (document.getElementById("answerbox").textContent.length > 28) {
				$("#answerbox").addClass("flex3");
				$("#answerbox").removeClass("flex4");
			} else {
				$("#answerbox").removeClass("flex3");
				$("#answerbox").addClass("flex4");
			}
		});
	});
	$("#footer").load("./htm/Q3-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq3').click(function () {
			var str = document.getElementById("answerbox").innerHTML.toLowerCase();
			str = str.replace(/\s/g, "");
			if (str == '<p>polarbearsliveinthenorthpole</p>') {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq4() {
	$("#Q1").load("./htm/Q4.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q4-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq4').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'first') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}
function loadq5() {
	$("#Q1").load("./htm/Q5.html", function () {
		var dottedbox = document.querySelector('.dotted-box');
		[].slice.call(document.querySelectorAll('.shadowbutton')).forEach(function (button) {
			button.addEventListener("click", onButtonClick);
		});
	});
	$("#footer").load("./htm/Q5-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq5').click(function () {
			var str = document.getElementById("answerbox").innerText;
			var str2 = document.getElementById("checkquestion4-1").innerText;
			var str3 = document.getElementById("checkquestion4-2").innerText;

			// str = str.replace(/ /g , "");
			// str2 = str2.replace(/ /g , "");
			// str3 = str3.replace(/ /g , "");
			if (str == str2 || str == str3) {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq6() {
	$("#Q1").load("./htm/Q6.html", function () {
		var dottedbox = document.querySelector('.dotted-box');
		[].slice.call(document.querySelectorAll('.shadowbutton')).forEach(function (button) {
			button.addEventListener("click", onButtonClick);
		});
	});
	$("#footer").load("./htm/Q6-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq6').click(function () {
			var text1 = document.getElementById("answerbox").innerHTML.trim().toLowerCase();
			console.log(text1);
			var text2 = '<h1>animals that live in cold places</h1>';
			if (text1 == text2) {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadlist() {
	$("#Q1").load("./htm/Q6.html", function () {
		var dottedbox = document.querySelector('.dotted-box');
		[].slice.call(document.querySelectorAll('.shadowbutton')).forEach(function (button) {
			button.addEventListener("click", onButtonClick);
		});
	});
	$("#footer").load("./htm/Q6-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkqlist').click(function () {
			var str = document.getElementById("answerbox").innerText;
			var str2 = document.getElementById("checkquestion6-1").innerText;
			var str3 = document.getElementById("checkquestion6-2").innerText;
			// str = str.replace(/ /g , "");
			// str2 = str2.replace(/ /g , "");
			// str3 = str3.replace(/ /g , "");
			if (str == str2 || str == str3) {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq7() {
	$("#Q1").load("./htm/Q7.html", function () {
		var dottedbox = document.querySelector('.dotted-box');
		[].slice.call(document.querySelectorAll('.shadowbutton')).forEach(function (button) {
			button.addEventListener("click", onButtonClick);
		});
	});
	$("#footer").load("./htm/Q7-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq7').click(function () {
			var text1 = document.getElementById("answerbox").innerHTML.trim().toLowerCase();
			var text2 = '<h2>there are six types of headings</h2>';
			if (text1 == text2) {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq8() {
	$("#Q1").load("./htm/Q8.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q8-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq8').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'second') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}
function loadq9() {
	$("#Q1").load("./htm/Q9.html", function () {
		var dottedbox = document.querySelector('.dotted-box');
		[].slice.call(document.querySelectorAll('.shadowbutton')).forEach(function (button) {
			button.addEventListener("click", onButtonClick);
		});
	});
	$("#footer").load("./htm/Q9-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq9').click(function () {
			var str = document.getElementById("answerbox").innerText;
			var str2 = document.getElementById("checkquestion9").innerText;
			console.log(str);
			console.log(str2);
			if (str == str2) {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq10() {
	$("#Q1").load("./htm/Q10.html", function () {
		var input = document.querySelector('textarea');
		input.addEventListener('input', function (e) {
			document.getElementById("answerbox").innerHTML = e.target.value;
			if (document.getElementById("answerbox").textContent.length > 28) {
				$("#answerbox").addClass("flex1");
				$("#answerbox").removeClass("flex2");
			} else {
				$("#answerbox").removeClass("flex1");
				$("#answerbox").addClass("flex2");
			}
		});
	});
	$("#footer").load("./htm/Q10-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq10').click(function () {
			var str = document.getElementById("answerbox").innerHTML.toLowerCase();
			str = str.replace(/ /g, "");
			if (str == '<p>santaclawslivesat:<br>northpole<br>articcircle<br>lapland<br>finland</p>') {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq11() {
	$("#Q1").load("./htm/Q11.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q11-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq11').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'second') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}

function loadq12() {
	$("#Q1").load("./htm/Q12.html", function () {
		var input = document.querySelector('textarea');
		input.addEventListener('input', function (e) {
			document.getElementById("answerbox").innerHTML = e.target.value;
			console.log(document.getElementById("answerbox").innerHTML);
			if (document.getElementById("answerbox").innerHTML.trim() == '<img src="polarbear.jpg">') {
				$("#answerbox").addClass("flex1");
			} else {
				$("#answerbox").removeClass("flex1");
			}
		});
	});
	$("#footer").load("./htm/Q12-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq12').click(function () {
			var str = document.getElementById("answerbox").innerHTML.toLowerCase();
			str = str.replace(/\s/g, "");
			if (str == '<p>polarbearsliveinthenorthpole</p>') {
				answercorrect();
			} else {
				answerwrong();
			}
		});
	});
}
function loadq13() {
	$("#Q1").load("./htm/Q13.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q13-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq13').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'second') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}
function loadq14() {
	$("#Q1").load("./htm/Q14.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q14-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq14').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'first') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}
function loadq15() {
	$("#Q1").load("./htm/Q15.html", function () {
		radiochange();
	});
	$("#footer").load("./htm/Q15-footer.html", function () {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq15').click(function () {
			if ($('input[type="radio"]').is(':checked')) {
				var radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if (radiovalue == 'first') {
					answercorrect();
				} else {
					answerwrong();
				}
			} else {
				//alert('Please select one option');
				answerwrong();
			}
		});
	});
}
var buttons = document.querySelectorAll('.shadowbutton');
var dottedbox = document.querySelector('.dotted-box');
var answerbox = document.querySelector('#answerbox');
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var third = document.querySelector('.third');

[].slice.call(document.querySelectorAll('.shadowbutton')).forEach(function (button) {
	button.addEventListener("click", onButtonClick);
});

function onButtonClick(e) {
	var dottedbox = document.querySelector('.dotted-box');
	var text = e.target.innerHTML;
	resultview();
	this.disabled = true;
	$(this).addClass('disable');
	var btn = $('<button class="shadowbutton">' + text + "</button>");
	btn.on("click", function (e) {
		var parent = e.target.parentElement;
		var parentdiv = document.querySelectorAll('.disable');
		var buttton = $(e.target.pBtn);
		//console.log(e)
		buttton.removeAttr('disabled');
		buttton.removeClass('disable');
		e.target.remove();
		resultview();
	});
	btn[0].pBtn = e.target;
	btn.appendTo(dottedbox);
}
function thankyou() {
	window.open("./htm/thankyou.html", "_parent")
}
function resultview() {
	setTimeout(function () {
		var value1 = document.querySelector('.dotted-box');
		document.getElementById('answerbox').innerHTML = value1.textContent;
	}, 100);
}
function answercorrect() {
	var first = document.querySelector('.first');
	var second = document.querySelector('.second');
	var third = document.querySelector('.third');

	var prog = document.querySelector('.w3-green');
	var sliderincrement = 5;
	var width = Math.round(100 * parseFloat($('.w3-green').css('width')) / parseFloat($('.w3-green').parent().css('width')));
	prog.style.width = width + sliderincrement + '%';

	if (window.innerWidth > 380) {
		document.getElementById("footer").style.backgroundColor = "#cbf0af";
	}
	first.style.display = "none";
	second.style.display = "block";
}
function answerwrong() {
	var ansback = document.querySelector('.third .answer');
	var first = document.querySelector('.first');
	var second = document.querySelector('.second');
	var third = document.querySelector('.third');

	var prog = document.querySelector('.w3-green');
	var sliderincrement = 5;
	var width = Math.round(100 * parseFloat($('.w3-green').css('width')) / parseFloat($('.w3-green').parent().css('width')));

	first.style.display = "none";
	second.style.display = "none";
	third.style.display = "block";
	if (width >= 10) {
		prog.style.width = width - sliderincrement + '%';
	}

	if (window.innerWidth > 380) {
		document.getElementById("footer").style.backgroundColor = "#f35353";
	}
	ansback.style.backgroundColor = '#f35353';
}
function checkq1() {
	var value1 = document.querySelector('.dotted-box');
	var check1 = value1.textContent.trim().toLowerCase();
	var check2 = '<p>polar bears live in the north pole</p>';
	if (check1 == check2) {
		answercorrect();
	} else {
		answerwrong();
	}
}