const express = require("express")
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
const { query } = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = "mongodb+srv://lsburestaurant:HdISjgRmPLR0v4EF@myfirstdb.w4kvmll.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


export default client;