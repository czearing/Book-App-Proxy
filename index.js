import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import * as dotenv from "dotenv";
// import rateLimit from "express-rate-limit";

dotenv.config();

const PORT = process.env.port || 5000;

const app = express();

// Rate Limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000,
//   max: 5,
// });
// app.use(limiter);
app.set("trust proxy", 1);

// Enable cors
app.use(cors());

// Routes
app.use("/api", router);

// Static
app.use(express.static("public"));

// Start on port
app.listen(PORT, () => console.log(`Running on ${PORT}`));

export default app;
