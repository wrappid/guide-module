import {
  CoreH4,
  CoreTypographyBody1,
  // CoreButtonBase
} from "@wrappid/core";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreButtonBaseDocs() {
  return (
    <>
      <CoreH4>CoreButtonBase</CoreH4>
      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_IMPLEMENTED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />
      {/* <ComponentProps component={CoreButtonBase} /> */}
    </>
  );
}