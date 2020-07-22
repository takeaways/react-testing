import React from "react";
import {fireEvent, render} from "@testing-library/react"
import InputContainer from "./InputContainer";

jest.mock("react-redux");
import {useSelector, useDispatch} from "react-redux";


test('App', () => {

    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation(selector => selector({
        taskTitle: 'Gel'
    }))

    const {getByText, getByDisplayValue} = render((
        <InputContainer/>
    ))

    expect(getByDisplayValue('Gel')).not.toBeNull();
    expect(getByText('Add')).not.toBeNull();

    fireEvent.click(getByText('Add'));
    expect(dispatch).toBeCalledWith({
        type:'addTask',
    });


})