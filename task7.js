function intToIp(int) {
    let octets = [];

    for (let i = 3; i >= 0; i--) {
        octets.push((int >> (i * 8)) & 255);
    }

    return octets.join(".");
}

export { intToIp }
  