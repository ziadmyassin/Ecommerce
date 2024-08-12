import mongoose from "mongoose";

const connectionDb = async () => {
  return await mongoose
    .connect(process.env.online_db_onnection)
    .then(() => {
      console.log("DataBase connected");
    })
    .catch((err) => {
      console.log({ msg: "catch error in DataBase connecting", err });
    });
};
export default connectionDb;
