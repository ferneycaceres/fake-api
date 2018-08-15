var faker = require('faker');
var ok2pay = require('./ok2pay_workflow.json');



module.exports = { 
    data : function (){
        return {
            "financial-groups": ok2pay.financial_groups,
            "members":ok2pay.members,
            "requirements":ok2pay.requirements,
            "executives":ok2pay.executives,
            "groups":ok2pay.groups,
            "pending_offers_by_executive":ok2pay.pending_offers_by_executive,
            "confirm_group":ok2pay.confirm_group,
            "context":ok2pay.context
        };
       
    }
}

