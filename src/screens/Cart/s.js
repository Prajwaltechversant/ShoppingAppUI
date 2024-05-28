const arr = [
    {
        name: 'a',
        created_at: 1,
        updated_at: 2
    },
    {
        name: 'b',

        created_at: 2,
        updated_at: 3
    },
    {
        name: 'c',

        created_at: 3,
        updated_at: 4
    },
    {
        name: 'd',

        created_at: 1,
        updated_at: 2
    },
    {
        name: 'f',

        created_at: 1,
        updated_at: 5
    },{
        name:'g',
        created_at:5,
        updated_at:1
    }
]

console.log(arr.sort((a, b) => b.updated_at && a.created_at - a.updated_at && b.created_at))