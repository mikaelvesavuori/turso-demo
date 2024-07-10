import { statement } from './utils/statement.mjs';
import { write } from './utils/write.mjs';

const FILE_NAME = './sql/create-data.sql';
const STATEMENT_COUNT = 1000;

const statements = statement(STATEMENT_COUNT);
write(FILE_NAME, statements);