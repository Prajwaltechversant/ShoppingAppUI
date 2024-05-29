import { createRealmContext } from "@realm/react";
import Realm from "realm";
import { BSON } from "realm";
export class Task extends Realm.Object {

     _id =new BSON.ObjectId()
    static schema = {
      name: 'Task',
      properties: {
        title: {type: 'string', indexed: true},
        description:{type:'string'},
        is_Mark_As_Done:{type:'bool'},
        _id:{type:'objectId'}
      },
    };
  }
  export const config = {
    schema: [Task],
    schemaVersion: 3,
  };


  const {RealmProvider} = createRealmContext(config);

