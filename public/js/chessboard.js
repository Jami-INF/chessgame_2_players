class ChessBoard{
    board = [];

    constructor(){
        this.init();
    }
    init(){
        this.initBoard();
        this.initPieces();
        this.initBoardHTML();
        this.initEvents();
    }
    initBoard(){
        for(let i = 0; i < 8; i++){
            this.board[i] = [];
            for(let j = 0; j < 8; j++){
                this.board[i][j] = [];
            }
        }
    }
    initPieces(){
        this.board[0][0] = new Rook('black', 0, 0);
        this.board[0][1] = new Knight('black', 0, 1);
        this.board[0][2] = new Bishop('black', 0, 2);
        this.board[0][3] = new Queen('black', 0, 3);
        this.board[0][4] = new King('black', 0, 4);
        this.board[0][5] = new Bishop('black', 0, 5);
        this.board[0][6] = new Knight('black', 0, 6);
        this.board[0][7] = new Rook('black', 0, 7);
        this.board[7][0] = new Rook('white', 7, 0);
        this.board[7][1] = new Knight('white', 7, 1);
        this.board[7][2] = new Bishop('white', 7, 2);
        this.board[7][3] = new Queen('white', 7, 3);
        this.board[7][4] = new King('white', 7, 4);
        this.board[7][5] = new Bishop('white', 7, 5);
        this.board[7][6] = new Knight('white', 7, 6);
        this.board[7][7] = new Rook('white', 7, 7);
        for(let i = 0; i < 8; i++){
            this.board[1][i] = new Pawn('black', 1, i);
            this.board[6][i] = new Pawn('white', 6, i);
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
                boxHTML.setAttribute('y',box.y);
                boxHTML.setAttribute('x',box.x);
                boxHTML.style.backgroundImage = 'url("public/img/pawns/'+box.name+'_'+box.color+'.png")';
                boxHTML.style.width = '100px';
                boxHTML.style.height = '100px';
                boxHTML.style.backgroundSize = '80% 80%';
                boxHTML.style.backgroundRepeat = 'no-repeat';
                boxHTML.style.backgroundPosition = 'center';
                boxTab.appendChild(boxHTML);
                ligne.appendChild(boxTab);
            });
            boardHTML.appendChild(ligne);
        });
        emplacementBoard.appendChild(boardHTML);
    }
    
    initEvents(){
        console.log("initEvents");
    }
}
