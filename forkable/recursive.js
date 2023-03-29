function autoRecursive(i) {
    console.log(i++);
    if (i < 100) {
        autoRecursive(i);
    }
}