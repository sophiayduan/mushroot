import mysql from 'mysql2/promise';

async function initDb() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', // Must have superuser privileges
    password: 'root_password',
    database: 'mysql'
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


async function create_user(username, password){

  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', // Must have superuser privileges
    password: 'root_password',
    database: 'mysql'
  });
   try {
    // 2. Create User
    await connection.execute(
      `CREATE USER IF NOT EXISTS ?@% IDENTIFIED BY ?;`,
      [username, password]
    );
    console.log(`User ${username} created.`);

    // 3. Grant Permissions
    await connection.execute(
      `GRANT ALL PRIVILEGES ON *.* TO ?@% WITH GRANT OPTION;`,
      [username]
    );
    console.log(`Privileges granted to ${username}.`);

    // 4. Flush changes
    await connection.execute(`FLUSH PRIVILEGES;`);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await connection.end();
  }
}

