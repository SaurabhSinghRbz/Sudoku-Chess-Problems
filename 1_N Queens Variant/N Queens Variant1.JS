var ans = 0;
function runProgram(input) {
    var n = +input
    var board = new Array(n)
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill(0)
    }
    queen(board, 0);
    console.log(ans)

}

function queen(board, row) {
    if (row == board.length) {
        ans++
        return;
    }
    for (var i = 0; i < board.length; i++) {
        if (isSafe(board, row, i) == true) {
            board[row][i] = 1
            queen(board, row + 1)
            board[row][i] = 0
        }
    }
    return ans;
}
function isSafe(board, row, col) {

    // checking coloumn
    var tempi = row, tempj = col
    while (tempi >= 0) {
        if (board[tempi][tempj] == 1) {
            return false;
        }
        tempi--;
    }

    // checking right uper diagonal
    tempi = row, tempj = col;
    while (tempi >= 0 && tempj < board.length) {
        if (board[tempi][tempj] == 1) {
            return false;
        }
        tempi--;
        tempj++;
    }

    // checking left upper diagonal
    count = 0, tempi = row, tempj = col;
    while (tempi >= 0 && tempj >= 0) {
        if (board[tempi][tempj] == 1) {
            return false;
        }
        tempi--;
        tempj--;
    }

    return true;
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