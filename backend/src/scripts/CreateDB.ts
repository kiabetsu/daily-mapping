import { Client } from 'pg';
import { hash } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const PG_HOST = process.env.PG_HOST || 'localhost';
const PG_PORT = parseInt(process.env.PG_PORT || '5432');
const PG_USER = process.env.PG_USER || 'postgres';
const PG_PASSWORD = process.env.PG_PASSWORD || '';
const PG_DB = process.env.PG_DB;

const DB_CONFIG_TO_CREATE = {
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: 'postgres',
};

const DB_CONFIG_TO_SEED = {
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DB,
};

async function createDB() {
  const client = new Client(DB_CONFIG_TO_CREATE);

  try {
    await client.connect();
    console.log('✅ Connect to postgres');

    const dbIsExist = await client.query('SELECT * FROM pg_database WHERE name = $1', [PG_DB]);

    if (dbIsExist.rowCount === 0) {
      await client.query('CREATE DATABASE $1', [PG_DB]);
      console.log('✅ DB created!');
    } else {
      console.log('ℹ️ DB already created');
    }
  } catch (e) {
    console.error('❌ Ошибка: ', e);
  } finally {
    client.end();
  }
}

async function createdTables() {
  const client = new Client(DB_CONFIG_TO_SEED);

  try {
    await client.connect();
    console.log('✅ Connect to postgres');

    await client.query(`
      CREATE TABLE IF NOT EXIST users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        password VARCHAR(100) NOT NULL
      )
    `);

    await client.query(`
      CREATED TABLE IF NOT EXIST workspaces (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(1000)
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXIST user_workspace(
        user_id NUMBER NOT NULL,
        workspace_id NUMBER NOT NULL
      )
    `);

    await client.query(`
      CREATED TABLE IF NOT EXIST tasks (
        id SERIAL PRIMARY KEY,
        workspace_id NUMBER NOT NULL,
        name VARCHAR(100) NOT NULL,
        status VARCHAR(100) NOT NULL,
        description VARCHAR(1000),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP
      )
    `);
  } catch (e) {
    console.error('❌ Ошибка: ', e);
  } finally {
    client.end();
  }
}

async function seedDB() {
  const client = new Client(DB_CONFIG_TO_SEED);
  const hashPass = hash('pass', 3);

  const workspaces = [
    {
      name: 'Client Project',
      description: 'create something important',
    },
    {
      name: 'Finstak Website',
      description: 'make new amazing website',
    },
    {
      name: 'Habit Tracker',
      description: 'for improving yourself',
    },
  ];

  try {
    await client.connect();

    await client.query(
      `
      INSERT INTO user (username, email, created_at, password)
      VALUES ('user', 'test@gmail.com', NOW(), $1)
      `,
      [hashPass],
    );

    for (const workspace of workspaces) {
      await client.query(
        `
        INSERT INTO workspaces (name, description)
        VALUES ($1, $2)
        `,
        [workspace.name, workspace.description],
      );
    }
  } catch (e) {
    console.error('❌ Ошибка: ', e);
  } finally {
    client.end();
  }
}
