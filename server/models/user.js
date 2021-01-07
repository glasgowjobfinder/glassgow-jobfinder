'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: `Email is required`
        },
        isEmail: {
          args: true,
          msg: `email is invalid`
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: `Password is required`
        },
        len:{
          args: [6],
          msg: `Password character minimum is 6`
        }
      }
    },
    fullName: {
      type: DataTypes.STRING,
      notEmpty: {
        msg: `Name is required`
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};