class Pawn{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "pawn";
        this.image = new Image();
        this.image.src = "public/img/pawns/pawn_" + color + ".png";
        this.isSelected = false;
        this.isMoveAvaible = false;
    }
    getColor(){
        return this.color;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getName(){
        return this.name;
    }
    getImage(){
        return this.image;
    }
    setSelected(isSelected){
        this.isSelected = isSelected;
    }
    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
    setColor(color){
        this.color = color;
    }
    setImage(image){
        this.image = image;
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    firstMoveUp(){
        if(this.color == "white"){
            this.x = this.x - 2;
        }else{
            this.x = this.x + 2;
        }
    }
    moveUp(){
        if(this.color == "white"){
            this.x = this.x - 1;
        }else{
            this.x = this.x + 1;
        }
    }
    getfirstMoveUp(){
        if(this.color == "white"){
            return [this.x - 2, this.y];
        }else{
            return [this.x + 2, this.y];    
        }
    }
    getMoveUp(){
        if(this.color == "white"){
            return [this.x - 1, this.y];
        }else{
            return [this.x + 1, this.y];    
        }
    }

    getAllMovment(){
        let allMove = [];
        allMove.push(this.getMoveUp());
        allMove.push(this.getfirstMoveUp());
        return allMove;
    }
}