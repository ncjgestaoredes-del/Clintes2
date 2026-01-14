
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: mysql-albertocossa.alwaysdata.net,
  user: 430726,
  password: Acossa@824018,
  database: albertocossa_clientes,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// SQL Inicial para criar as tabelas no seu AlwaysData:
/*
CREATE TABLE IF NOT EXISTS customers (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(255),
  totalDebt DECIMAL(10, 2) DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS transactions (
  id VARCHAR(36) PRIMARY KEY,
  customerId VARCHAR(36),
  amount DECIMAL(10, 2),
  type ENUM('DEBT', 'PAYMENT'),
  description TEXT,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customerId) REFERENCES customers(id)
);
*/
