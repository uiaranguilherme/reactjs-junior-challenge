const { uuid } = require('uuidv4');

function GenerateUUID (req , res, next) {
    if(req.method === POST){
        req.body.guid = uuid();
    }

    next()
}
