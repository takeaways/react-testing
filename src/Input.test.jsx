import React from "react";
import {render, fireEvent} from '@testing-library/react';

import Input from "./Input";

test('Input', () => {

    const taskTitle = "할 일"
    const handleChangeTitle = jest.fn();
    const handleAddTask = jest.fn();

    const {getByText, getByDisplayValue, getByLabelText} = render((
        <Input
            value={taskTitle}
            onChange={handleChangeTitle}
            onClick={handleAddTask}
        />
    ))

    expect(getByDisplayValue(taskTitle)).not.toBeNull();

    fireEvent.change(getByLabelText("NewTask"), {
        target: {value: 'new task'}
    });
    expect(handleChangeTitle).toBeCalled();

    fireEvent.click(getByText("Add"));
    expect(handleAddTask).toBeCalled();


})