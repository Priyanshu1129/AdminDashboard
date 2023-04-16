import express  from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import salesRoutes from './routes/sales.js' 
import managementRoutes from './routes/management.js'
// import { dataUser, dataProduct ,dataProductStat , dataTransaction, dataOverallStat, dataAffiliateStat} from "./data/index.js";
// import OverallStat from "./models/OverallStat.js";
// import User  from "./model/User.js";
// import ProductStat from "./model/ProductStat.js";
// import Product from "./model/Product.js"; 
// import Transaction from "./model/Transaction.js";
// import OverallStat from "./model/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 9000

// mongoose.set('strictQuery', true);

app.use(express.json())
app.use(helmet())
// app.use(helmet.crossOriginEmbedderPolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

app.use("/general", generalRoutes)
app.use("/client", clientRoutes)
app.use("/sales" , salesRoutes)
app.use("/management", managementRoutes)


mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(PORT, () => { console.log(`server started started on port ${PORT}`)})
    console.log("connected successfully..")
    // OverallStat.insertMany(dataOverallStat)
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // AffiliateStat.insertMany(dataAffiliateStat)
}).catch((error)=>{
    console.log("Erro",error)
})
