function confirmEnding(str, target) {
    target = new RegExp (target + '$');
    return target.test(str);
}
