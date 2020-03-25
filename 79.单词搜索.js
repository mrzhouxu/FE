let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

var exist = function (board, word) {
    let row = board.length;
    let col = board[0] && board[0].length;
    let flagArr = [];
    for (let i = 0; i < row; i++) {
        flagArr[i] = [];
        for (let j = 0; j < col; j++) {
            flagArr[i][j] = true;
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (fn(i, j, 0, word, board, flagArr)) {
                // console.log(word)
                return true
            }
        }
    }
    return false;
};

function fn(i, j, index, word, board, flagArr) {
    if (index == word.length - 1) {
        return word[index] == board[i][j];
    }
    if (word[index] == board[i][j]) {
        flagArr[i][j] = false;
        let newI = i;
        let newJ = j+1;
        if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length && flagArr[newI][newJ]) {
            if(fn(newI,newJ,index+1,word,board,flagArr)) {
                return true
            }
        }
        newI = i;
        newJ = j-1;
        if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length && flagArr[newI][newJ]) {
            if(fn(newI,newJ,index+1,word,board,flagArr)) {
                return true
            }
        }
        newI = i-1;
        newJ = j;
        if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length && flagArr[newI][newJ]) {
            if(fn(newI,newJ,index+1,word,board,flagArr)) {
                return true
            }
        }
        newI = i+1;
        newJ = j;
        if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length && flagArr[newI][newJ]) {
            if(fn(newI,newJ,index+1,word,board,flagArr)) {
                return true
            }
        }

        flagArr[i][j] = true;
    }
    return false;
}



exist(board, "ABCCED")
exist(board, "SEE")
exist(board, "ABCB")