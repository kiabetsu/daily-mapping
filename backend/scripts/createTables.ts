import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const PG_HOST = process.env.PG_HOST || 'localhost';
const PG_PORT = parseInt(process.env.PG_PORT || '5432');
const PG_USER = process.env.PG_USER || 'postgres';
const PG_PASSWORD = process.env.PG_PASSWORD || '';
const PG_DB = process.env.PG_DB;

const DB_CONFIG_TO_SEED = {
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DB,
};

async function createdTables() {
  const client = new Client(DB_CONFIG_TO_SEED);

  try {
    await client.connect();
    console.log('✅ Connect to postgres');

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        password VARCHAR(100) NOT NULL
      )
    `);

    await client.query(
      `
      CREATE TABLE IF NOT EXISTS tokens (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL
      )
      `,
    );

    await client.query(`
      CREATE TABLE IF NOT EXISTS workspaces (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(1000)
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS user_workspace(
        user_id INTEGER NOT NULL REFERENCES users(id),
        workspace_id INTEGER NOT NULL REFERENCES workspaces(id),
        PRIMARY KEY (user_id, workspace_id)
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        workspace_id INTEGER NOT NULL REFERENCES workspaces(id),
        name VARCHAR(100) NOT NULL,
        status VARCHAR(100) NOT NULL,
        description VARCHAR(1000),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP
      )
    `);

    console.log('✅ Tables created');
  } catch (e) {
    console.error('❌ Ошибка: ', e);
  } finally {
    client.end();
  }
}

createdTables();
