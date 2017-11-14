var partition = function(array, p, r) {
    // This code has been purposefully obfuscated,
    // as you will implement it yourself in next challenge
    var e = array;
    var t = p;
    var n = r;
    var r = function(e, t, n) {
        var r = e[t];
        e[t] = e[n];
        e[n] = r;
    };
    var i = t;
    for (var s = t; s < n; s++) {
        if (e[s] <= e[n]) {
            r(e, s, i);
            i++;
        }
    }
    r(e, n, i);
    return i;
};
