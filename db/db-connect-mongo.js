const mongoose = require('mongoose')

const getConnection = async () => {
    try {
        const url = 'mongodb://'+process.env.USER +':'+ process.env.PASSWORD+'@ac-jyqsqvn-shard-00-00.ecuhkoo.mongodb.net:27017,ac-jyqsqvn-shard-00-01.ecuhkoo.mongodb.net:27017,ac-jyqsqvn-shard-00-02.ecuhkoo.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-j5j5jx-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log("Conexion Exitosa");

    } catch (error) {
        console.log(error);
    }
}


module.exports = { getConnection }