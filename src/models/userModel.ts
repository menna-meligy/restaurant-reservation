import { DataTypes } from "sequelize";
import sequelize from "../config/config";

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default User;
