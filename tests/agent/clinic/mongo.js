const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://{{ mongo_endpoint }}:{{ mongo_port }}/";

const group = {
    resource : "/iot/json",
    apikey : "1234567890",
    type : "testType",
    service : "service",
    subservice : "/",
    '__v': 0
};


const device = {
    active : [ { "object_id" : "c", "name" : "count", "type" : "Integer" } ],
    subscriptions : [ ],
    creationDate : 'ISODate("2019-06-27T16:01:28.827Z")',
    id : "test",
    type : "testType",
    name : "testName",
    service : "service",
    subservice : "/",
    internalId : null,
    protocol : "PDI-IoTA-UltraLight",
    transport : "HTTP",
    polling : true,
    '__v': 0
};



MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    const dbase = db.db("iotagent");

    dbase.collection("devices").insertOne(device, function(err, res) {
      if (err) throw err;
      console.log("Device is inserted");
      db.close();
    });

    dbase.collection("groups").insertOne(group, function(err, res) {
      if (err) throw err;
      console.log("Group is inserted");
      db.close();
    });



});
