class Queen{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "queen";
        this.image = new Image();
        this.image.src = "public/img/pawns/queen_" + color + ".png";
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

    getMoveUpLeft(nb){
        return [this.x - nb, this.y - nb];
    }
    getMoveUpRight(nb){
        return [this.x + nb, this.y - nb];
    }
    getMoveDownLeft(nb){
        return [this.x - nb, this.y + nb];
    }
    getMoveDownRight(nb){
        return [this.x + nb, this.y + nb];
    }
    getMoveUp(nb){
        return [this.x, this.y - nb];
    }
    getMoveDown(nb){
        return [this.x, this.y + nb];
    }
    getMoveLeft(nb){
        return [this.x - nb, this.y];
    }
    getMoveRight(nb){
        return [this.x + nb, this.y];
    }
    
    getAllMovment(){
        let allMove = [];
        for(let i = 1; i < 8; i++){
            allMove.push(this.getMoveUpLeft(i));
            allMove.push(this.getMoveUpRight(i));
            allMove.push(this.getMoveDownLeft(i));
            allMove.push(this.getMoveDownRight(i));
            allMove.push(this.getMoveUp(i));
            allMove.push(this.getMoveDown(i));
            allMove.push(this.getMoveLeft(i));
            allMove.push(this.getMoveRight(i));
        }
        return allMove;
    }
}