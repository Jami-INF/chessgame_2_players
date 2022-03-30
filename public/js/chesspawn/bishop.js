class Bishop{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "bishop";
        this.image = new Image();
        this.image.src = "public/img/pawns/bishop_" + color + ".png";
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
    moveUpLeft(nb){
        this.x = this.x + nb;
        this.y = this.y - nb;
    }
    moveUpRight(nb){
        this.x = this.x + nb;
        this.y = this.y + nb;
    }
    moveDownLeft(nb){
        this.x = this.x - nb;
        this.y = this.y + nb;
    }
    moveDownRight(nb){
        this.x = this.x - nb;
        this.y = this.y - nb;
    }
}