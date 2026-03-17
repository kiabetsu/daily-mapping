import { Client } from 'pg';
import { hash } from 'bcrypt';
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

async function seedDB() {
  const client = new Client(DB_CONFIG_TO_SEED);
  const hashPass = await hash('pass', 3);

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
    console.log('✅ Connected to DB');

    const userCheck = await client.query('SELECT id FROM users WHERE username = $1', ['tester']);

    let userId: number;
    if (userCheck.rowCount === 0) {
      const result = await client.query(
        `INSERT INTO users (username, email, created_at, password)
         VALUES ('tester', 'test@gmail.com', NOW(), $1)
         RETURNING id`,
        [hashPass],
      );
      userId = result.rows[0].id;
      console.log(`✅ Создан пользователь tester (ID: ${userId})`);
    } else {
      userId = userCheck.rows[0].id;
      console.log(`ℹ️ Пользователь tester уже существует (ID: ${userId})`);
    }

    for (const [index, workspace] of workspaces.entries()) {
      const wsCheck = await client.query('SELECT id FROM workspaces WHERE name = $1', [
        workspace.name,
      ]);

      if (wsCheck.rowCount === 0) {
        const result = await client.query(
          `INSERT INTO workspaces (name, description)
           VALUES ($1, $2) RETURNING id`,
          [workspace.name, workspace.description],
        );
        console.log(`✅ Создан workspace "${workspace.name}" (ID: ${result.rows[0].id})`);
      } else {
        console.log(`ℹ️ Workspace "${workspace.name}" уже существует`);
      }
    }

    for (let i = 1; i <= 3; i++) {
      const linkCheck = await client.query(
        'SELECT 1 FROM user_workspace WHERE user_id = $1 AND workspace_id = $2',
        [userId, i],
      );

      if (linkCheck.rowCount === 0) {
        await client.query('INSERT INTO user_workspace (user_id, workspace_id) VALUES ($1, $2)', [
          userId,
          i,
        ]);
        console.log(`✅ Связь user(${userId}) ↔ workspace(${i})`);
      }
    }

    const tasksData = [
      [1, 'Design wireframes', 'in_progress', 'Create initial wireframes...'],
      [1, 'Client meeting prep', 'todo', 'Prepare presentation materials...'],
      [1, 'Backend API endpoints', 'done', 'Implemented authentication...'],
      [1, 'Mobile responsiveness', 'todo', 'Make design responsive...'],

      [2, 'Homepage hero section', 'in_progress', 'Design and code hero section...'],
      [2, 'Payment integration', 'todo', 'Integrate Stripe checkout...'],
      [2, 'SEO meta tags', 'done', 'Added OpenGraph tags...'],
      [2, 'Performance optimization', 'todo', 'Lazy load images...'],

      [3, 'Habit completion API', 'in_progress', 'Create POST /habits/:id/complete...'],
      [3, 'Calendar heatmap view', 'todo', 'Implement GitHub-style heatmap...'],
      [3, 'Habit recommendation engine', 'done', 'Added ML model...'],
      [3, 'Push notifications', 'todo', 'Setup Firebase Cloud Messaging...'],
    ];

    for (const [workspaceId, name, status, description] of tasksData) {
      const taskCheck = await client.query(
        'SELECT id FROM tasks WHERE workspace_id = $1 AND name = $2',
        [workspaceId, name],
      );

      if (taskCheck.rowCount === 0) {
        await client.query(
          `INSERT INTO tasks (workspace_id, name, status, description, created_at)
           VALUES ($1, $2, $3, $4, NOW())`,
          [workspaceId, name, status, description],
        );
        console.log(`✅ Задача "${name}" добавлена`);
      }
    }

    console.log('🎉 ✅ Seed завершён! База готова для разработки');
    console.log(`👤 Пользователь: tester (ID: ${userId})`);
    console.log('🏢 3 workspace + 12 задач');
  } catch (e) {
    console.error('❌ Ошибка seed: ', e);
  } finally {
    client.end();
  }
}

seedDB().finally(() => process.exit(0));
