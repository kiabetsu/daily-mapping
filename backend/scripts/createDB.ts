import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const PG_HOST = process.env.PG_HOST || 'localhost';
const PG_PORT = parseInt(process.env.PG_PORT || '5432');
const PG_USER = process.env.PG_USER || 'postgres';
const PG_PASSWORD = process.env.PG_PASSWORD || '';
const PG_DB = process.env.PG_DB || 'daily_mapping';

const DB_CONFIG_TO_CREATE = {
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: 'postgres',
};

async function createDB() {
  const client = new Client(DB_CONFIG_TO_CREATE);

  try {
    await client.connect();
    console.log('✅ Connect to postgres');

    const dbIsExist = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [PG_DB]);

    if (dbIsExist.rowCount === 0) {
      await client.query(`CREATE DATABASE "${PG_DB}"`);
      console.log(`✅ DB "${PG_DB}" created!`);
    } else {
      console.log(`ℹ️ DB "${PG_DB}" already exists`);
    }
  } catch (e) {
    console.error('❌ Ошибка: ', e);
  } finally {
    await client.end();
  }
}

createDB();
