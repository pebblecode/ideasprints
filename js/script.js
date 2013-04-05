var questions = ['Will the idea save AstraZeneca money?', 'Will you be able to create a prototype within 1 week?', 'Will the prototype cost less than $20k to create?','Will the idea involve multiple deplartments?','Will the idea increase productivity?','Have you thought of any potential problems to the idea?','Have you talked to at least three other people about the idea','Will your idea affect people in multiple countries?']

var yesAnswers = 0;
var questionsAnswered = 0;
var movePlayer = function() {
  var player = $('.player');
  
  player.toggleClass("rest run")
		.removeClass('position-' +(yesAnswers-1))
		.addClass('position-' + yesAnswers);

		
  window.setTimeout(function () { 
    player.toggleClass("run rest"); 
  }, 2000);
  
  if (yesAnswers === 6) {
    player.toggleClass('rest jump')
  }
		
};

(function(){

$('#question').text(questions[0]);

$('button').bind('click', function(e){
    var target = $(e.target);
		
	if (target.hasClass('yes')) {
	    yesAnswers++;
		movePlayer();
	}
	 
	questionsAnswered++;
	
	$('#question').text(questions[questionsAnswered])
     
});
}());

