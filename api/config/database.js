module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ninjastore'),
      user: env('DATABASE_USERNAME', 'user'),
      password: env('DATABASE_PASSWORD', 'Cjay09322926010!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
