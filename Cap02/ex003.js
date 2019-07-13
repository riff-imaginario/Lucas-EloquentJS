// Chessboard -> Write a program that creates a string that represents an 8×8 grid

let grid = 8  // Tamanho do tabuleiro (n x n)
let char = ''

for (var i=0; i < grid; i++) {
    char = ''
    for (var j=0; j < grid; j++) {
        if (i % 2 == 0) {
            if (j % 2 == 0)
                char += ' '
            else
                char += '#'
        } else {
            if (j % 2 == 1)
                char += ' '
            else
                char += '#'
        }
    }
    console.log(char)
}