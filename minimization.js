// Define the target function for minimization.
// Example function for demonstration: f(x) = (x - 3)^2 + 2.
function targetFunction(x) {
    return (x - 3) ** 2 + 2; // Computes the value of the function at a given x.
}

// Implement the Golden Section Search to find the minimum of the target function within a given range [a, b].
function optimizeWithGoldenSection(a, b, epsilon = 1e-5) {
    // The golden ratio, important for setting the search points.
    const phi = (1 + Math.sqrt(5)) / 2;

    // Initial points c and d are determined by dividing the interval [a, b] according to the golden ratio.
    let c = b - (b - a) / phi; // c is nearer to a
    let d = a + (b - a) / phi; // d is nearer to b

    // Iterative search continues until the interval is sufficiently small.
    while (Math.abs(c - d) > epsilon) {
        // Function evaluations at the points c and d.
        let fc = targetFunction(c); // Evaluate function at c
        let fd = targetFunction(d); // Evaluate function at d

        // Update the search interval based on the comparison of function values.
        if (fc < fd) {
            b = d; // Narrow the interval to [a, d] if f(c) is less than f(d).
        } else {
            a = c; // Narrow the interval to [c, b] if f(d) is less or equal.
        }

        // Recompute c and d for the new interval.
        c = b - (b - a) / phi;
        d = a + (b - a) / phi;
    }

    // The midpoint of the last interval is considered the best estimate of the minimum.
    return (b + a) / 2;
}

// Initialize the interval for the search.
let start = 0; // Start of the interval
let end = 6; // End of the interval

// Apply the Golden Section Search to find the minimum.
let optimalValue = optimizeWithGoldenSection(start, end);

// Output the results.
console.log("The optimal x value is:", optimalValue);
console.log("At this x, the function's minimum value is:", targetFunction(optimalValue));
