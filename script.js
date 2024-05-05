var board = ['', '', '', '', '', '', '', '', ''];
// console.log(board[0][0]);
var player = 'x';
var len = document.querySelectorAll(".item1").length;
console.log(len);
var count = 0;
function check() {
    if (board[0] == player && board[0] === board[1] && board[1] === board[2]) return true;
    if (board[3] == player && board[3] === board[4] && board[4] === board[5]) return true;
    if (board[6] == player && board[6] === board[7] && board[7] === board[8]) return true;
    if (board[0] == player && board[0] === board[3] && board[3] === board[6]) return true;
    if (board[1] == player && board[1] === board[4] && board[4] === board[7]) return true;
    if (board[2] == player && board[2] === board[5] && board[5] === board[8]) return true;
    if (board[0] == player && board[0] === board[4] && board[4] === board[8]) return true;
    if (board[2] == player && board[2] === board[4] && board[4] === board[6]) return true;
    return false;
}
for (var i = 0; i < len; i++) {
    document.querySelectorAll('.item1')[i].addEventListener('click', function () {
        if (board[this.id[2]-1] === '') {
            
            document.getElementById(this.id).innerHTML = player;
            board[this.id[2]-1] = player;
            if (check()) {
                alert(player + ' Won!');
                resetit();
            }
            if (count === 9) {
                alert("DRAW!");
                resetit();
            }
            if (player === 'x') player = 'o';
            else player = 'x';
            count++;
        }

    })
}
function resetit() {
    for (var i = 0; i < 9; i++) {
        board[i] = '';
        document.querySelectorAll('.item1')[i].innerHTML = '';
        count = 0;
    }
}

document.querySelector('button').addEventListener('click', resetit)