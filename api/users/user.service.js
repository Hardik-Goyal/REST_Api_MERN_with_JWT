const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into table(name, gender, email, password, number) values(?,?,?,?,?)`,
            [data.name, data.gender, data.email, data.password, data.number],
            (error, results, fields) => {
                if (error) return callBack(error);
                return callBack(null, results);
            }
        );
    }
};