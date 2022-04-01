class ChessBoard{
    board = [];

    constructor(){
        this.init();
    }
    init(){
        this.initBoard();
        this.initPieces();
        this.updateBoardHTML();
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
        for(let i = 0; i < 8; i++){
            for(let j = 2; j < 6; j++){
                this.board[j][i] = new Piece(j, i);
            }
        
        }
    }
    updateBoardHTML(){
        
        this.clearBoard();
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
                if(box.isSelected){
                    boxHTML.style.backgroundColor  = 'red';
                }
                if(box.isMoveAvaible){
                    boxHTML.style.backgroundColor  = 'green';
                }
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

    clearBoard(){
        let emplacementBoard = document.querySelector('#board');
        emplacementBoard.innerHTML = '';
    }
    createPiece(x,y,name,color){
        switch
        (name) {
            case 'pawn':
                return new Pawn(color,parseInt(x),parseInt(y));
            case 'rook':
                return new Rook(color,parseInt(x),parseInt(y));
            case 'knight':
                return new Knight(color,parseInt(x),parseInt(y));
            case 'bishop':
                return new Bishop(color,parseInt(x),parseInt(y));
            case 'queen':
                return new Queen(color,parseInt(x),parseInt(y));
            case 'king':
                return new King(color,parseInt(x),parseInt(y));
        }
    }
    
    initEvents(){
        let chessAcces = this;
        let emplacementBoard = document.querySelector('#board');
        emplacementBoard.addEventListener('click', function(e){
            let x = e.target.getAttribute('x');
            let y = e.target.getAttribute('y');
            console.log( chessAcces.board[x][y].x + ' ' + chessAcces.board[x][y].y + ' ' + chessAcces.board[x][y].name + ' ' + chessAcces.board[x][y].color);
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    try{
                        //console.log(chessAcces.board[i][j].getAllMovment());
                        if(chessAcces.board[i][j].isSelected){
                            console.log(chessAcces.board[i][j].getAllMovment());
                            console.log([parseInt(x),parseInt(y)]);
                            if(JSON.stringify(chessAcces.board[i][j].getAllMovment()).includes(JSON.stringify([parseInt(x),parseInt(y)]))){
                                chessAcces.board[x][y] = chessAcces.createPiece(x,y,chessAcces.board[i][j].name,chessAcces.board[i][j].color);
                                chessAcces.board[i][j] = new Piece(i, j);
                                chessAcces.resetSelected();
                                chessAcces.resetMoveAvaible();
                            }
                        }
                    }catch(e){
                        console.log(e);
                    }
                
                }
            }

            if(chessAcces.board[x][y].isSelected == true){
                chessAcces.board[x][y].isSelected = false;
                chessAcces.resetSelected();
                chessAcces.resetMoveAvaible();
                //chessAcces.moovePiece(x,y);
            }else{
                chessAcces.resetSelected();
                chessAcces.resetMoveAvaible();
                chessAcces.board[x][y].isSelected = true;
                chessAcces.displayAllMovment();
            }
            //chessAcces.board[y][x].isSelected = true;
            
            chessAcces.updateBoardHTML();
        });
    }
    displayMovment(x,y){
        let chessAcces = this;
        let caseTarget = this.board[x][y];
        let movments = caseTarget.getAllMovment();
        movments.forEach(function(movment){   
            try{
                //console.log(movment[0]+' '+movment[1]);
                let caseMovment = chessAcces.board[movment[0]][movment[1]];
                caseMovment.isMoveAvaible = true;
            }catch(e){
                //console.log(e);
            }

        });
        //console.log(movments);
    }
    displayAllMovment(){
        let chessAcces = this;
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(this.board[i][j].isSelected == true){
                    chessAcces.displayMovment(i,j);
                }
            }
        }
    }
    resetSelected(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.board[i][j].isSelected = false;
            }
        }
    }
    resetMoveAvaible(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.board[i][j].isMoveAvaible = false;
            }
        }
    }
    
    
}
