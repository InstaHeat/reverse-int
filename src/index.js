module.exports = function reverse (n) {
    const str = n.toString()
                 .split('')
                 .reverse()
                 .join('');
    const res = Number.parseInt(str,10);
    return res;
}
