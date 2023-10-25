import {
  CoreH4,
  CoreTypographyBody1,
  CoreIcon
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreIconsDocs() {
  return (
    <>
      <CoreH4>CoreIcon</CoreH4>
      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />
      <ComponentProps component={CoreIcon} />
    </>
  );
}