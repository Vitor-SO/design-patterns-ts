import DataBase from './Ex_SqlDataBase'

export default class BDPostgreSQL extends DataBase{
  protected detalheEspecificoMYSQL(): void{
    console.log('select * from mysql = vitor');
    
  }
   
  protected detalheEspecificoPostgresql():void{
   console.log('select * from postgres = vitor');
    
 }
}