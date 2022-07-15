import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.HOTDOG);
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.addSauces(new Sauce('Mostarda'));
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.BURGER);
        this.builder.setBread(Bread.HAMBURGUER);
        this.builder.setProtein(Protein.BURGER);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.addSauces(new Sauce('Ketchup'));
        this.builder.addSauces(new Sauce('Maionese'));
    }
}