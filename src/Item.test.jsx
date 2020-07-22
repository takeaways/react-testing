

test('Item',()=>{
    const task = {
        id:1,
        title:'Hello'
    }
    render(<Item task={task}/>)
})