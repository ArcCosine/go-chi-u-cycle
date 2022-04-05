import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import CycleArea from "../components/CycleArea";

describe("Cycle component test", ()=>{
    test("render test", ()=>{
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
        const { container } = render(<CycleArea images={images} />);
        expect(container).toMatchSnapshot();
    })
});
