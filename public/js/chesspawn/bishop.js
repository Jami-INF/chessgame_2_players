class Bishop{
    constructor(color, x, y){
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = "bishop";
        this.image = new Image();
        this.image.src = "public/img/pawns/bishop_" + color + ".png";
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

    getmoveUpLeft(nb){
        return [this.x + nb, this.y - nb];
    }
    getmoveUpRight(nb){
        return [this.x + nb, this.y + nb];
    }
    getmoveDownLeft(nb){
        return [this.x - nb, this.y + nb];
    }
    getmoveDownRight(nb){
        return [this.x - nb, this.y - nb];
    }

    getAllMovment(){
        let allMove = [];
        for(let i = 1; i < 8; i++){
            allMove.push(this.getmoveUpLeft(i));
            allMove.push(this.getmoveUpRight(i));
            allMove.push(this.getmoveDownLeft(i));
            allMove.push(this.getmoveDownRight(i));
        }
        return allMove;
    }

}