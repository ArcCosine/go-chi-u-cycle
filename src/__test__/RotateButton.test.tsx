import { describe, expect, test, afterEach } from "vitest";
import RotateButton from "../components/RotateButton";
import { render, screen } from "@testing-library/react";
import { CountProvider } from "../context/CountContext";

const images = [
    {
        imageUrl: "syaro.jpg",
        imageText: "syaro",
    },
    {
        imageUrl: "syaro.png",
        imageText: "syaro",
    },
];

describe("Rotate button test", () => {
    test("button render test", () => {
        const { container } = render(<CountProvider><RotateButton length={images.length} /></CountProvider>);
        expect(container).toMatchSnapshot();
    });

    test("check button nums", () => {
        render(<CountProvider><RotateButton  length={images.length} /></CountProvider>);
        expect(screen.getAllByRole("button")[0]).toBeTruthy();
        expect(screen.getAllByRole("button")[1]).toBeTruthy();
    });

    test("initial count", () => {
        const { container } = render(<CountProvider><RotateButton length={images.length} /></CountProvider>);
        expect(screen.getByTestId("countup").textContent).toBe('0');
    });

    test("count up number", () => {
        const { container } = render(<CountProvider><RotateButton length={images.length} /></CountProvider>);
        const buttonZero = screen.getAllByRole("button")[0];
        buttonZero.click();
        expect(screen.getByTestId("countup").textContent).toBe("0");
    });

    test("count down number", () => {
        const { container } = render(<CountProvider><RotateButton length={images.length} /></CountProvider>);
        const buttonOne = screen.getAllByRole("button")[1];
        buttonOne.click();
        expect(screen.getByTestId("countup").textContent).toBe("0");
    });
});
