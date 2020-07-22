import React from "react";
import {render, fireEvent} from '@testing-library/react';

import Item from "./Item";

test('Item', () => {
    const task = {
        id: 1,
        title: 'Hello'
    }
    const onClickDeleteTask = jest.fn();
    const {container, getByText} = render(<Item task={task} onClickDeleteTask={onClickDeleteTask}/>)

    expect(container).toHaveTextContent("Hello")
    expect(container).toHaveTextContent("Delete")

    expect(onClickDeleteTask).not.toBeCalled();
    fireEvent.click(getByText("Delete"))
    expect(onClickDeleteTask).toBeCalledWith(1);


})