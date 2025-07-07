const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://shahrajesh2113:ejIZpwETDPkYo29r@namastenode.nbk2lth.mongodb.net/";

// Need to add ip to access else this will not work

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");
  //   console.log(client);

  const db = client.db(dbName);
  const collection = db.collection("User");
  const result = await collection.find({}).toArray();
  console.log(result);

  //   const newUser = {
  //     firstName: "John1",
  //     lastName: "Doe2",
  //     age: 30,
  //     email: "abc@123.com",
  //   };

  //   await collection.insertOne(newUser);
  //   const updatedResult = await collection.find({}).toArray();
  //   console.log(updatedResult);

  const countResult = await collection.countDocuments();
  console.log("Total documents in collection:", countResult);

  const searchResult = await collection.find({ firstName: "John" }).toArray();
  console.log("Search result for firstName 'John':", searchResult);
  return "done";
}

console.log("Starting MongoDB connection...");
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
