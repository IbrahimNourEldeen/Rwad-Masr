const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin123@cluster0.r18ef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client=new MongoClient(url);
const dbName='MyData'

const main=async()=>{
    await client.connect()
    console.log('connected successfully')
    const db = client.db(dbName);
    const collection = db.collection('users');

    await collection.insertOne({
        name:"hamed",
        gmail:'hamed@gmail.com',
        pass:"5465"
    })

    const findResult = await collection.find().toArray();
    console.log(findResult);
}
main()

