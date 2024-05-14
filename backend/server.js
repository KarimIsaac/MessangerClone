import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/auth.routes.js";
import mongoDB from "./DB/mongoDB.js"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
dotenv.config();
app.use("/api/auth", routes)
app.use(express.json())
app.get('/',(req, res) => {
        res.send('Hello World');
    }
);


app.listen(PORT, () => {
    mongoDB();
    console.log(`Server is running on port ${PORT}`);
});