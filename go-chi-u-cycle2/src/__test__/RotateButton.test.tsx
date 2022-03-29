import { describe, expect, test } from "vitest";
import RotateButton from "../components/RotateButton";
import { render } from "@testing-library/react";

describe("Rotate button test", ()=>{
    test("button render test", ()=>{
        const { container } = render(<RotateButton />);
        expect(container).toMatchSnapshot();
    })
});
