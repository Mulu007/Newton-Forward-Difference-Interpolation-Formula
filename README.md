
# NEWTON FORWARD DIFFERENCE FORMULA

This JavaScript code provides a Command-Line Interface (CLI) for performing polynomial interpolation using divided differences. It allows users to input a set of data points, and then computes the interpolated value of a polynomial at a specified point.

## Video tutorial
[Screencast from 03-04-24 21:19:58.webm](https://github.com/Mulu007/Newton-Forward-Difference-Interpolation-Formula/assets/110171336/fe8c9369-57d5-400d-89c6-2e78f11a2aab)

## Functions:

### Forward Difference Function (forwardDifference):

This function recursively computes the divided differences for a given set of data points. 
Parameters:
* x: Array of x-values.
* y: Array of corresponding y-values.
* n: Number of data points.
* i: Index of the current data point.
* j: Order of the divided difference.
_Returns: The divided difference value for the specified order j._

### Coefficient Calculation Function (coefficients):

This function calculates the interpolated value of a polynomial at a given point using divided differences.
Parameters:
* x: Array of x-values.
* y: Array of corresponding y-values.
* n: Number of data points.
* value: Value for interpolation.
_Returns: The interpolated value at the specified point._

### CLI Interface Function (interface):

This function creates an interactive command-line interface using Node.js's readline module.
It prompts the user to input the number of data points and then iteratively collects the x and y values for each data point.
After gathering the required input, it prompts the user to enter a value for interpolation and computes the interpolated value using the coefficients function.
The interpolated value is then displayed to the user.

## Usage:

Run the code in a Node.js environment.
Follow the prompts to enter the number of data points, x and y values for each point, and the value for interpolation.
The code will then compute the interpolated value of the polynomial at the specified point and display the result to the user.

**Note:**

The implementation uses Horner's method for precision in coefficient calculation.
Input data should be provided in a sequential manner as guided by the CLI prompts.
Ensure Node.js and readline module are installed to run the code.





