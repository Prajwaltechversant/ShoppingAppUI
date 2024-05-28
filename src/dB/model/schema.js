import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 5,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        { name: 'username', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'mobile', type: 'number' },
        { name: 'address', type: 'string' },
        { name: 'country', type: 'string' },
        { name: 'state', type: 'string' },
        { name: 'password', type: 'string' },
        { name: 'name', type: 'string' },
      ]
    }),
    tableSchema({
      name: 'tasks',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'is_MarkAsDone', type: 'boolean' },
        {name:'created_at', type:'number'},
        {name:'updated_at', type:'number'}
      ]
    }),
    
  ]
})

