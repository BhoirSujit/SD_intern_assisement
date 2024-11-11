import { config } from "dotenv";
config();

import env from './src/utils/validate'
import app from "./src/app"
import { testConnection } from "./src/db/pgdb";


testConnection();

app.listen(env.PORT, () => {
    console.log("backend is runnig on port: ", env.PORT);
});

