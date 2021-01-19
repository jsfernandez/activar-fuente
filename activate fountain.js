fountainActivation = (locations) => {
    let n = locations.length
    let i = 0, y = 0
    let arr = new Array(n).fill(0);
    while ( i < n ) {
        let min = ((i + 1) - locations[i]) < 1 ? 1 : (i + 1) - locations[i]
        let max = ((i + 1) + locations[i]) <= n ? (i + 1) + locations[i] : n
        arr = arr.map((value, index)=>{ return index<=max && index>=(min - 1) ?  i : value })
        i = max >= n ? max : i + 1
    }
    let arrReverse = locations.reverse()
    let m = arrReverse.length
    while ( y < m ) {
        let min = ((y + 1) - arrReverse[y]) < 1 ? 1 : (y + 1) - arrReverse[y]
        let max = ((y + 1) + arrReverse[y]) <= m ? (y + 1) + arrReverse[y] : m
        arr = arr.map((value, index)=>{ return index <= max && index >= (min - 1) ?  y : value })
        y = max >= m ? max : y + 1
    }
    return arr.filter((a,b,c)=>{return c.indexOf(a,b+1)<0}).length
}
console.log(fountainActivation([0,4,1,4,0,0,0,0,0]))