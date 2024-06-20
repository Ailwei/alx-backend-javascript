function calculateNumber(type, a, b) {
    const roundedFirst = Math.round(a);
    const roundedSecond = Math.round(b);

    if (type === 'SUBTRACT') {
        return roundedFirst - roundedSecond;
    }

    if (type === 'DIVIDE') {
        if (roundedSecond === 0) {
            return 'Error';
        }
        return roundedFirst / roundedSecond;
    }

    // Default operation is 'ADD'
    return roundedFirst + roundedSecond;
}

module.exports = calculateNumber;
