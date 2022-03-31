class King{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "king";
        this.image = new Image();
        this.image.src = "public/img/pawns/king_" + color + ".png";
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
    moveUp(){
        this.y = this.y - 1;
    }
    moveDown(){
        this.y = this.y + 1;
    }
    moveLeft(){
        this.x = this.x - 1;
    }
    moveRight(){
        this.x = this.x + 1;
    }
    moveUpLeft(){
        this.x = this.x - 1;
        this.y = this.y - 1;
    }
    moveUpRight(){
        this.x = this.x + 1;
        this.y = this.y - 1;
    }
    moveDownLeft(){
        this.x = this.x - 1;
        this.y = this.y + 1;
    }
    moveDownRight(){
        this.x = this.x + 1;
        this.y = this.y + 1;
    }

    getmoveUp(){
        return  [this.x, this.y - 1];
    }
    getmoveDown(){
        return [this.x, this.y + 1];
    }
    getmoveLeft(){
        return [this.x - 1, this.y];
    }
    getmoveRight(){
        return [this.x + 1, this.y];
    }

    getmoveUpLeft(){
        return [this.x -  1, this.y -  1];
    }
    getmoveUpRight(){
        return [this.x + 1, this.y -  1];
    }
    getmoveDownLeft(){
        return [this.x - 1, this.y +  1];
    }
    getmoveDownRight(){
        return [this.x + 1, this.y +  1];
    }

    getAllMovment(){
        let allMove = [];
        allMove.push(this.getmoveUp());
        allMove.push(this.getmoveDown());
        allMove.push(this.getmoveLeft());
        allMove.push(this.getmoveRight());
        allMove.push(this.getmoveUpLeft());
        allMove.push(this.getmoveUpRight());
        allMove.push(this.getmoveDownLeft());
        allMove.push(this.getmoveDownRight());
        
        return allMove;
    }
}