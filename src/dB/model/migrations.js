import { addColumns, createTable, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'users',
          columns: [
            { name: 'name', type: 'string' },
          ],
        }),
      ],
    },
    {
      toVersion: 3,
      steps: [
        createTable({
          name: 'tasks',
          columns: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'is_MarkAsDone', type: 'boolean' }
          ]
        })
      ]
    },
    // {
    //   toVersion: 3,
    //   steps: [
    //     addColumns({
    //       table: 'tasks',
    //       columns: [
    //         { name: 'title', type: 'string', isIndexed:true },
    //       ]
    //     })
    //   ]
    // }
    {
      toVersion:4,
      steps:[
        addColumns({
          table:'tasks',
          columns:[
            {name:'created_at', type:'number'}
          ]
        })
      ]
    },
    {
      toVersion:5,
      steps:[
        addColumns({
          table:'tasks',
          columns:[
            {name:'updated_at', type:'number'}
          ]
        })
      ]
    }
  ],

})