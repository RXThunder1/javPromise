const favoriteNumber = 9; // Replace with your favorite number

fetch(`http://numbersapi.com/${favoriteNumber}?json`)
    .then(response => response.json())
    .then(data => {
        console.log(data.text); // Log the fact about your favorite number
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


const numbers = [7, 13, 42, 100]; // Replace with your favorite numbers

const requests = numbers.map(number =>
    fetch(`http://numbersapi.com/${number}?json`)
        .then(response => response.json())
);

Promise.all(requests)
    .then(results => {
        results.forEach(result => {
            console.log(result.text); // Log each fact about the numbers
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


const favoriteNumber = 9; // Replace with your favorite number

const requests = Array.from({ length: 4 }, () =>
        fetch(`http://numbersapi.com/${favoriteNumber}?json`)
            .then(response => response.json())
    );
    
    Promise.all(requests)
        .then(results => {
            results.forEach(result => {
                console.log(result.text); // Log each fact about your favorite number
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });