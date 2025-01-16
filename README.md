# t3iiw1-intro-to-mongoose

- Mongoose JS
mongosh - mongo shell
mongod - Mongo service daemon
mongos - sharding or clustering for mongodb

- Start MongoDB Server
brew services start mongodb-community@8.0

- Start MongoDB Server
sudo service mongod start
sudo service mongod status
sudo service mongod stop
sudo service mongod restart

- Connect to the database
1. Run the seed command: `npm run seed`
2. Open the MongoDB shell: `mongosh`
3. Show the list of databases: `show dbs`
4. Connect to a particular database: `use dbname`
5. `db.posts.find()`