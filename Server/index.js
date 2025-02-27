require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userModel = require('./models/user');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true
}));

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("The server is working well!");
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is incorrect!");
                }
            } else {
                res.json("No record existed, create a new account.");
            }
        });
});

app.post('/user', (req, res) => {
    userModel.create(req.body)
        .then(User => res.json(User))
        .catch(err => res.json(err));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
