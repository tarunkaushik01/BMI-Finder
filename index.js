const div = document.querySelector('.calculator');

div.querySelector('button').addEventListener('click', function(e){
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.querySelector('.result');

    if (!isNaN(height) && !isNaN(weight)) {
        const answer = (weight / ((height / 100) * (height / 100))).toFixed(2);
        result.innerHTML = `BMI: ${answer}`;
    } else {
        result.innerHTML = 'Please enter valid height and weight';
    }
});
