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
        this.y = this.y - 2;
    }
    moveUp(){
        this.y = this.y - 1;
    }
    getfirstMoveUp(){
        return [this.x, this.y - 2];
    }
    getMoveUp(){
        return [this.x, this.y - 1];
    }

    getAllMovment(){
        let allMove = [];
        allMove.push(this.getMoveUp());
        allMove.push(this.getfirstMoveUp());
        return allMove;
    }
}