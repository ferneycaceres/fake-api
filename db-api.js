var faker = require('faker');

//var ceded = require('./ceded_last.json');
var ceded = require('./ceded.json');

var config = require('./config.json');

var providers = require('./data-providers.json');

var billers = require('./data-providers.json');

var invoices = require('./invoices');



module.exports = { 
    data : function (){

        let suppliers = [];
        let suppliers_results = [];
        let purchase_orders = [];
        let purchase_orders_res = [];
        let states = ['rejected', 'approved', 'pending'];
        let suppliersDetail = [];
        let agents = [];
        let companies = [];
        let permissions = [];
        let matrix = [];
        let debts = [];
        let graph1 = [];
        let graph2 = [];
        let graph3 = [];
        let contexts = [];
        let permissionRole = [];
        let permisionsRoleTree = [];
        let subjects = ["debtor", "financial", "supplier"];
        let actions = ["view","edit","create"];
        let option_value = ["less_than","equal_to","greater_than"];
        let resources = ["invoices","transactions","offers"];
        let roleNames = ["debtor", "supplier","financial","executive"];
        let roleDescriptions = ["Descripción para los ejecutivos", "Descripción para los empleados"];
        let months = ["2016-10", "2016-11", "2016-12", "2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-08", "2017-09", "2017-10", "2017-11"];      
        let transactionStates = ["accepted_by_supplier","approved_by_financial","assigment_initializated","assigned_completed","paid"]
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
                    dte_type:null
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

          for(let i= 0; i<50; i++){
            let transactionId = faker.random.uuid();
            let assignor_user_id = faker.random.uuid();
            let assignee_user_id = faker.random.uuid();
            let factoring_offer_batch_id = faker.random.uuid();
            let invoice_id = faker.random.uuid();
            let invoice_number=Math.floor(Math.random() * 8);
            let context = {
            "id": faker.random.uuid(),
            "transaction_id": transactionId,
            "ok2_pay_rule_id": faker.random.uuid(),
            "created_at": faker.date.past(),
            "updated_at": faker.date.past(),
            "previred_document_exist": false,
            "purchase_order_exist": false,
            "organization_tax_number": faker.random.number(),
            "purchase_order_validations": null,
            
            "transaction": {
               "expiration_date": faker.date.past(),
               "invoice_number": invoice_number,
               "operation_date": faker.date.past(),
               "status": transactionStates[i%5],
               "id": transactionId,
               "assignor_user_id": assignor_user_id,
               "assignee_user_id": assignee_user_id,
               "factoring_offer_batch_id": factoring_offer_batch_id,
               "new_due_date": null,
               "currency_code": "CLP",
               "amount": Math.round(Math.random() * 10000000000) / 100,
               "debtor_email": faker.internet.email(),
               "created_at": faker.date.past(),
               "updated_at": faker.date.past(),
               "assignee_id": assignee_user_id,
               "assignor_id": assignor_user_id,
               "assignor_tax_number": faker.random.number(),
               "factoring_offer_batch": {
               "id": factoring_offer_batch_id,
               "discount_rate": Math.round(Math.random() * 1000) / 100,
               "transaction_expenses": Math.round(Math.random() * 1000) / 100,
               "comission_fixed": Math.round(Math.random() * 1000) / 100,
               "comission_variable": Math.round(Math.random() * 1000) / 100,
               "amount_advance": 89357502.61,
               "amount_due": Math.round(Math.random() * 10000000000) / 100,
               "document_count": 0,
               "created_at": faker.date.past(),
               "updated_at": faker.date.past(),
               "factoring_offers": [
                {
                   "id": faker.random.uuid(),
                   "invoice_id": invoice_id,
                   "factoring_offer_batch_id": factoring_offer_batch_id,
                   "amount_advance": Math.round(Math.random() * 10000000000) / 100,
                   "transaction_expenses": Math.round(Math.random() * 1000) / 100,
                   "discount_rate":Math.round(Math.random() * 1000) / 100,
                   "comission_fixed": Math.round(Math.random() * 1000) / 100,
                   "comission_variable": Math.round(Math.random() * 1000) / 100,
                   "amount_due": Math.round(Math.random() * 10000000000) / 100,
                   "operation_date": null,
                   "created_at": faker.date.past(),
                   "updated_at": faker.date.past(),
                   "new_due_date": null,
                   "assignee_id": assignee_user_id,
                   "invoice": {
                      "issuer_id": faker.random.uuid(),
                      "issuer_tax_number": faker.random.number(),
                      "issuer_name": faker.name.findName(),
                      "debtor_id": faker.random.uuid(),
                      "debtor_tax_number": faker.random.number(),
                      "debtor_name": faker.name.findName(),
                      "invoice_number": invoice_number,
                      "issue_date": faker.random.uuid(),
                      "due_date": null,
                      "amount_total": Math.round(Math.random() * 10000000) / 100,
                      "country_code": "CL",
                      "currency_code": null,
                      "status": "none",
                      "dte": null,
                      "dte_type": "33",
                      "id": faker.random.uuid(),
                  }
                },
                {
                "id": faker.random.uuid(),
                "invoice_id": invoice_id,
                "factoring_offer_batch_id": factoring_offer_batch_id,
                "amount_advance": Math.round(Math.random() * 10000000000) / 100,
                "transaction_expenses": Math.round(Math.random() * 10000000000) / 100,
                "discount_rate": Math.round(Math.random() * 1000) / 100,
                "comission_fixed": Math.round(Math.random() * 1000) / 100,
                "comission_variable": Math.round(Math.random() * 1000) / 100,
                "amount_due": Math.round(Math.random() * 10000000000) / 100,
                "operation_date": null,
                "created_at": faker.date.past(),
                "updated_at": faker.date.past(),
                "new_due_date": null,
                "assignee_id": assignee_user_id,
                "invoice": {
                    "issuer_id": faker.random.uuid(),
                    "issuer_tax_number": faker.random.number(),
                    "issuer_name": faker.name.findName(),
                    "debtor_id": faker.random.uuid(),
                    "debtor_tax_number": faker.random.number(),
                    "debtor_name": faker.name.findName(),
                    "invoice_number": invoice_number,
                    "issue_date": faker.random.uuid(),
                    "due_date": null,
                    "amount_total": Math.round(Math.random() * 10000000) / 100,
                    "country_code": "CL",
                    "currency_code": null,
                    "status": "none",
                    "dte": null,
                    "dte_type": "33",
                    "id": faker.random.uuid(),
                  }
                }
            ],
            }
          }
          }
          contexts.push(context);
          }

          for(let x = 0; x < 10; x++){
            let role = {
                  "data":{
                    "id": faker.random.uuid(),
                    "name": roleNames[x%2],
                    "description": roleDescriptions[x%2],
                  },
                    "children" : [
                      {
                        "data" :{
                        "name": "feature 1",
                        },
                        "children":[
                        {
                          "data":{
                          "name": "edit"
                          },
                          "children": [
                          {
                            "data": {
                            "name": "action 1"
                            },
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                  "name": "rule 1",
                                  "value":"yxt + w",
                                  }
                              }
                            ]
                          },
                          {
                            "data":{
                            "name": "action 2"
                            },
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                "name": "rule 2",
                                "value":"yxt + w"
                                }
                              }
                            ]
                          }
                        ]
                        },
                        {
                          "data":{
                            "name": "view",
                          },
                          "children": [
                            {
                              "data":{
                              "name": "action 1",
                              },
                              "children":[
                                {
                                  "data":{
                                  "name": "rule 1",
                                  "value": "xyz"
                                  }
                                },
                                {
                                  "data":{
                                  "name": "rule 2",
                                  "value":"yxt + w"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "action 2",
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                "name": "rule 2",
                                "value":"yxt + w"
                                }
                              }
                            ]
                            }
                          ]
                        }
                      ]
                      },
                      {
                        "data" :{
                        "name": "feature 2",
                        "leaf": "false",
                        },
                        "children":[
                        {
                          "data":{
                          "name": "edit"
                          },
                          "children": [
                          {
                            "data": {
                            "name": "action 1"
                            },
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                  "name": "rule 1",
                                  "value":"yxt + w",
                                  }
                              }
                            ]
                          },
                          {
                            "data":{
                            "name": "action 2"
                            },
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                "name": "rule 2",
                                "value":"yxt + w"
                                }
                              }
                            ]
                          }
                        ]
                        },
                        {
                          "data":{
                            "name": "view",
                          },
                          "children": [
                            {
                              "data":{
                              "name": "action 1",
                              },
                              "children":[
                                {
                                  "data":{
                                  "name": "rule 1",
                                  "value": "xyz"
                                  }
                                },
                                {
                                  "data":{
                                  "name": "rule 2",
                                  "value":"yxt + w"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "action 2",
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                "name": "rule 2",
                                "value":"yxt + w"
                                }
                              }
                            ]
                            }
                          ]
                        }
                      ]
                      },
                      {
                        "data" :{
                        "name": "feature 3",
                        "leaf": "false",
                        },
                        "children":[
                        {
                          "data":{
                          "name": "edit"
                          },
                          "children": [
                          {
                            "data": {
                            "name": "action 1"
                            },
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                  "name": "rule 1",
                                  "value":"yxt + w",
                                  }
                              }
                            ]
                          },
                          {
                            "data":{
                            "name": "action 2"
                            },
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                "name": "rule 2",
                                "value":"yxt + w"
                                }
                              }
                            ]
                          }
                        ]
                        },
                        {
                          "data":{
                            "name": "view",
                          },
                          "children": [
                            {
                              "data":{
                              "name": "action 1",
                              },
                              "children":[
                                {
                                  "data":{
                                  "name": "rule 1",
                                  "value": "xyz"
                                  }
                                },
                                {
                                  "data":{
                                  "name": "rule 2",
                                  "value":"yxt + w"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "action 2",
                            "children":[
                              {
                                "data":{
                                "name": "rule 1",
                                "value": "xyz"
                                }
                              },
                              {
                                "data":{
                                "name": "rule 2",
                                "value":"yxt + w"
                                }
                              }
                            ]
                            }
                          ]
                        }
                      ]
                      }                           
                    ]
            }
            permisionsRoleTree.push(role);
          }


          for(let i=0; i<20; i++){
            let permissionValue = {                   
                            "description": "One policy to rule them all.",
                            "subjects": roleNames[Math.floor(Math.random()*4)],
                            "actions" : actions[Math.floor(Math.random()*3)],
                            "effect": "allow",
                            "resources": resources[Math.floor(Math.random()*3)],
                            "conditions": {
                              "rule": {
                                  "type": "aritmetic",
                                  "options": {
                                    "field":"amount",
                                    "type": i,
                                    "value": "10000"
                                  }
                              }
                            }
                          }                   
            permissionRole.push(permissionValue);
          }

          ruts = ['16826237k',
                '249607452',
                '188750524',
                '50583309',
                '151764843',
                '223713483',
                '75552289',
                '200551311',
                '148987947',
                '191496256',
                '50438619',
                '202860516',
                '148043108',
                '213348868',
                '5716686k',
                '58814822',
                '178220616',
                '171073464',
                '157297775',
                '15806118k'];

        const tasks = () => {
                  let array = [];
                  for (let i = 0; i < 3; i++) {
                    array.push(
                      {
                        task_id: faker.random.uuid(),
                        task_name: faker.random.arrayElement(['Previred', 'Orden Compra', 'Visto Bueno', 'SII']),
                        task_value: faker.random.boolean(),
                      },
                    );
                  }
                  return array;
                }

          const receptions = () => {
            let array = [];
            for (let i = 0; i < 2; i++) {
              array.push(
                {
                  id: faker.random.uuid(),
                  num: faker.random.alphaNumeric(7),
                  reception_date: faker.date.between('2018-01-01', '2018-12-31'),
                  state: faker.random.arrayElement(states),
                  amount_received: faker.finance.amount(10000000, 1000000000),
                  invoice: invoices(1)
                }
              )
            }
            return array;
          }

          const executives = () => {
            let array = [];
            for (let i = 0; i < 2; i++) {
              array.push(
                {
                  executive_name: faker.name.findName(),
                },
              );
            }
            return array;
          }

          for (let i = 0; i < 20; i++) {
            suppliers_results.push({
              supplier_id: faker.random.uuid(),
              supplier_name: faker.company.companyName(),
              supplier_tin: faker.random.arrayElement(ruts),
            });
          }

          suppliers.push(
            {
              count:20,
              results:suppliers_results
            }
          )
          
          suppliers_results.forEach(supplier => {
            suppliersDetail.push({
              dashboard: faker.internet.url(),
              supplier: {
                ...supplier,
                supplier_city: faker.address.city(),
                supplier_country: faker.address.country(),
                supplier_phone: faker.phone.phoneNumber(),
              },
              ok2pay_group: {
                group_id: faker.random.uuid(),
                group_name: faker.commerce.department(),
                tasks: tasks(),
                executives: executives(),
              },
              metadata: {
                average_margin: faker.random.number(0, 1),
                last_year_sales: faker.finance.amount(10000000, 1000000000),
                last_year_buys: faker.finance.amount(10000000, 1000000000),
                last_year_accumulative_margin: faker.finance.amount(10000000, 1000000000),
              }
            })
          
          });


          suppliers_results.forEach(supplier => {
            purchase_orders_res.push(
              {
                id: faker.random.uuid(),
                num: faker.random.alphaNumeric(7),
                debtor_tin: supplier.supplier_id,
                debtor_name: faker.name.findName(),
                issue_date: faker.date.between('2018-01-01', '2018-12-31'),
                amount: faker.finance.amount(10000000, 1000000000),
                num_receptions: 1,
                num_invoices: 1,
                terms: faker.lorem.text(20),
                description: faker.lorem.text(100),
                state: faker.random.arrayElement(states),
                receptions: receptions()
              }
            )
          })

          purchase_orders.push(
            {
              res:20,
              results:purchase_orders_res
            }
          )


      
          return {
            "suppliers":suppliers,
            "purchase_orders":purchase_orders,
            "supplier_details":suppliersDetail,
            "graph1": graph1,
            "graph2": graph2,
            "agents": agents,
            "matrix": matrix,
            "debtspay": debts,
            "permissionRole": permissionRole,
            "permisionsRoleTree": permisionsRoleTree,
            "contexts": contexts,
            "transactions":transactions,
            "companies": companies,
            "ceded":ceded,
            "config":config,
            "providers":providers,
            "billers":billers,
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

