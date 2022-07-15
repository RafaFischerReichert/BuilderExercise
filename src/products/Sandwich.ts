import SanduicheType from "../components/SanduicheType"
import Bread from "../components/Bread"
import Protein from "../components/Protein"
import Salad from "../components/Salad"
import Sauce from "../components/Sauce"

export default class Sandwich {
    private _sanduicheType : SanduicheType;
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauces : Sauce[] = [];

    get sanduicheType():SanduicheType{
        return this._sanduicheType;
    }
    
    set sanduicheType(type: SanduicheType){
        this._sanduicheType = type;
    }

    get bread():Bread{
        return this._bread;
    }

    set bread(bread:Bread){
        this._bread = bread
    }

    get protein():Protein{
        return this._protein;
    }

    set protein(protein:Protein){
        this._protein = protein;
    }

    get salad():Salad{
        return this._salad;
    }

    set salad(salad:Salad){
        this._salad = salad;
    }

    addSauce(sauce: Sauce){
        this._sauces.push(sauce)
    }

    clearSauces() : void {
        this._sauces.splice(0);
    }

    get sauces() : Sauce[]{
        return this._sauces;
    }

    get sauceNumber() : number{
        return this._sauces.length;
    }
}