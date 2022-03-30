class Rook{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "rook";
        this.image = new Image();
        this.image.src = "public/img/pawns/rook_" + color + ".png";
        this.url = "public/img/pawns/rook_" + this.color + ".png";
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
}