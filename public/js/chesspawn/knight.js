class Knight{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "knight";
        this.image = new Image();
        this.image.src = "public/img/pawns/knight_" + color + ".png";
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
}