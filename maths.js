var answer;
var score = 0;
var backgroundImage = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {

    const prediction = predictImage();
    // console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        // console.log(`Correct. ${score}`);
        if (score <= 6) {
            backgroundImage.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImage;
        } else {
            alert('Well done! Your math garden is in full bloom! Want to start again?');
            score = 0;
            backgroundImage = [];
            document.body.style.backgroundImage = backgroundImage;

        }

    } else {
        if (score != 0) {
            score--;
        }
        // console.log(`Wrong. ${score}`);
        alert('Oops! Check your calculations and try writing the number neater next time!');
        setTimeout(function(){
            backgroundImage.pop();
            document.body.style.backgroundImage = backgroundImage;
        }, 1000);

    }

}