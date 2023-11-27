function buildresponse(res, code, message){
    res.status(code).send(message);
}

module.exports = buildresponse;