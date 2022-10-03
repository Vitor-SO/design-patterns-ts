import  IImpostoStrategy  from './IImpostoStrategy';
export default class PedidoVenda {
    private strategy: IImpostoStrategy;

    constructor(strategy: IImpostoStrategy ){
      this.strategy = strategy;
    }


    efetuarVenda():void{
      this.strategy.calcularImposto()
    }
}