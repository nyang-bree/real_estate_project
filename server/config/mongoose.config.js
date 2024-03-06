const mongoose = require('mongoose');
const MONGODB_URL=process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() =>console.log('Established a connection to the database'))
.catch((err) => console.log('something went wrong when connecting to the databae', err));
