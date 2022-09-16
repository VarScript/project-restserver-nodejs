const { response } = require("express");

const { uploadFile } = require("../helpers");



const uploadFiles = async (req, res =  response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({msg: 'There is not files that to upload'});
    return;
    }

    try {
        
        const name = await uploadFile( req.files, undefined, 'imgs');
        res.json({ name });

    } catch (msg) {
        res.status(400).json({ msg })
    }
    
}



const updateImage = (req, res = response ) => {
    
    const { id, collection } = req.params;
    
    res.json({ id, collection })
}


module.exports = {
    uploadFiles,
    updateImage
}