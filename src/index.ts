import { MyClassicDataBase } from "./creational/Singleton/MyClassicDataBase";

const db = MyClassicDataBase.getInstance();

db.add({name: 'vitor'});
db.add({name: 'ana'});
db.remove(1)
db.show();