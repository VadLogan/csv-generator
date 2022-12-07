const {faker} = require('@faker-js/faker')
const { randomDate, parserCore, getDefaultLogin, defaultEmail } = require('./core')

// export enum FeedActions {
//   // eslint-disable-next-line no-unused-vars
//   Create = 'A',
//   // eslint-disable-next-line no-unused-vars
//   Update = 'C',
//   // eslint-disable-next-line no-unused-vars
//   Delete = 'T',
// }

const headers = ['T', 'EMPLOYEE_FIRST_NAME', 'EMPLOYEE_LAST_NAME','EMPLOYEE_NUMBER', 'EMAIL_ADDRESS', 'LAST_DATE_OF_HIRE', 'JOB_CODE', 'ORG_LEVEL_2', 'ORG_LEVEL_1', 'GENERAL_MANAGER']

const contentItemFn = (_, index)=>(
  {
    T: 'A', // create
    EMPLOYEE_FIRST_NAME: faker.name.firstName(),
    EMPLOYEE_LAST_NAME: faker.name.lastName(),
    EMPLOYEE_NUMBER: getDefaultLogin(index),
    EMAIL_ADDRESS:  defaultEmail,
    LAST_DATE_OF_HIRE: randomDate(),
    JOB_CODE: '9876', 
    ORG_LEVEL_2: "t2",
    ORG_LEVEL_1: "t1", 
    GENERAL_MANAGER: ''
 })

parserCore(headers, 'olympia', contentItemFn)
