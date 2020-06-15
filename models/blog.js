const getAllPosts = ()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from posts", (err,rows)=>{
            if(err)reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAllPosts
   
};