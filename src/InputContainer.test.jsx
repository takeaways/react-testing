import React from "react";
import {fireEvent, render} from "@testing-library/react"
import InputContainer from "./InputContainer";

jest.mock("react-redux");
import {useSelector} from "react-redux";


test('App', () => {

    useSelector.mockImplementation(selector => selector({
        taskTitle: 'Gel'
    }))

    const {getByText, getByDisplayValue} = render((
        <InputContainer/>
    ))

    expect(getByDisplayValue('Gel')).not.toBeNull();
    expect(getByText('Add')).not.toBeNull();


})