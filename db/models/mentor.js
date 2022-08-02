const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Meeting }) {
      this.hasMany(Meeting, { foreignKey: 'mentorId' });
    }
  }
  Mentor.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};
