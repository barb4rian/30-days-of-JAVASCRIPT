/**
 * @param {Array} functions
 * @return {Promise}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;
        
        if (functions.length === 0) {
            resolve(results);
            return;
        }
        
        functions.forEach((fn, i) => {
            fn()
                .then(val => {
                    results[i] = val;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
};