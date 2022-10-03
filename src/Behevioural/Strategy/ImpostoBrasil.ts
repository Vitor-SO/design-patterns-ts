import IImpostoStrategy from "./IImpostoStrategy";

export default class ImpostoBrasil implements IImpostoStrategy{
  calcularImposto(): void{
    console.log("imposto Brasil")
  }
}