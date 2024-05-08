// Create a function to calculate the objective. For demonstration: f(x) = (x - 3)^2 + 2.
function calculateObjective(x) {
    return Math.pow(x - 3, 2) + 2; // Return function's value at x.
}

// Apply the Golden Section Search method to find the function's minimum point within the interval [low, high].
function findMinimumUsingGoldenRatio(low, high, tolerance = 0.00001) {
    // Calculate the golden ratio, crucial for the distribution of search points.
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    // Compute initial probing points within the interval based on the golden ratio.
    let pointA = high - (high - low) / goldenRatio; // Point A is closer to low
    let pointB = low + (high - low) / goldenRatio; // Point B is closer to high

    // Continue refining the interval until the range is smaller than tolerance.
    while (Math.abs(pointA - pointB) > tolerance) {
        // Evaluate the objective function at both points.
        let valueAtPointA = calculateObjective(pointA); // Value at point A
        let valueAtPointB = calculateObjective(pointB); // Value at point B

        // Narrow down the search range based on function evaluations.
        if (valueAtPointA < valueAtPointB) {
            high = pointB; // If value at A is lower, focus on left sub-interval.
        } else {
            low = pointA; // If value at B is lower or equal, focus on right sub-interval.
        }

        // Recalculate the points A and B for the updated range.
        pointA = high - (high - low) / goldenRatio;
        pointB = low + (high - low) / goldenRatio;
    }

    // Return the center of the final interval as the best approximation of the minimum location.
    return (high + low) / 2;
}

// Set the range for applying the Golden Section Search.
let initialLow = 0; // Start of the search interval
let initialHigh = 6; // End of the search interval

// Execute the Golden Section Search to identify the optimal minimum value.
let optimalX = findMinimumUsingGoldenRatio(initialLow, initialHigh);

// Display the results.
console.log("Optimal x-value found:", optimalX);
console.log("Minimum value of the function:", calculateObjective(optimalX));
