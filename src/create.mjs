import { readFileSync } from 'fs';
import { turso } from './utils/turso.mjs';

const FILE_NAME = 'create-data.sql';

const statement = readFileSync(`${process.cwd()}/sql/${FILE_NAME}`, 'utf-8');
const response = await turso.execute(statement);

console.log(response);