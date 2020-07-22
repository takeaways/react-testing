import React from "react";
import {render, fireEvent} from "@testing-library/react";

import Page from "./Page";

test('page', () => {
    const tasks = [{id: 1, title: 'nothing1'}, {id: 2, title: 'nothing2'}];
    let taskTitle = '';

    const handleClickAddTask = jest.fn();
    const handleChangeTitle = jest.fn();
    const handleClickDeleteTask = jest.fn();

    const {getByText} = render((
        <Page
            tasks={tasks}
            taskTitle={taskTitle}
            onClick={handleClickAddTask}
            onChange={handleChangeTitle}
            onClickDeleteTask={handleClickDeleteTask}
        />
    ));

    expect(getByText(/nothing1/)).not.toBeNull();
    expect(getByText(/nothing2/)).not.toBeNull();

    fireEvent.click(getByText(/Add/));

    expect(handleClickAddTask).toBeCalled();

})
