import parse from 'csv-parse';
import fs from 'fs';

const processFile = async () => {
    let records = []
    const parser = fs
    .createReadStream('src/db/finalQuotes.csv').pipe(parse({}));
    for await (const record of parser) {
      // Work with each record
      records.push(record)
    }
    return records
  }
  


  export default processFile;