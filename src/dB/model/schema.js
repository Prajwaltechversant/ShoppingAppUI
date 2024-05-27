import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
        name:'users',
        columns:[
            {name:'username', type:'string'},
            {name:'email', type:'string'},
            {name:'mobile', type:'number'},
            {name:'address', type:'string'},
            {name:'country', type:'string'},
            {name:'state', type:'string'},
            {name:'password', type:'string'}
        ]
    })
  ]
})