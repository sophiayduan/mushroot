import mysql from 'mysql2/promise';

async function initDb() {
  const connection = await mysql.createConnection({
    host: 'localhost', user: 'root', database: 'test_db'
  });

  const sql = `
    CREATE TABLE IF NOT EXISTS tests_db (
      id INT AUTO_INCREMENT PRIMARY KEY,
      year INT NOT NULL,
      teacher_name VARCHAR(255) NOT NULL,
      course VARCHAR(255) NOT NULL,
      unit VARCHAR(255) NOT NULL,
      pdf MEDIUMBLOB NOT NULL,
      other_tags VARCHAT(255)
    )
  `;
  await connection.query(sql);
  console.log("Table created");
}


