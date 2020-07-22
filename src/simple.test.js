function add(a,b){
    return a+b;
}

test('simple', () => {
    //a is b : assertion
    expect(1 + 1).toBe(2)
})

test('add',()=>{
    expect(add(1,3)).toBe(4)
})