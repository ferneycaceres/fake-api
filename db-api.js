var faker = require('faker');

const generateAgents = () => {
  let agents = [];
  let companies = [];
  let permissions = [];

  for (let id = 0; id < 100; id++){
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let branch = faker.random.word();
    let phone = faker.phone.phoneNumber();
    let email = faker.internet.email();
    let company = faker.company.companyName();
    let image = faker.image.avatar();

    agents.push({
      "id": id,
      "first_name": first_name,
      "last_name": last_name,
      "branch": branch,
      "phone": phone,
      "email": email,
      "company": company,
      "image": image,
      "permissions": [],
    });
  }

  for (let id = 0; id < 200; id ++){
    let agent_id = Math.floor(Math.random() * 101);
    let name = faker.company.companyName()
    let suffix = faker.company.companySuffix()
    let address = faker.address.streetAddress()
    let phone = faker.phone.phoneNumber();
    let tax_number = faker.finance.account();
    let city = faker.address.city();
    let post_code = faker.address.zipCode();
    let country = faker.address.country();

    companies.push({
      "id": id,
      "name": name,
      "phone": phone,
      "address": address,
      "suffix": suffix,
      "agentId": agent_id,
      "tax_number": tax_number,
      "post_code": post_code,
      "city": city,
      "country": country
    });

  }


  return {
    "agents": agents,
    "companies": companies,
    "permissionsAll": [
      "ViewDashboardInvoices",
      "ViewOffers",
      "ExecuteTransactions",
      "ViewAgents",
      "GenerateOffers",
      "CreateAgents",
      "ViewSuppliers",
      "ApproveRisks",
      "TransactionsLogs",
      "ReAssignInvoice",
    ],
    "permissions":[{
            "id": "8677815a-a84a-47a3-829d-b860ff188e0c",
            "type":"supplier",
            "permissions":[
                "ViewDashboardInvoices",
                "ViewOffers",
                "ExecuteTransactions",
                "ViewAgents"
            ]
        },{
          "id": "67c0e2d6-b3b9-46f2-b4e9-d75e5b2dccd3",
          "type":"supplier",
          "permissions":[
              "ViewDashboardInvoices",
              "ViewOffers",
              "ExecuteTransactions",
              "ViewAgents",
              "ViewSuppliers",
          ]
      },{
            "id":"7d41327b-490c-4015-a67a-1a1b4a35a623",
            "type":"financial",
            "permissions":[
                "GenerateOffers",
                "CreateAgents",
                "ViewSuppliers",
                "ApproveRisks",
                "TransactionsLogs",
                "ReAssignInvoice",
                "ViewSuppliers",
                "ViewAgents"
            ]
        },{
            "id": "b09fb980-edd3-4c59-9bb9-173e51f99dcd",
            "type":"debtor",
            "permissions":[
                "GenerateOffers",
                "ViewSuppliers",
                "TransactionsLogs",
                "ViewAgents"
            ]
        }],
    "appconfig":[
        {
        "subdomain":"nuevocapital",
        "tenantid":"12345678",
        "financialid":"7890"
        },{
        "subdomain":"motorfinanciero",
        "tenantid":"12345678",
        "financialid":"7890"
        },{
        "subdomain":"btg",
        "tenantid":"12345678",
        "financialid":"7890"
        }
    ]
  };
}

module.exports = generateAgents
