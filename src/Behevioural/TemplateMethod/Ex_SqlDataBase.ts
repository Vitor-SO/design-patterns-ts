export default abstract class DataBase{
  

  TemplateEfetuarConsulta = ():void=>{
    this.init();
     this.detalheEspecificoMYSQL();
     this.detalheEspecificoPostgresql();
  }

  init(): void {
    console.log('server init');
     
  }

  protected abstract detalheEspecificoMYSQL():void;
  protected abstract detalheEspecificoPostgresql():void;
}
