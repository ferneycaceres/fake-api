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
        let transactions = [];

        for (let t = 0; t<=10; t++){
          transactions.push({
            tx_id : faker.random.uuid(),
            tx_amount: faker.finance.amount(),
            tx_date : faker.date.past(),
            tx_ok2pay:{
              validated:faker.random.boolean(),
              value:faker.random.boolean()
            },
            tx_pvr:{
              validated:faker.random.boolean(),
              value:faker.random.boolean()
            },
            tx_oc:{
              validated:faker.random.boolean(),
              value:faker.random.boolean()
            },
            tx_offer_batch:{

              id:faker.random.uuid(),
              discount_rate: Math.floor(Math.random() * 3),
              transaction_expenses: faker.finance.amount(),
              comission_fixed:Math.floor(Math.random() * 4),
              comission_variable:Math.floor(Math.random() * 5),
              amount_advance : faker.finance.amount(),
              amount_due: faker.finance.amount(),
              document_count:Math.floor(Math.random() * 100),
              created_at:faker.date.past(),
              updated_at:faker.date.past(),
              factoring_offers:[
                {
                  id:faker.random.uuid(),
                  invoice_id:faker.random.uuid(),
                  factoring_offer_batch_id:faker.random.uuid(),
                  amount_advance:faker.finance.amount(),
                  transaction_expenses:faker.finance.amount(),
                  discount_rate:Math.floor(Math.random() * 3),
                  comission_fixed:Math.floor(Math.random() * 4),
                  comission_variable:Math.floor(Math.random() * 5),
                  amount_due:faker.finance.amount(),
                  operation_date:faker.date.past(),
                  created_at:faker.date.past(),
                  updated_at:faker.date.past(),
                  new_due_date:null,
                  assignee_id:faker.random.uuid(),
                  invoice: [
                  {
                    issuer_id:faker.random.uuid(),
                    issuer_tax_number:faker.random.number(),
                    issuer_name: faker.name.firstName()+' '+faker.name.lastName(),
                    debtor_id: faker.random.uuid(),
                    debtor_tax_number : faker.random.number(),
                    debtor_name: faker.name.firstName()+' '+faker.name.lastName(),
                    invoice_number:faker.random.number(),
                    issue_date: faker.date.past(),
                    due_date : faker.date.past(),
                    amount_total:faker.finance.amount(),
                    country_code: 'CL',
                    currency_code:'CLP',
                    status:"drafted",
                    dte:null,
                    dte_type:null,
                    require_ok:faker.random.boolean(),
                    require_po:faker.random.boolean(),
                    require_pvr:faker.random.boolean(),
                  }
                ]}
                ],
                expiration_date:faker.date.past(),
                invoice_number:1,
                operation_date:faker.date.past(),
                status:"drafted"

            },

              tx_pvr_last_payment:{
                date_lp:faker.date.past(),
                amount:faker.finance.amount(),
                amount_change:faker.finance.amount(),
                employees_num:faker.random.number(),
                employees_change:faker.random.number()
              }

          })
        }


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
            "transactions":transactions,
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
                    "id": "626a0de4-7688-4580-accd-98f1c7523123",
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
                    "id":"c890cba6-7ccb-408e-b361-4bf51a0a17f9",
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

