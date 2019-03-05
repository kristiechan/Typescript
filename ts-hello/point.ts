// Mark export for modules
export class Point {
    constructor(private _x : number, private _y : number ){
    }

    // This is properties
    get x(){
        return this._x;
    }
    set x(value:number){
        this._x = value;
    }
    
    public draw() {
        console.log('X:'+this._y+' , Y:'+this._y);
    }
}