class King{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "king";
        this.image = new Image();
        this.image.src = "public/img/pawns/king" + color + ".png";
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
    moveUp(nb){
        this.y = this.y - nb;
    }
    moveDown(nb){
        this.y = this.y + nb;
    }
    moveLeft(nb){
        this.x = this.x - nb;
    }
    moveRight(nb){
        this.x = this.x + nb;
    }
    moveUpLeft(nb){
        this.x = this.x - nb;
        this.y = this.y - nb;
    }
    moveUpRight(nb){
        this.x = this.x + nb;
        this.y = this.y - nb;
    }
    moveDownLeft(nb){
        this.x = this.x - nb;
        this.y = this.y + nb;
    }
    moveDownRight(nb){
        this.x = this.x + nb;
        this.y = this.y + nb;
    }
}