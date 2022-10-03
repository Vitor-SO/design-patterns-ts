import DataBase from "./Ex_SqlDataBase";

export default class BDMYSQL extends DataBase{
  protected detalheEspecificoPostgresql(): void {
    console.log('select * from postgres = vitor');
     
  }
 
  protected  detalheEspecificoMYSQL():void{
   console.log('select * from mysql = vitor');
    
 }
}