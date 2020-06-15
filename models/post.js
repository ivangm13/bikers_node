const getById = (pPostId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from posts where id=?', [pPostId], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        });
    });
};

module.exports = {
    getById
}