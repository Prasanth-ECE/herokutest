$(document).ready(function(){
	//loadq1()
 });
 let prog = document.querySelector('.w3-green')
 function radiochange() {
	var $radioButtons = $('input[type="radio"]');
	$radioButtons.click(function() {
		$radioButtons.each(function() {
			$(this).parent().toggleClass('checked', this.checked);
		});
	});
 }

 function loadq2() {
	$("#Q1").load("Q2.html", ()=> {
		radiochange()
	});
	$("#footer").load("Q2-footer.html", ()=> {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq2').click(function() {
			if($('input[type="radio"]').is(':checked')){
				let radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if(radiovalue == 'first'){
					answercorrect()
				}
				else{
					answerwrong()
				}
			}
			else{
				alert('Please select one option')
			}
		})
	});
}
 function loadq3() {
	 $("#Q1").load("Q3.html", ()=> {
		 let input = document.querySelector('textarea');
		 input.addEventListener('input', (e)=>{
			 document.getElementById("answerbox").innerHTML = e.target.value;
			 if(document.getElementById("answerbox").textContent.length > 28){
				 $("#answerbox").addClass("flex3");
				 $("#answerbox").removeClass("flex4");
			 }
			 else{
				 $("#answerbox").removeClass("flex3");
				 $("#answerbox").addClass("flex4");
			 }
		 })
	 })
	 $("#footer").load("Q3-footer.html", ()=> {
		 document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		 $('#checkq3').click(function() {
			 let str = document.getElementById("answerbox").innerHTML.toLowerCase()
			 str = str.replace(/\s/g, "");
			 if(str == '<p>polarbearsliveinthenorthpole</p>'){
				 answercorrect()
			 }
			 else{
				 answerwrong()
			 }
		 }) 
	 });
	 
 }
 function loadq4() {
	 $("#Q1").load("Q4.html", ()=> {
		radiochange()
	 });
	 $("#footer").load("Q4-footer.html", ()=> {
		 document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		 $('#checkq4').click(function() {
			 if($('input[type="radio"]').is(':checked')){
				 let radiovalue = document.querySelector('input[type="radio"]:checked').value;
				 if(radiovalue == 'first'){
				 answercorrect()
				 }
				 else{
					 answerwrong()
				 }
			 }
			 else{
				 alert('Please select one option')
			 }
		 })
	 });
 }
 function loadq5() {
	 $("#Q1").load("Q5.html", ()=> {
		 let dottedbox = document.querySelector('.dotted-box');
		 Array.from(document.querySelectorAll('.shadowbutton')).forEach(button => {button.addEventListener("click", onButtonClick)})
 
	 });
	 $("#footer").load("Q5-footer.html", ()=> {
		 document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		 $('#checkq5').click(function() {
			 let str = document.getElementById("answerbox").innerText;
			 let str2 = document.getElementById("checkquestion4-1").innerText;
			 let str3 = document.getElementById("checkquestion4-2").innerText;
 
			 // str = str.replace(/ /g , "");
			 // str2 = str2.replace(/ /g , "");
			 // str3 = str3.replace(/ /g , "");
			 if((str == str2) || (str == str3)){
				 answercorrect()
			 }
			 else{
				 answerwrong()
			 }
		 }) 
	 });
 }
 function loadq6() {
	 $("#Q1").load("Q6.html", ()=> {
		 let dottedbox = document.querySelector('.dotted-box');
		 Array.from(document.querySelectorAll('.shadowbutton')).forEach(button => {button.addEventListener("click", onButtonClick)})
 
	 });
	 $("#footer").load("Q6-footer.html", ()=> {
		 document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		 $('#checkq6').click(function() {
			 let text1 = document.getElementById("answerbox").innerHTML.trim().toLowerCase();
			 console.log(text1)
			 let text2 = '<h1>animals that live in cold places</h1>';
			 if(text1 == text2){
				 answercorrect()
			 }
			 else{
				 answerwrong()
			 }
		 }) 
	 });
 }
 function loadlist() {
	 $("#Q1").load("Q6.html", ()=> {
		 let dottedbox = document.querySelector('.dotted-box');
		 Array.from(document.querySelectorAll('.shadowbutton')).forEach(button => {button.addEventListener("click", onButtonClick)})
 
	 });
	 $("#footer").load("Q6-footer.html", ()=> {
		 document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		 $('#checkqlist').click(function() {
			 let str = document.getElementById("answerbox").innerText;
			 let str2 = document.getElementById("checkquestion6-1").innerText;
			 let str3 = document.getElementById("checkquestion6-2").innerText;
			 // str = str.replace(/ /g , "");
			 // str2 = str2.replace(/ /g , "");
			 // str3 = str3.replace(/ /g , "");
			 if((str == str2) || (str == str3)){
				 answercorrect()
			 }
			 else{
				 answerwrong()
			 }
		 }) 
	 });
 }
 function loadq7() {
	 $("#Q1").load("Q7.html", ()=> {
		 let dottedbox = document.querySelector('.dotted-box');
		 Array.from(document.querySelectorAll('.shadowbutton')).forEach(button => {button.addEventListener("click", onButtonClick)})
 
	 });
	 $("#footer").load("Q7-footer.html", ()=> {
		 document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		 $('#checkq7').click(function() {
			 let text1 = document.getElementById("answerbox").innerHTML.trim().toLowerCase();
			 let text2 = '<h2>there are six types of headings</h2>';
			 if(text1 == text2){
				 answercorrect()
			 }
			 else{
				 answerwrong()
			 }
		 }) 
	 });
 }
 function loadq8() {
	$("#Q1").load("Q8.html", ()=> {
	   radiochange()
	});
	$("#footer").load("Q8-footer.html", ()=> {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq8').click(function() {
			if($('input[type="radio"]').is(':checked')){
				let radiovalue = document.querySelector('input[type="radio"]:checked').value;
				if(radiovalue == 'second'){
				answercorrect()
				}
				else{
					answerwrong()
				}
			}
			else{
				alert('Please select one option')
			}
		})
	});
}
function loadq9() {
	$("#Q1").load("Q9.html", ()=> {
		let dottedbox = document.querySelector('.dotted-box');
		Array.from(document.querySelectorAll('.shadowbutton')).forEach(button => {button.addEventListener("click", onButtonClick)})

	});
	$("#footer").load("Q9-footer.html", ()=> {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq9').click(function() {
			let str = document.getElementById("answerbox").innerText;
			let str2 = document.getElementById("checkquestion9").innerText;
			console.log(str)
			console.log(str2)
			if((str == str2)){
				answercorrect()
			}
			else{
				answerwrong()
			}
		}) 
	});
}
function loadq10() {
	$("#Q1").load("Q10.html", ()=> {
		let input = document.querySelector('textarea');
		input.addEventListener('input', (e)=>{
			document.getElementById("answerbox").innerHTML = e.target.value;
			if(document.getElementById("answerbox").textContent.length > 28){
				$("#answerbox").addClass("flex1");
				$("#answerbox").removeClass("flex2");
			}
			else{
				$("#answerbox").removeClass("flex1");
				$("#answerbox").addClass("flex2");
			}
		})
	})
	$("#footer").load("Q10-footer.html", ()=> {
		document.getElementById("footer").style.backgroundColor = "#e7e7e7";
		$('#checkq10').click(function() {
			let str = document.getElementById("answerbox").innerHTML.toLowerCase()
			str = str.replace(/ /g , "");
			if(str == '<p>santaclawslivesat:<br>northpole<br>articcircle<br>lapland<br>finland</p>'){
				answercorrect()
			}
			else{
				answerwrong()
			}
		}) 
	});
	
}

 let buttons = document.querySelectorAll('.shadowbutton');
 let dottedbox = document.querySelector('.dotted-box');
 let answerbox = document.querySelector('#answerbox');
 let first = document.querySelector('.first');
 let second = document.querySelector('.second');
 let third = document.querySelector('.third');
 
 Array.from(document.querySelectorAll('.shadowbutton')).forEach(
	 button => {button.addEventListener("click", onButtonClick)})
 
 function onButtonClick(e) {
	 let dottedbox = document.querySelector('.dotted-box');
   let text = e.target.innerHTML;
   resultview();
   this.disabled = true;
   $(this).addClass('disable');
   let btn = $('<button class="shadowbutton">' + text + "</button>");
   btn.on("click", (e) => {
	 let parent = e.target.parentElement;
	 let parentdiv = document.querySelectorAll('.disable');
	 let buttton = $(e.target.pBtn);
	 //console.log(e)
	 buttton.removeAttr('disabled');
	 buttton.removeClass('disable');
	 e.target.remove();
	 resultview();
   });
   btn[0].pBtn = e.target;
   btn.appendTo(dottedbox);
 }
 
 
 function resultview() {
	 setTimeout(()=>{
		 let value1 = document.querySelector('.dotted-box');
		 document.getElementById('answerbox').innerHTML =  value1.textContent;
	 }, 100)
 }
 function answercorrect() {
	 let first = document.querySelector('.first');
	 let second = document.querySelector('.second');
	 let third = document.querySelector('.third');
	 
	 let prog = document.querySelector('.w3-green')
	 let sliderincrement = 10;
	 var width = Math.round( 100 * parseFloat($('.w3-green').css('width')) / parseFloat($('.w3-green').parent().css('width')) );
	 prog.style.width =  (width + sliderincrement)+ '%';
 
	 if(window.innerWidth > 380){
		 document.getElementById("footer").style.backgroundColor = "#cbf0af";
	 }
	 first.style.display="none";
	 second.style.display="block";
 }
 function answerwrong() {
	 let ansback = document.querySelector('.third .answer');
	 let first = document.querySelector('.first');
	 let second = document.querySelector('.second');
	 let third = document.querySelector('.third');
 
 
	 let prog = document.querySelector('.w3-green')
	 let sliderincrement = 10;
	 var width = Math.round( 100 * parseFloat($('.w3-green').css('width')) / parseFloat($('.w3-green').parent().css('width')) );
 
	 first.style.display="none";
	 second.style.display="none";
	 third.style.display="block";
	 if (width >= 20){
		 prog.style.width =  (width - sliderincrement)+ '%';
	 }
 
	 if(window.innerWidth > 380){
		 document.getElementById("footer").style.backgroundColor = "#f35353";
	 }
	 ansback.style.backgroundColor = '#f35353';
 }
 function checkq1() {
	 let value1 = document.querySelector('.dotted-box');
	 let check1 = value1.textContent.trim().toLowerCase();
	 let check2 = '<p>polar bears live in the north pole</p>';
	 if(check1 == check2){
		 answercorrect()
	 }
	 else{
		 answerwrong()
	 }
 }
 