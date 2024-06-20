function calculateNumber(operationType, num1, num2) {
    const roundedFirst = Math.round(num1);
    const roundedSecond = Math.round(num2);

    if (operationType === 'SUBTRACT') {
        return roundedFirst - roundedSecond;
    }

    if (operationType === 'DIVIDE') {
        if (roundedSecond === 0) {
            return 'Error';
        }
        return roundedFirst / roundedSecond;
    }

    // Default operation is 'SUM'
    return roundedFirst + roundedSecond;
}

module.exports = calculateNumber;
