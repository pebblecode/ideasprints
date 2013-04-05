var questions = [
'Which idea the idea save AstraZeneca the most money?', 
'Which idea will be quickest to prototype?',
 'Will the prototype cost the least to prototype?',
 'Which idea will involve the most departments?',
 'Which idea will increase productivity the most?',
 'Which idea has the least potential issues?',
 'Which idea will affect the most people?',
 'Will your idea affect people in multiple countries?']

var questionsAnswered = 0;
var yesAnswersIdea1 = 0;
var yesAnswersIdea2 = 0;
var movePlayer1 = function(id) {
  var player = $('.player-1');
  
  player.toggleClass("rest run")
		.removeClass('position-' +(yesAnswersIdea1-1))
		.addClass('position-' + yesAnswersIdea1);

		
  window.setTimeout(function () { 
    player.toggleClass("run rest"); 
  }, 2000);
  
  if (yesAnswersIdea1 === 6) {
    player.toggleClass('rest jump')
  }		
};

var movePlayer2 = function() {
  var player = $('.player-2');
  
  player.toggleClass("rest run")
		.removeClass('position-' +(yesAnswersIdea2-1))
		.addClass('position-' + yesAnswersIdea2);

		
  window.setTimeout(function () { 
    player.toggleClass("run rest"); 
  }, 2000);
  
  if (yesAnswersIdea2 === 6) {
    player.toggleClass('rest jump')
  }		
};
(function(){

$('#question').text(questions[0]);

$('button').bind('click', function(e){
    var target = $(e.target);
		
	if (target.hasClass('idea1')) {
		yesAnswersIdea1++;
		movePlayer1();
	}else{
		yesAnswersIdea2++;
		movePlayer2();
	}
	 
	questionsAnswered++;
	
	$('#question').text(questions[questionsAnswered])
     
});
}());

