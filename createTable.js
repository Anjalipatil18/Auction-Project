const knex =require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Anjali2018@',
        database: 'Auction_Project'
    }
})

knex.schema.createTable('Auction',(table) => {
    table.string('Name')
    table.integer('auction_id').unique()
    table.increments('bidder_id')
    table.float('bid_value')
})
    .then(() => {
        console.log("table created")
    })
    .catch((err) => { console.log(err); throw err })


