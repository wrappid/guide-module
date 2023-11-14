import {
  CoreH4,
  CoreTypographyBody1,
  CoreListItemButton
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemButtonDocs() {
  return (
    <>
      <CoreH4>{"CoreListItemButton (NOT DEFINED)"}</CoreH4>

      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreListItemButton(NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreListItemButton} />
    </>
  );
}
