const { Pool } = require('pg');
const { POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_HOST } = process.env;

const dbClient = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: 5432,
    database: POSTGRES_DB
});
