import { createRealmContext } from "@realm/react";
import Realm, { index } from "realm";
import { ObjectId } from "bson";


export class Task extends Realm.Object {
  
  static schema = {
    name: 'Task',
    primaryKey : '_id',
    properties: {
      title: { type: 'string', indexed: true },
      description: { type: 'string' },
      is_Mark_As_Done: { type: 'bool' },
      _id: { type: 'objectId'} 
    },
  };
 
}


export const config = {
  schema: [Task],
  schemaVersion: 7,
};

const { RealmProvider } = createRealmContext(config)