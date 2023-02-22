// {{
//     name:, required
//     type:, required
//     progress:, required
//     genre:[],
//     rating:,
//     adNotes:,
//     img:,

// },{...},};

let library={};

//respondJSON
const respondJSON=(request,response, status, object)=>{
    const headers={
        'Content-Type': 'application/json',
    };

    response.writeHead(status,headers);
    response.write(JSON.stringify(object));
    response.end();
}

//addData/editData //400/201/200/204

//getData //200

//notFound//404
const notFound=(request,response)=>{
    const responseJSON={
        message:'The page youre looking for was not found.',
        id:'notFound'
    };

    return respondJSON(request,response,404,responseJSON);
}

module.exports={
    notFound,
};
