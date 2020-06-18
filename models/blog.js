const getAllBlog = ()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from blog", (err,rows)=>{
            if(err)reject(err);
            resolve(rows);
        });
    });
};

const getBlogActivo = (blogId) =>{
    return new Promise((resolve,reject)=>{
        db.query("select * from blog where id =?",[blogId],(err,rows)=>{
            if(err) reject(err);
            resolve(rows[0]);
        })
    })
}

module.exports = {
    getAllBlog,
    getBlogActivo
   
};