const { response } = require("express");



const uploadFiles = (req, res =  response) => {

    res.json({
        msg: 'Upload file'
    })
}



module.exports = {
    uploadFiles
}