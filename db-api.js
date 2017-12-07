var faker = require('faker');

module.exports = { 
    data : function (){

        let agents = [];
        let companies = [];
        let permissions = [];
        let matrix = [];
        let debts = [];
        let graph1 = [];
        let graph2 = [];
        let graph3 = [];
        let months = ["2016-10", "2016-11", "2016-12", "2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-08", "2017-09", "2017-10", "2017-11"];      
      
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
        
        
          for (let c = 0 ; c <100;c++){
              let id = c+1;
              let c_company = faker.company.companyName();
              let c_rpr = faker.random.boolean();
              let c_roc = faker.random.boolean();
              let c_vb = faker.random.boolean();
        
            matrix.push({
                "id":id,
                "company_name":c_company,
                "require_pvr": c_rpr,
                "require_po" :c_roc,
                "require_ok":c_vb,
                "num_executives":"0",
                "executive_1":"",
                "executive_2":""
            });
          }
        
          for (let d = 0; d<100;d++){
            let id = d+1;
            let d_supplier_name = faker.company.companyName();
            let d_invoice_num = faker.random.uuid();
            let d_invoice_amount = faker.commerce.price();
            let d_ok_pay = faker.random.boolean();
            let d_ceded = faker.random.boolean();
            let d_ceded_to = '';
        
            if (d_ceded){
                d_ceded_to = faker.company.companyName();
            }
        
        
            debts.push({
                "id": id,
                "supplier_name":d_supplier_name,
                "invoice_num":d_invoice_num,
                "invoice_amount": d_invoice_amount,
                "ok_pay": d_ok_pay,
                "ceded":d_ceded,
                "ceded_to":d_ceded_to
            });
          }
        
          for (let i = 0; i < 12; i ++) {
            let mon = Math.floor(Math.random() * 2000000);
            let cant = Math.floor(Math.random() * 8);
            item = {
              "date": months[i],
              "monto": mon,
              "cantidad": cant,
            },
            graph1.push(item);
          }
        
          for (let i = 0; i < 12; i ++) {
            let cant = Math.floor(Math.random() * 250);
            item = {
              "date": months[i],
              "clients": cant,
            },
            graph2.push(item);
          }
      
      
          return {
            "graph1": graph1,
            "graph2": graph2,
            "agents": agents,
            "matrix": matrix,
            "debtspay": debts,
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
                    "id": "1d3ff5cf-d850-4f9d-af3f-087c771ec2d9",
                    "type":"debtor",
                    "permissions":[
                        "ViewDashboardInvoices",
                        "ViewSuppliers",
                        "ViewAgents",
                        "ViewOPMatrix",
                        "ViewDebtsPay",
                        "ViewAprovals"
                    ]
                },{
                  "id": "c167e09c-67ed-4449-ba97-5bbb5130ff03",
                  "type":"supplier",
                  "permissions":[
                      "ViewDashboardInvoices",
                      "ViewOffers",
                      "ExecuteTransactions",
                  ]
              },{
                    "id":"368aa808-758b-4d48-8bde-d95e4d7e19bf",
                    "type":"financial",
                    "permissions":[
                      "ViewDashboardInvoices",
                      "ViewSuppliers",
                      "ViewAgents",
                      "ViewOPMatrix",
                      "ViewDebtsPay",
                      "ViewAprovals",
                      "ViewOffers",
                      "ExecuteTransactions",
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
}

