import {
  CoreH4,
  CoreTypographyBody1
  // CoreButtonBase
} from "@wrappid/core";

import CodeSample from "../../CodeSample";

export default function CoreButtonBaseDocs() {
  return (
    <>
      <CoreH4>CoreButtonBase</CoreH4>

      <CoreTypographyBody1>
        The Text Buttons, Contained Buttons, Floating Action Buttons and Icon
        Buttons are built on top of the same component: the ButtonBase. You can
        take advantage of this lower-level component to build custom
        interactions.
      </CoreTypographyBody1>

      <CodeSample
        title={"Complex button (NOT_IMPLEMENTED)"}
        description={" "}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreButtonBase} /> */}
    </>
  );
}
