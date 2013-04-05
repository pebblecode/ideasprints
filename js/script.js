var questions = ['question 1', 'question 2', 'question 3','question 4','question 5','question 6','question 7','question 8']

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

