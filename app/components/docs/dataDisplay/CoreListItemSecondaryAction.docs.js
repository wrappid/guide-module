import {
  CoreH4,
  CoreTypographyBody1,
  CoreAlert,
  CoreClasses
  // CoreListItemSecondaryAction
} from "@wrappid/core";

import CodeSample from "../../CodeSample";

export default function CoreListItemSecondaryActionDocs() {
  return (
    <>
      <CoreAlert severity="error" styleClasses={[CoreClasses.WIDTH.W_100]}>
        ListItemSecondaryAction Error: CoreListItemSecondaryAction is not implemented.
      </CoreAlert>

      <CoreH4>{"ListItemSecondaryAction (NOT_IMPLEMENTED)"}</CoreH4>

      <CoreTypographyBody1>COMPONENT_DESCRIPTION</CoreTypographyBody1>

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      {/* <ComponentProps component={CoreListItemSecondaryAction} /> */}
    </>
  );
}
