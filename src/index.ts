import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director"
import Sandwich from "./products/Sandwich";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
let hotdog : Sandwich = builder.getSanduiche();
console.log("Criando um sanduíche!");
console.log(`Tipo: ${hotdog.sanduicheType}`);
console.log(`Proteína: ${hotdog.protein}`);

builder.reset();

director.constructXSalada();
let xis : Sandwich = builder.getSanduiche();
console.log("Criando um sanduíche!");
console.log(`Tipo: ${xis.sanduicheType}`);
console.log(`Proteína: ${xis.protein}`);