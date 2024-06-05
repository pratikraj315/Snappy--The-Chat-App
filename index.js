const express = require("express");
const cors = require("cors");
const mongoose =  require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

require("dotenv").config();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

mongoose.connect("mongodb+srv://pratikraj2401:g8KMxDuV6dAtX8Jm@cluster0.peulvgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    
   
})
.then(() => {
    console.log("DB Connection Successfull");
})
.catch((err) => {
    console.log(err.message);
});


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${process.env.PORT}`);
});

///////////////

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");

// const app = express();

// require("dotenv").config();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", userRoutes);

// // MongoDB Connection
// const mongoURI = process.env.MONGO_URI || "mongodb+srv://pratikraj2401:9431151562rj@cluster0.peulvgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,  // Adjust the timeout as needed
//     socketTimeoutMS: 45000,         // Adjust the timeout as needed
// })
// .then(() => {
//     console.log("DB Connection Successful");
// })
// .catch((err) => {
//     console.error("DB Connection Error:", err.message);
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// const server = app.listen(PORT, () => {
//     console.log(`Server is running on Port ${PORT}`);
// });


///////

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/userRoutes");

// const app = express();

// require("dotenv").config();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", userRoutes);

// // MongoDB Connection
// const mongoURI = "mongodb+srv://pratikraj2401:Pratik%406204@cluster0.peulvgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 10000,  // Increased timeout
//     socketTimeoutMS: 45000,           // Increased timeout
//                // For index creation
//               // For findOneAndUpdate() and other functions
// })
// .then(() => {
//     console.log("DB Connection Successful");
// })
// .catch((err) => {
//     console.error("DB Connection Error:", err.message);
// });

// // Enable Mongoose debug mode
// mongoose.set('debug', true);

// // Start the server
// const PORT = process.env.PORT || 5000;
// const server = app.listen(PORT, () => {
//     console.log(`Server is running on Port ${PORT}`);
// });
