import "@testing-library/jest-dom";
import crypto from "crypto";
// import "@testing-library/jest-dom/extend-expect";
// import "regenerator-runtime/runtime";

window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {},
        };
    };
