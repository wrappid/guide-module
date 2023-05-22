import TestComponent from "./components/TestComponent";
import TestComponentWeb from "./components/TestComponentWeb";
import TestComponentMobile from "./components/TestComponentMobile";

export const ComponentRegistry = {
    TestComponents: {
        comp: TestComponent,
    },
    TestComponentsWeb: {
        comp: TestComponentWeb,
        mobile: false
    },
    TestComponentsMobile: {
        comp: TestComponentMobile,
        web: false
    }
}