class Rook{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "rook";
        this.image = new Image();
        this.image.src = "public/img/pawns/rook_" + color + ".png";
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

    getmoveUp(nb){
        return [this.x, this.y - nb];
    }
    getmoveDown(nb){
        return [this.x, this.y + nb];
    }
    getmoveLeft(nb){
        return [this.x - nb, this.y];
    }
    getmoveRight(nb){
        return [this.x + nb, this.y];
    }
    getAllMovment(){
        let allMove = [];
        for(var i = 1; i < 8; i++){
            allMove.push(this.getmoveUp(i));
            allMove.push(this.getmoveDown(i));
            allMove.push(this.getmoveLeft(i));
            allMove.push(this.getmoveRight(i));
        }
        return allMove;
    }
}