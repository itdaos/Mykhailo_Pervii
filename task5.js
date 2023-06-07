function transformFriends(friends) {
    return friends.toUpperCase()
                .split(";")
                .map(person => [person.split(":")[1], person.split(":")[0]])
                .sort((a, b) => {
                    const surnameCmp = ('' + a[0]).localeCompare(b[0]);
                    const firstnameCmp = ('' + a[1]).localeCompare(b[1]);
                    return surnameCmp !== 0 ? surnameCmp : firstnameCmp;
                })
                .map(el => `(${el.join(", ")})`)
                .join("");
}

export {transformFriends}