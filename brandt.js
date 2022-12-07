const {faker} = require('@faker-js/faker')
const { parserCore, getDefaultLogin, defaultEmail } = require('./core')


const headers = ['FIRSTNAME', 'LASTNAME','EMAIL', 'EMPLOYEE_ID', 'ROLE', 'JOBTITLE', 'PROPERTY', 'DEPARTMENT', 'OPERATION', 'TIMEZONE']

const contentItemFn = (_, index)=>({
  FIRSTNAME: faker.name.firstName(),
  LASTNAME: faker.name.lastName(),
  EMAIL: defaultEmail,
  EMPLOYEE_ID: getDefaultLogin(index),
  ROLE: 'user',
  JOBTITLE: 123,
  PROPERTY: 'BNG',
  DEPARTMENT: 'DEPARTMENT',
  OPERATION: 'A',
  TIMEZONE: '(GMT-07:00) Mountain Time (US & Canada)'
})


parserCore(headers,'brandt', contentItemFn)
