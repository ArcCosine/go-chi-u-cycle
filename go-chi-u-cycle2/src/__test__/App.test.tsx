import '@testing-library/jest-dom';
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App dom test", () => {
    test("render test", () => {
        const { container } = render(<App />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
