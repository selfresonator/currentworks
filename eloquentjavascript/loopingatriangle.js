var num = '#';
function chessboard() {
	while (num.length < 8) {
		console.log(num);
		num += '#';
	}
}

chessboard();