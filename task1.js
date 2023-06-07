function filter_list(array) {
    return array.reduce((prev, curr) => {
        if (Number(curr) >= 0 && prev.indexOf(Number(curr)) < 0) return [...prev, Number(curr)];
        return prev
    }, [])
}

export { filter_list }