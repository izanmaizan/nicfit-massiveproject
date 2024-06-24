import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const start = async function () {
  try {
    await db.getConnection();
    console.log("Database Connected");
  } catch (e) {
    console.log(e);
  }
};

// Configure CORS
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      // "http://localhost:5173",
      "https://nicfit.vercel.app",
      // "http://nicfit.my.id",
      // "https://nicfit.my.id", // Tambahkan juga versi HTTPS jika ada
    ];
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: "Content-Type, Authorization",
};

// Use CORS for all routes
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Preflight requests

app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route-specific CORS (not necessary if you use the global one)
app.use("/users", cors(corsOptions));

app.use(router);

start();

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

export default app;
