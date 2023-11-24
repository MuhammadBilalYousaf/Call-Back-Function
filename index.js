function generateFibonacci(callback) {
    var terms = prompt("Enter the number of terms for Fibonacci series:");

    terms = parseInt(terms);

    if (isNaN(terms) || terms <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    var fibonacciSeries = [0, 1];
    for (var i = 2; i < terms; i++) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    callback(fibonacciSeries);
}

function displayFibonacci(series) {
    document.getElementById("fibonacciSeries").innerHTML = "Fibonacci Series: " + series.join(", ");
}