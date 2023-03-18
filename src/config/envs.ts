import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const currentEnvs = dotenv.config();
dotenvExpand.expand(currentEnvs);