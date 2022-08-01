const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Mentor, Student }) {
      this.belongsTo(Student, { foreignKey: 'studentId' });
      this.belongsTo(Mentor, { foreignKey: 'mentorId' });
    }
  }
  Meeting.init({
    studentId: DataTypes.INTEGER,
    mentorId: DataTypes.INTEGER,
    beginTime: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Meeting',
  });
  return Meeting;
};
