import express from "express"
dotenv.config();
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/auth.routes.js";
import mongoDB from "./DB/mongoDB.js"
import messagesRoutes from "./routes/message.route.js"
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
}));

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", routes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes)

app.use(express.json())
app.get('/',(req, res) => {
        res.send('Hello World');
    }
);


app.listen(PORT, () => {
    mongoDB();
    console.log(`Server is running on port ${PORT}`);
});