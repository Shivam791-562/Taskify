const db = require('../models');

module.exports = {
  Query: {
    tasks: () => db.Task.findAll(),
  },
  Mutation: {
    createTask: (_, { title }) => db.Task.create({ title }),
    toggleTask: async (_, { id }) => {
      const task = await db.Task.findByPk(id);
      if (!task) throw new Error('Task not found');
      task.completed = !task.completed;
      await task.save();
      return task;
    },
    deleteTask: async (_, { id }) => {
      const deleted = await db.Task.destroy({ where: { id } });
      return !!deleted;
    },
  }
};
