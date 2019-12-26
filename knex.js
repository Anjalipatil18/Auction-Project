const knex = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Anjali2018@',
        database: 'Auction_Project'
    }
}

const knex = require('knex');

insertData=(data)=>{
    return knex('Students').insert(data)
};

select = (user_data)=>{
    return knex.select("*").from("Students")
}
module.exports={insertData,select}