//x => x values y=> y values n=> no. of data points i => index of number j=> order of forward difference 
function forwardDifference(x, y, n, i, j) {
    if (j === 0) {
        return y[i];
    } else {
        return forwardDifference(x, y, n, i + 1, j - 1) - forwardDifference(x, y, n, i, j - 1);
    }
}

//value =>interpolated value to be used
//p => (X-Xnote)/h
//the loop runs from j when it is 0 to n-1
//k represents the index of the current term within the divided difference expression for the order j.
//The Horner's method is used for precision
function coefficients(x, y, n, value) {
    const h = x[1] - x[0];
    const p = (value - x[0]) / h;
    let result = forwardDifference(x, y, n, 0, 0);

    for (let j = 1; j < n; j++) {
        let term = forwardDifference(x, y, n, 0, j);
        let coeff = 1;

        for (let k = 0; k < j; k++) {
            coeff *= (p - k) / (k + 1);
        }
        result += term * coeff;
    }
    return result;
}

//Node js readline module to make the CLI interative
function interface() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the number of data points: ", function(n) {
        let x = [];
        let y = [];
        const readX = (i) => {
            if (i < n) {
                rl.question(`Enter the value of x${i}: `, function(value) {
                    x.push(parseFloat(value));
                    readY(i);
                });
            } else {
                readValue();
            }
        };
        const readY = (i) => {
            rl.question(`Enter the value of y${i}: `, function(value) {
                y.push(parseFloat(value));
                readX(i + 1);
            });
        };
        const readValue = () => {
            rl.question("Enter the value for interpolation: ", function(value) {
                let result = coefficients(x, y, n, parseFloat(value));
                console.log(`Interpolated value at ${value} is ${result.toFixed(3)}`);
                rl.close();
            });
        };
        readX(0);
    });
}

interface();
