import TestComponent from "./components/TestComponent";
import TestComponentMobile from "./components/TestComponentMobile";
import TestComponentWeb from "./components/TestComponentWeb";

export const ComponentRegistry = {
  TestComponents      : { comp: TestComponent },
  TestComponentsMobile: {
    comp: TestComponentMobile,
    web : false
  },
  TestComponentsWeb: {
    comp  : TestComponentWeb,
    mobile: false
  }
};