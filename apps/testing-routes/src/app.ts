import * as express from 'express';
import router from './routes';

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router)
export default app
