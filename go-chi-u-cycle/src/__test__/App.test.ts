import { describe, expect, test, beforeEach, afterEach } from "vitest";
import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

describe("App dom test", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        ReactDOM.render( <App />,container);
    });

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    });
    
    test("render test", () => {
        const header = document.querySelectorAll(".App-header");
        expect(header.textContent).toBe('Go-chi-u-cycle');
    });

});
