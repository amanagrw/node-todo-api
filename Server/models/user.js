var mongoose = require("mongoose");

var User = mongoose.model("Users", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// var user1 = new user({
//   email: "amanagr.1597@gmail.com"
// });

// user1.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log("Unable to add User Info", e);
//   }
// );

module.exports = { User };
