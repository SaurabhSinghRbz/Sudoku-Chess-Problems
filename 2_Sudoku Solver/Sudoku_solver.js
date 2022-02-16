function can_i_add_this(i, j, val, board) {

    for (let tj = 0; tj < 9; tj++) {
        if (board[i][tj] == val) {
            return false
        }
    }

    for (let ti = 0; ti < 9; ti++) {
        if (board[ti][j] == val) {
            return false
        }
    }

    let box_s_i = i - (i % 3)
    let box_s_j = j - (j % 3)

    for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
            if (board[box_s_i + k][box_s_j + l] == val) {
                return false
            }
        }
    }
    return true
}

function solve_it(ci, cj, cur_board) {
    if (ci >= 9) {
        for (let i = 0; i < 9; i++) {
            console.log(cur_board[i].join(' '))
        }
        return true
    }
    let nci = ci
    let ncj = cj
    if (ncj + 1 < 9) {
        ncj++
    } else {
        nci++
        ncj = 0
    }
    if (cur_board[ci][cj] != 0) {
        return solve_it(nci, ncj, cur_board)
    } else {
        for (let i = 1; i <= 9; i++) {
            if (can_i_add_this(ci, cj, i, cur_board)) {
                cur_board[ci][cj] = i
                if (solve_it(nci, ncj, cur_board)) {
                    return true
                }
                cur_board[ci][cj] = 0
            }
        }
        return false
    }
}

function doit(input) {

    let lines = input.split('\n')

    let arr = []
    for (let i = 0; i < 9; i++) {
        arr.push(lines[i].trim().split(' ').map(Number))
    }

    if (!solve_it(0, 0, arr)) {
        console.log(-1)
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");

    doit(read)
});