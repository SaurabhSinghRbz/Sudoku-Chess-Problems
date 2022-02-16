function runProgram(input) {
    var board = [];
    for (var j = 0; j <= 9; j++) {
        board[j] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    input = input.trim().split(" ");
    var row = +(input[0]) - 1;
    var col = +(input[1]) - 1;
    var N = +(input[2]);
    ftk(board, N, row, col);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (board[i][j] == 1) {
                count++;
            }
        }
    }
    console.log(count)
}
var count = 0;
var map = new Map();
function ftk(board, N, r, c) {
    if (r < 0 || r > 9 || c < 0 || c > 9) {
        return;
    }
    if (N == 0) {

        board[r][c] = 1;


        return;
    }
    if (N < 0) {
        return
    }
    ftk(board, N - 1, r + 1, c + 2);
    ftk(board, N - 1, r + 1, c - 2);
    ftk(board, N - 1, r - 1, c + 2);
    ftk(board, N - 1, r - 1, c - 2);
    ftk(board, N - 1, r + 2, c + 1);
    ftk(board, N - 1, r + 2, c - 1);
    ftk(board, N - 1, r - 2, c + 1);
    ftk(board, N - 1, r - 2, c - 1);
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