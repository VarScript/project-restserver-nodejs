const { response } = require("express");

const { uploadFile } = require("../helpers");



const uploadFiles = async (req, res =  response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({msg: 'There is not files that to upload'});
    return;
    }

    const name = await uploadFile( req.files );

    res.json({ name })
    

}


module.exports = {
    uploadFiles
}