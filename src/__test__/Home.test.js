// errors: could not find react-redux context value; please ensure the component is wrapped in a <Provider>

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Home from "../components/Home";


jest.mock("axios");

describe("Home Component Test", () => {
    test('adding product to the cart ', async () => {
        const mockResponse = { data: [
            { id: 12, image: "", title: "nike shoes", price: 120.99, category: "men's clothing", description: "nike's latest running shoes, fit for a king"}
        ]};
        axios.get.mockResolvedValue(mockResponse);

        const { getByText } = render(<Home />);
        
        fireEvent.click(getByText("nike shoes"));

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith("https://fakestoreapi.com/products")
        })


    });
});