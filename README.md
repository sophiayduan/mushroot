# mushroot

run ``npm install``

run ``npm run dev``


## How to set up the database

### Pre-req
- MySQL Driver
    - Mysql command line

### 1. Create database in Mysql command line

```SQL
CREATE DATABASE mushroot;
```
#### 1.1 If you run into issues with the columns

run
```SQL
ALTER TABLE tests ADD column_name datatype;
```

### 2. Setup .env file
(Make sure that the .gitignore has .env in it)
Make the .env in murshroot-backend (so it's on the same level asbuild.gradle, src, etc.) 
In the .env file have DB_PASSWORD=  with your password

### 3. To integrate with frontend
Make sure the backend is running somewhere (either on local or hosted)
Access the backend with 

