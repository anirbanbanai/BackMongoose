

import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
import config from "./app/config";
dotenv.config();
async function main() {
  try {
  mongoose.connect(config.MONGODB_URI as string);
 
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
