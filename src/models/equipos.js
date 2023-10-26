const { Schema, model } = require("mongoose");
const { text } = require("pdfkit");

const equiposSchema = new Schema(
  {
    equipo: { type: String, required: true },
    liga: { type: String, required: true },
    numerosdeestrellas: { type: Number, required: true },
    goles: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

  },
  {
    timestamps: true,
  }
);

module.exports = model("equipos", equiposSchema);
