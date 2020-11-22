var guesses_used = 1;
var ai_guess = Math.floor(Math.random() * 100 + 1);

function guess() {
    var users_guess = document.getElementById("guessed").value;
    var guesses_left = 5 - guesses_used;

    if (guesses_left == 0) {
        if (users_guess == ai_guess) {
            document.getElementById("result").innerHTML = "Congratulations, you guessed " + users_guess + " correctly in " + guesses_used + " guess(es)";
        } else {
            document.getElementById("result").innerHTML = "You are out of tries. The answer is " + ai_guess;
        }

    } else if (users_guess == ai_guess) {
        guesses_used++;
        document.getElementById("result").innerHTML = "Congratulations, you guessed " + users_guess + " correctly in " + guesses_used + " guess(es)";

    } else if (users_guess < ai_guess) {
        guesses_used++;
        document.getElementById("result").innerHTML = "You guess of " + users_guess + " is less than the random number. You have " + guesses_left + " guess(es) left.";

    } else if (users_guess > ai_guess) {
        guesses_used++;
        document.getElementById("result").innerHTML = "You guess of " + users_guess + " is greater than the random number. You have " + guesses_left + " guess(es) left.";
    }

}