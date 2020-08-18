import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react";
import App from '../App';

describe('Some suite', () => {
    it("should render Hello World!", () => {
        render(<App />);
        expect(screen.queryByText("Hello World")).not.toBeNull();
    });

    it("should add ! to Hello World", async () => {
        render(<App />);
        const btn1 = screen.queryByText("Click");
        if (!btn1) fail('No button with id btn1')
        fireEvent.click(btn1);
        await screen.findByText("Hello World!!", { exact: false });
        expect(screen.queryByText("!!", { exact: false })).not.toBeNull();
    });
})