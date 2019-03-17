const MongoClient = require("mongodb").MongoClient;
//const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to the MongoDB server");
  }
  console.log("Connected to database");

  const db = client.db("TodoApp");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "Something to do",
  //       Completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to insert todo", err);
  //       }

  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection("Users").insertOne(
    {
      Name: "Aman Agrawal",
      Age: 22
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user info", err);
      }

      console.log(result.ops);
      //   console.log(result.ops[0]._id.getTimestamp());
    }
  );
  client.close();
});
