let s = "";
let t = "";

for ( i = 0; i < 10; i++ ) {
    for ( j = 0; j <= i; j++ ) {
        s += '*';
    }
    for ( k = 5; k < i; k--) {
        s += '*';
    }

    s += '\n';
}

console.log(s);
