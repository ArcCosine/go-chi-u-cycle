import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import CycleArea from "../components/CycleArea";

describe("Cycle component test", ()=>{
    test("render test", ()=>{
        const { container } = render(<CycleArea />);
        expect(container).toMatchSnapshot();
    })
});
