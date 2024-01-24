import {
  CoreH4,
  CoreTypographyBody1
  // CoreSnackbar
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";

export default function CoreDialogActionsDocs() {
  return (
    <>
      <CoreH4>{"CoreDialogActions (NOT DEFINED)"}</CoreH4>

      <CoreTypographyBody1>COMPONENT_DESCRIPTION</CoreTypographyBody1>

      <CodeImport name="CoreDialogActions" />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreDialogActions} /> */}
    </>
  );
}
