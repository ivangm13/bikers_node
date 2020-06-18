const getAllPosts = ()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from blog", (err,rows)=>{
            if(err)reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    getAllPosts
   
};