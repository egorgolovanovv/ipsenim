function copyData(node) {
    let clone = {};
    for (let key in node) {
        if (typeof node[key] === 'object') {
            clone[key] = copyData(node[key]);
        } else {
            clone[key] = node[key];
        }
    }
    return clone;
}
