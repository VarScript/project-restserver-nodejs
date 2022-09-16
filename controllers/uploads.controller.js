const path = require('path');

const { response } = require("express");



const uploadFiles = (req, res =  response) => {

    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    res.status(400).json({msg: 'There is not files that to upload'});
    return;
    }

    const { file } = req.files;
    const cutName = file.name.split('.');
    const extension = cutName[ cutName.length - 1 ]

    // Validate the extension
    const validExtension = [ 'jp', 'png', 'gif'];
    if ( !validExtension.includes( extension ) ) {
        return res.status(400).json({
            msg: `The extension ${ extension } is not permitted - valid extensions: ${ validExtension }`
        })
    } 

    res.json({ extension });
    
    // const uploadPath = path.join(__dirname, '../uploads/', file.name);

    // file.mv(uploadPath, (err) => { 
    // if (err) {
    //     return res.status(500).json({ err });
    // }

    // res.json({msg: 'File uploaded to ' + uploadPath});
    // });

}


module.exports = {
    uploadFiles
}