import { describe, expect, test } from "vitest";
import RotateButton from "../components/RotateButton";
import { render, screen } from "@testing-library/react";

describe("Rotate button test", () => {
    test("button render test", () => {
        const { container } = render(<RotateButton />);
        expect(container).toMatchSnapshot();
    });

    test("check button nums", () => {
        render(<RotateButton />);
        expect(screen.getAllByRole("button")[0]).toBeTruthy();
        expect(screen.getAllByRole("button")[1]).toBeTruthy();
    });

    test("count up number", () => {
        const { container } = render(<RotateButton />);
        const buttonZero = screen.getAllByRole("button")[0];
        buttonZero.click();
        const counter = +container.querySelector("#counter").textContent;
        expect(counter).toBe(1);
    });

    test("count down number", () => {
        const { container } = render(<RotateButton />);
        const buttonOne = screen.getAllByRole("button")[1];
        buttonOne.click();
        const counter = +container.querySelector("#counter").textContent;
        expect(counter).toBe(-1);
    });
});
