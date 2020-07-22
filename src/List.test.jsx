import React from "react";
import {render, fireEvent} from "@testing-library/react";

import List from "./List";

test('List', () => {
    const tasks = [{id: 1, title: 'nothing1'}, {id: 2, title: 'nothing2'}];
    const handleClickDeleteTask = jest.fn();

    const {getByText, getAllByText} = render((
        <List
            tasks={tasks}
            onClickDeleteTask={handleClickDeleteTask}
        />
    ));

    expect(getByText(/nothing1/)).not.toBeNull();
    expect(getByText(/nothing2/)).not.toBeNull();

    const buttons = getAllByText(/Delete/);
    fireEvent.click(buttons[0]);

    expect(handleClickDeleteTask).toBeCalledWith(1);

})
