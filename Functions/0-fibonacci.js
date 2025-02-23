let f0 = 0, f1 = 1, fn = 0
for (let i = 1; i <= 100; i++){
    fn = f0 + f1
    f0 = f1
    f1 = fn
    console.log(fn)
}
