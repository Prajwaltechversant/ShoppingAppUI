import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from './model/schema'
import migrations from './model/migrations'
import User from './model/User'
import Task from './model/Task'



const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: error => {
    console.log("dB error : ",error)
  }
})

const database = new Database({
  adapter,
  modelClasses: [
    User,
    Task
  ],
})

export default database;