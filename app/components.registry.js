import TestComponent from "./components/TestComponent";
import TestComponentWeb from "./components/TestComponentWeb";
import TestComponentMobile from "./components/TestComponentMobile";

export const ComponentRegistry = {
    TestComponents: {
        comp: TestComponents,
    },
    TestComponentsWeb: {
        comp: TestComponentsWeb,
        mobile: false
    },
    TestComponentsMobile: {
        comp: TestComponentsMobile,
        web: false
    }
}