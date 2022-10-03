import IImpostoStrategy from "./IImpostoStrategy";

export default class ImpostoCanada implements IImpostoStrategy{
  calcularImposto(): void{
    console.log("imposto Canada")
  }
}