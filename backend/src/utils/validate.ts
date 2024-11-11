import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
    DB_URL: str(),
    PORT: port(),
})