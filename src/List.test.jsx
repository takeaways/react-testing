import React from "react";
import {render, fireEvent} from "@testing-library/react";

import List from "./List";

// describe - it => describe('List') => it('')
describe('List', () => {
    const handleClickDeleteTask = jest.fn();
    function renderList(tasks) {
        return render((
            <List
                tasks={tasks}
                onClickDeleteTask={handleClickDeleteTask}
            />
        ));

    }


    describe('with tasks', ()=>{

        it('render tasks', () => {
            const tasks = [{id: 1, title: 'nothing1'}, {id: 2, title: 'nothing2'}];


            const {getByText} = renderList(tasks)

            expect(getByText(/nothing1/)).not.toBeNull();
            expect(getByText(/nothing2/)).not.toBeNull();
        })

        it('render Delete buttons and Click Remove Task', () => {
            const tasks = [{id: 1, title: 'nothing1'}, {id: 2, title: 'nothing2'}];
            const handleClickDeleteTask = jest.fn();

            const {getByText, getAllByText} = renderList(tasks)

            expect(getByText(/nothing1/)).not.toBeNull();
            expect(getByText(/nothing2/)).not.toBeNull();

            const buttons = getAllByText(/Delete/);
            fireEvent.click(buttons[0]);

            expect(handleClickDeleteTask).toBeCalledWith(1);
        })

    })

    describe('without tasks',()=>{
        it('render no task message', () => {
            const tasks = [];
            const handleClickDeleteTask = jest.fn();

            const {getByText} = renderList(tasks)

            expect(getByText(/no tasks/)).not.toBeNull();
        })
    })




});

