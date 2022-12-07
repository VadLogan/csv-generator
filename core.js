const fs = require('fs')
const {join} = require('path')
const  { stringify } = require('csv-stringify/sync');

module.exports = {
  parserCore: (headers,fileName, contentItemFn) => {
    
    const content = Array(Number(process.env.ROWS_AMOUNT ?? 1)).fill(null).map(contentItemFn)
    const columns = headers.map(header => ({
      header,
      key: header,
    }));
    
    const output = stringify(
      content,
      {
        delimiter: ';',
        header: true,
        columns,
      }
    );
    
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    
    fs.writeFileSync(`${fileName}_${hours}:${minutes}:${seconds}.csv`, output);
  },
  randomDate() {
    const start = new Date(2012, 0, 1)
    const end = new Date()
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
  },
  getDefaultLogin:(index) => `OLGA_TEST_USER_${index}`,
  defaultEmail: 'olga.berezhnaya@dataart.com'
} 