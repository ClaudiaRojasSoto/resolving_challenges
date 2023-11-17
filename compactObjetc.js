var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    } else if (obj !== null && typeof obj === 'object') {
       
        let compactedObj = {};
        for (let key in obj) {
            if (Boolean(obj[key])) {
                compactedObj[key] = compactObject(obj[key]);
            }
        }
        return compactedObj;
    }
    return obj;
};
