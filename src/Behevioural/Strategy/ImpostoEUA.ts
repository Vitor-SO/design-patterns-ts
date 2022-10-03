import IImpostoStrategy from "./IImpostoStrategy";

export default class ImpostoEUA implements IImpostoStrategy{
  calcularImposto(): void{
    console.log("imposto EUA")
  }
}