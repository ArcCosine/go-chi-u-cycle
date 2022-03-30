import { describe, expect, test, afterEach } from "vitest";
import RotateButton from "../components/RotateButton";
import { render, screen, cleanup } from "@testing-library/react";

//afterEach(cleanup);

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

    test("initial count", () => {
        const { container } = render(<RotateButton />);
        expect(screen.getByTestId("countup").textContent).toBe('0');
    });

    test("count up number", () => {
        const { container } = render(<RotateButton />);
        const buttonZero = screen.getAllByRole("button")[0];
        buttonZero.click();
        expect(screen.getByTestId("countup").textContent).toBe("1");
    });

    test("count down number", () => {
        const { container } = render(<RotateButton />);
        const buttonOne = screen.getAllByRole("button")[1];
        buttonOne.click();
        expect(screen.getByTestId("countup").textContent).toBe("-1");
    });
});
