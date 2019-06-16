const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose=require('mongoose');
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./api/employeeApi'));





//dbconfig
const db = require('./config/database')
// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true
})
    .then(() => console.log(' Connected...'))
    .catch(err => console.log(err));



    const port=3000;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server started on port ${port}`);

    }
});