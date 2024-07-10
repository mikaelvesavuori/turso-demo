import { createClient } from "@libsql/client";

const tableName = 'TODO';
const orgName = 'TODO';

const config = {
  url: `libsql://${tableName}-${orgName}.turso.io`,
  authToken: ``
}

export const turso = createClient(config);