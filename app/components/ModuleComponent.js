import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

import ModuleClasses from "../styles/ModuleClasses";

export default function ModuleComponent() {
  return (
    <CoreBox styleClasses={[CoreClasses.PADDING.P5, ModuleClasses.TEST_WRAPPID_STYLE_CLASS]}>
      <CoreTypographyBody1>ModuleComponent</CoreTypographyBody1>
    </CoreBox>
  );
}
