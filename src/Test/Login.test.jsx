import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("Testing Login Component",()=>{
    render(<Login></Login>)
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})