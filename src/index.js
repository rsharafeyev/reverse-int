module.exports = function reverse (n) {
    return n.toString().split('').filter(char => char != '-').reverse().join('');
}
