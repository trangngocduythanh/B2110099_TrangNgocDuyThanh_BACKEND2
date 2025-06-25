// Dinh nghia lop tro giup ket noi MongoDB

// lay thu vien MongoClient tu mongodb
const { MongoClient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;
