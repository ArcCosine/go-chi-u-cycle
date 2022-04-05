import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import CycleArea from "../components/CycleArea";
import { CountProvider } from "../context/CountContext";

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
        const { container } = render(<CountProvider><CycleArea images={images} /></CountProvider>);
        expect(container).toMatchSnapshot();
    })
});
