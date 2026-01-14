
import { pool } from './db';

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT * FROM customers ORDER BY createdAt DESC');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    const { id, name, phone, email, totalDebt } = req.body;
    try {
      await pool.query(
        'INSERT INTO customers (id, name, phone, email, totalDebt) VALUES (?, ?, ?, ?, ?)',
        [id, name, phone, email, totalDebt]
      );
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
