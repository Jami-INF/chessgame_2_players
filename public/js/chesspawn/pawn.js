class Pawn{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "pawn";
        this.image = new Image();
        this.image.src = "public/img/pawns/pawn" + color + ".png";
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
    firstMoveUp(){
        this.y = this.y - 2;
    }
    moveUp(){
        this.y = this.y - 1;
    }
}