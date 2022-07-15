import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private _sanduiche = new Sandwich();
    reset(): void {
        this._sanduiche = new Sandwich();
    }
    getSanduiche(): Sandwich {
        return this._sanduiche;
    }
    setSanduicheType(type: SanduicheType) {
        this._sanduiche.sanduicheType = type;
    }
    setBread(bread: Bread) {
        this._sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this._sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this._sanduiche.salad = salad;
    }
    addSauces(sauce: Sauce) {
        this._sanduiche.addSauce(sauce);
    }

}