// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to the MongoDB server");
  }
  console.log("Connected to database");
  const db = client.db("TodoApp");

  //deleteMany
  //   db.collection("Todos")
  //     .deleteMany({ text: "Work Hard" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //deleteOne
  //   db.collection("Todos")
  //     .deleteOne({ text: "Work Hard" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //   findOneAndDelete
  //   db.collection("Todos")
  //     .findOneAndDelete({ Completed: false })
  //     .then(result => {
  //       console.log(result);
  //     });

  //Task : Deleting by property
  //   db.collection("Users")
  //     .deleteMany({ Name: "Aman Agrawal" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //Task : Deleting By ID
  db.collection("Users")
    .findOneAndDelete({ _id: new ObjectId("5c8e1f971cc5e640cc17e1cb") })
    .then(result => {
      console.log(result);
    });

  client.close();
});
