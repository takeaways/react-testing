import React  from "react";
import {render} from "@testing-library/react"
import App from "./App";

test('App', () => {

    const {getByText} = render(<App/>)

    expect(getByText(/Add/)).not.toBeNull();
    expect(getByText(/noting1/)).not.toBeNull();

})