class Knight{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "knight";
        this.image = new Image();
        this.image.src = "public/img/pawns/knight_" + color + ".png";
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
    setSelected(isSelected){
        this.isSelected = isSelected;
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    moveUpLeft(){
        this.x = this.x - 2;
        this.y = this.y - 1;
    }
    moveUpRight(){
        this.x = this.x + 2;
        this.y = this.y - 1;
    }
    moveDownLeft(){
        this.x = this.x - 2;
        this.y = this.y + 1;
    }
    moveDownRight(){
        this.x = this.x + 2;
        this.y = this.y + 1;
    }
    moveRightUp(){
        this.x = this.x + 1;
        this.y = this.y - 2;
    }
    moveRightDown(){
        this.x = this.x + 1;
        this.y = this.y + 2;
    }
    moveLeftUp(){
        this.x = this.x - 1;
        this.y = this.y - 2;
    }
    moveLeftDown(){
        this.x = this.x - 1;
        this.y = this.y + 2;
    }

    getmoveUpLeft(){
        return [this.x - 2, this.y - 1];
    }
    getmoveUpRight(){
        return [this.x + 2, this.y - 1];
    }
    getmoveDownLeft(){
        return [this.x - 2, this.y + 1];
    }
    getmoveDownRight(){
        return [this.x + 2, this.y + 1];
    }
    getmoveLeftUp(){
        return [this.x - 1, this.y - 2];
    }
    getmoveLeftDown(){
        return [this.x - 1, this.y + 2];
    }
    getmoveRightUp(){
        return [this.x + 1, this.y - 2];
    }
    getmoveRightDown(){
        return [this.x + 1, this.y + 2];
    }
    
    getAllMovment(){
        let allMove = [];
        allMove.push(this.getmoveUpLeft());
        allMove.push(this.getmoveUpRight());
        allMove.push(this.getmoveDownLeft());
        allMove.push(this.getmoveDownRight());
        allMove.push(this.getmoveRightUp());
        allMove.push(this.getmoveRightDown());
        allMove.push(this.getmoveLeftUp());
        allMove.push(this.getmoveLeftDown());
    
        return allMove;
    }
}