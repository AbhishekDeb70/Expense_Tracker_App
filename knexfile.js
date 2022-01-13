module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'expense_tracker',
      user:     'root',
      password: 'R@ils'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
  },
};
