var faker = require('faker');
const invoices = (items) => {
  let invoices = [];
  for (let i = 0; i < items; i++) {
    invoices.push({
      id: faker.random.uuid(),
      num: faker.random.alphaNumeric(7),
      issuer_tax_number: faker.random.alphaNumeric(7),
      issuer_name: faker.company.companyName(),
      debtor_tax_number: faker.random.alphaNumeric(7),
      debtor_name: faker.company.companyName(),
      issue_date: faker.date.between(2017, '1/7/2018'),
      amount_total: parseFloat(faker.finance.amount(500000, 10000000)),
      due_days:faker.random.number(30, 120),
    })
  }
  return invoices;

};


module.exports = invoices;
