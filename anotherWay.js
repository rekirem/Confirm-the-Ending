function confirmEnding(str, end) {
    return str.slice(str.length - end.length) === end;
}
