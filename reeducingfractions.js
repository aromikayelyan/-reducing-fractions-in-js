function snum(num) {
    let a = ''
    let b = ''
    for (const key in num) {

        if (num[key] != '/') {
            a += num[key]
        }else if (num[key] == '/'){
            let h = num[key].length * (a.length + 1)
            for (let i = h; i < num.length; i++) { b += num[i] }
            break
        }
    }
    return foo([+a, +b])
}

function con(arr) {
    if (arr[1] === 1) {
        console.log(`${arr[0]}`)
    } else {
        console.log(`${arr[0]}/${arr[1]}`)
    }
}

function foo(arr) {
    let a = arr[0]
    let b = arr[1]
    if (a % 2 === 0 && b % 2 === 0) {
        a = a / 2
        b = b / 2
        foo([a, b])
    } else if (a % 3 === 0 && b % 3 === 0) {
        a = a / 3
        b = b / 3
        foo([a, b])
    } else if (a % 5 === 0 && b % 5 === 0) {
        a = a / 5
        b = b / 5
        foo([a, b])
    } else if (a % 7 === 0 && b % 7 === 0) {
        a = a / 7
        b = b / 7
        foo([a, b])
    }
    else {
        return con([a, b])
    }
}



snum('14/21')









