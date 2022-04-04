import { describe, expect, test } from "vitest";
import { render } from "@testing-@testing-library/react";

import Cycle from "../components/Cycle";

describe("Cycle component test", ()=>{
    test("render test", ()=>{
        const { container } = render(<Cycle />);
        expect(container).toMatchSnapshot();
    })
});
