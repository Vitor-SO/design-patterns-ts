export default abstract class DataBase{
  name: string;

  constructor(){
    this.name = ''
  }

  readonly TemplateEfetuarConsulta = async ():Promise<void>=>{
    this.name = await this.detalheEspecificoMYSQL();
    this.name = await this.detalheEspecificoPostgresql();
  }

  protected abstract detalheEspecificoMYSQL():Promise<string>;
  protected abstract detalheEspecificoPostgresql():Promise<string>;
}


abstract class BDMYSQL extends DataBase{
   async detalheEspecificoMYSQL():Promise<string>{
    return ''
  }
}

abstract class BDPostgreSQL extends DataBase{
  async detalheEspecificoPostgresql():Promise<string>{
   return ''
 }
}
