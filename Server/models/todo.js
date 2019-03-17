var mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  Completed: {
    type: Boolean,
    default: false
  },
  CompletedAt: {
    type: Number,
    default: null
  }
});

// var otherTodo = new todo({
//   text: "Don't be lazy",
//   Completed: false,
//   CompletedAt: 120
// });

// otherTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => {
//     console.log("Unable to save todo", e);
//   }
// );

module.exports = { Todo };
