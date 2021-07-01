let perimeter = (width, length) => {
    if (width === 0 && length === 0) {
        return "Both values can't be 0!"
    }
    return (width + length) * 2
}

export default perimeter
