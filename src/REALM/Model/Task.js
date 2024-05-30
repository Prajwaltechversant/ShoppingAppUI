import { createRealmContext } from "@realm/react";
import Realm from "realm";
import { ObjectId } from 'bson';

export class Tasks extends Realm.Object {
  
  static schema = {
    name: 'Tasks',
    primaryKey: '_id',
    properties: {
      title: { type: 'string', indexed: true },
      description: { type: 'string' },
      is_Mark_As_Done: { type: 'bool' },
      _id: { type: 'objectId' } 
    },
  };
 
}

export const config = {
  schema: [Tasks],
  schemaVersion: 1
};

const { RealmProvider } = createRealmContext(config);
