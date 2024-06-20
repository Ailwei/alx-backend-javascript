function calculateNumber(a, b) {
    const roundedFirst = Math.round(a);
    const roundedSecond = Math.round(b);
    return roundedFirst + roundedSecond;
}

module.exports = calculateNumber;
