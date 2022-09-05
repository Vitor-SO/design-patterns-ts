interface User {
  name: string;
}

export class MyClassicDataBase{

  private static instance: MyClassicDataBase | null = null;
  private users : User[] = []
  private constructor() {}

  public static  getInstance(): MyClassicDataBase {
    if(MyClassicDataBase.instance === null){
      MyClassicDataBase.instance = new MyClassicDataBase();
    }

    return MyClassicDataBase.instance;
  }

  add(user: User):void{
    this.users.push(user)
  } 

  remove(index: number):void{
    this.users.splice(index,1)
  }

  show():void{
    for(const user of this.users){
      console.log(user)
    }
  }
}


