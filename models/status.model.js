const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statusSchema = new Schema(
  {
    username: { type: String, required: true },
    activities: [
      {
        description: { type: String, required: true },
        duration: { type: Number, required: true },
      },
    ],
    msg: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
