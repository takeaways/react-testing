import React from "react";
import {render} from "@testing-library/react"
import ListContainer from "./ListContainer";

jest.mock("react-redux");
import {useSelector} from "react-redux";

test('App', () => {

    //test를 위한 예저 값들
    useSelector.mockImplementation(selector => selector({
        tasks: [{id: 1, title: 'noting1'}, {id: 2, title: 'noting2'}]
    }))

    const {getByText} = render(<ListContainer/>)

    expect(getByText(/noting1/)).not.toBeNull();
})