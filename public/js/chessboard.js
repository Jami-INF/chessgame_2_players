class ChessBoard{
    board = [];

    constructor(board, options){
        this.board = board;
        this.options = options;
        this.init();
    }
    init(){
        this.initBoard();
        this.initBoardHTML();
        this.initPieces();
        this.initEvents();
    }
    initBoard(){
        for(let i = 0; i < 8; i++){
            this.board[i] = [];
            for(let j = 0; j < 8; j++){
                this.board[i][j] = new ChessSquare(i, j);
            }
        }
    }
    initPieces(){
        this.board[0][0].piece = new rook('black', 0, 0);
        this.board[0][1].piece = new knight('black', 0, 1);
        this.board[0][2].piece = new bishop('black', 0, 2);
        this.board[0][3].piece = new queen('black', 0, 3);
        this.board[0][4].piece = new king('black', 0, 4);
        this.board[0][5].piece = new bishop('black', 0, 5);
        this.board[0][6].piece = new knight('black', 0, 6);
        this.board[0][7].piece = new rook('black', 0, 7);
        this.board[7][0].piece = new rook('white', 7, 0);
        this.board[7][1].piece = new knight('white', 7, 1);
        this.board[7][2].piece = new bishop('white', 7, 2);
        this.board[7][3].piece = new queen('white', 7, 3);
        this.board[7][4].piece = new king('white', 7, 4);
        this.board[7][5].piece = new bishop('white', 7, 5);
        this.board[7][6].piece = new knight('white', 7, 6);
        this.board[7][7].piece = new rook('white', 7, 7);
        for(let i = 0; i < 8; i++){
            this.board[1][i].piece = new pawn('black', 1, i);
            this.board[6][i].piece = new pawn('white', 6, i);
        }
    }
    initBoardHTML(){
        let emplacementBoard = document.querySelector('#board');
        let boardHTML = document.createElement('table');
        boardHTML.setAttribute('id', 'board');
        boardHTML.setAttribute('cellpadding', '0');
        boardHTML.setAttribute('cellspacing', '0');
        boardHTML.style.margin = 'auto';
        boardHTML.style.border = '2px solid black';
        boardHTML.setAttribute('id','grille');
        this.board.forEach(function(line){
            let ligne = document.createElement('tr');
            line.forEach(function(box){
                let boxHTML = document.createElement('button');
                let boxTab = document.createElement('td');
                boxHTML.setAttribute('id',box.id);
                boxHTML.setAttribute('y',box.y);
                boxHTML.setAttribute('x',box.x);
                boxHTML.style.backgroundImage = 'url(' + box.piece.getImage().src + ')';
                boxHTML.style.backgroundColor = 'gray';
                boxHTML.style.color = 'black';
                boxHTML.style.cursor = 'pointer';

                boxTab.appendChild(boxHTML);
                ligne.appendChild(boxTab);
            });
            boardHTML.appendChild(ligne);
        });
    }
    
    initEvents(){
        console.log("initEvents");
    }
}
