export default class Sauce{
    constructor(private _saucetype : string){}

    get saucetype() : string{
        return this._saucetype;
    }

    set saucetype(type : string){
        this._saucetype = type;
    }
}