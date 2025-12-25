var compactObject = function(obj) {
    if (obj === null) return null;
    
    if (Array.isArray(obj)) {
        return obj.reduce((acc, val) => {
            if (val) {
                acc.push(compactObject(val));
            }
            return acc;
        }, []);
    }
    
    if (typeof obj === 'object') {
        return Object.entries(obj).reduce((acc, [key, val]) => {
            if (val) {
                acc[key] = compactObject(val);
            }
            return acc;
        }, {});
    }
    
    return obj;
};