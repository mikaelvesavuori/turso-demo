import { writeFileSync } from 'fs';

export function write(fileName, data) {
  writeFileSync(fileName, data);
}