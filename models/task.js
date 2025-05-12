module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
