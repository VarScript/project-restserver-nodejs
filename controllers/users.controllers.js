const { response, request } = require('express')



const userGet = (req = request, res = response) => { 
    //
    const { q, name = 'No mane', apikey, page = 2, limit } = req.query;

    // when is a json format it send an object
    res.json({ 
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    });
}


const userPut = (req = request, res = response) => {
    // For recive the id in the URL
    const { id } = req.params;
    
    // when is a json format it send an object
    res.json({ 
        msg: 'put API - controller',
        id
    });
}


const userPost = (req = request, res = response) => { // create new resources
    // Recive the body in formart json of server
    const { name, age, id, lastName } = req.body;
    
    // when is a json format it send an object
    res.json({ 
        msg: 'post API - controller',
        name, 
        age,
        id,
        lastName
    });
}


const userPatch = (req = request, res = response) => {
    // when is a json format it send an object
    res.json({ 
        msg: 'patch API - controller'
    });
}

const userDelete = (req = request, res = response) => {
    // when is a json format it send an object
    res.json({ 
        msg: 'delete API - controller'
    });
}



module.exports = {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}