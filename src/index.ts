import ImpostoBrasil from "./Behevioural/Strategy/ImpostoBrasil";
import ImpostoCanada from "./Behevioural/Strategy/ImpostoCanada";
import ImpostoEUA from "./Behevioural/Strategy/ImpostoEUA";
import PedidoVenda from "./Behevioural/Strategy/PedidoVenda";
import BDMYSQL from "./Behevioural/TemplateMethod/BDMYSQL";
import DataBase from "./Behevioural/TemplateMethod/Ex_SqlDataBase";
import { MyClassicDataBase } from "./creational/Singleton/MyClassicDataBase";
import { validateEmail } from "./structural/Adapter/client";
import { EmailValidatorAdapter } from "./structural/Adapter/validation/email-validator-adapter";

console.log('Singleton')
const db = MyClassicDataBase.getInstance();

db.add({name: 'vitor'});
db.add({name: 'ana'});
db.remove(1)
db.show();

console.log('-----------------------------------------------------------------')

console.log('Adapter')
validateEmail(new EmailValidatorAdapter(), 'vitorsantoso134@gmail.com');
console.log('-----------------------------------------------------------------')


console.log('Template Method')

function clientCode(dataBase: DataBase) {
  dataBase.TemplateEfetuarConsulta()
}

clientCode(new BDMYSQL);
console.log('-----------------------------------------------------------------')

console.log('Strategy');

const contextEUA = new PedidoVenda(new ImpostoEUA())
contextEUA.efetuarVenda()

const contextBR = new PedidoVenda(new ImpostoBrasil())
contextBR.efetuarVenda()

const contextCAN = new PedidoVenda(new ImpostoCanada())
contextCAN.efetuarVenda()
console.log('-----------------------------------------------------------------')

