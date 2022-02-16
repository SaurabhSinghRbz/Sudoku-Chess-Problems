function runProgram(input) {
    var [i, j, n] = input.trim().split(" ").map(Number)
    console.log(solveIt(i, j, n, {}));
}

function solveIt(i, j, n, data) {
    if (n < 0) {
        return 0;
    }
    if (i < 1 || i > 10 || j < 1 || j > 10) {
        return 0;
    }
    if (n == 0) {
        if (!(data[[i, j]])) {
            data[[i, j]] = 1
            return 1;
        }
        return 0;
    }

    var ans = 0
    ans += solveIt(i + 1, j + 2, n - 1, data)
    ans += solveIt(i + 1, j - 2, n - 1, data)
    ans += solveIt(i - 1, j + 2, n - 1, data)
    ans += solveIt(i - 1, j - 2, n - 1, data)
    ans += solveIt(i + 2, j + 1, n - 1, data)
    ans += solveIt(i + 2, j - 1, n - 1, data)
    ans += solveIt(i - 2, j + 1, n - 1, data)
    ans += solveIt(i - 2, j - 1, n - 1, data)

    return ans
}

if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}