// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to the MongoDB server");
  }
  console.log("Connected to database");

  const db = client.db("TodoApp");

  // db.collection("Todos")
  //   .find()
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to connect to the mongoDB server");
  //     }
  //   );

  db.collection("Todos")
    .find()
    .count()
    .then(
      count => {
        console.log(`Todos Count : ${count} `);
      },
      err => {
        console.log("Unable to connect to the mongoDB server");
      }
    );
  // client.close();
});
