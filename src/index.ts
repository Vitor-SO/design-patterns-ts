import { MyClassicDataBase } from "./creational/Singleton/MyClassicDataBase";
import { validateEmail } from "./structural/Adapter/client";
import { EmailValidatorAdapter } from "./structural/Adapter/validation/email-validator-adapter";

const db = MyClassicDataBase.getInstance();

db.add({name: 'vitor'});
db.add({name: 'ana'});
db.remove(1)
db.show();


validateEmail(new EmailValidatorAdapter(), 'vitorsantoso134@gmail.com');
