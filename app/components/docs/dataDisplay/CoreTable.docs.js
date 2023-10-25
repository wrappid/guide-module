import {
  CoreH4,
  CoreTypographyBody1,
  CoreTable
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTableDocs() {
  return (
    <>
      <CoreH4>CoreTable</CoreH4>
      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />
      <ComponentProps component={CoreTable} />
    </>
  );
}