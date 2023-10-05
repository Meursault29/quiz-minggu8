const checkError = (errors, req, res, next) => {
    console.log(errors);

    if(errors){
        const detailError = {};
        errors.array().map(err => {
            if(!detailError[err.path]){
                detailError[err.path] = []
            }

            detailError[err.path].push(err.msg);
        })
        return res.status(400).json({
            status: "failed",
            error: detailError
        })
    }

    next();
}

module.exports = checkError;