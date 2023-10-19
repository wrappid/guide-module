import {
  CoreH4,
  CoreTypographyBody1,
  CoreSkeleton
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreSkeletonDocs() {
  return (
    <>
      <CoreH4>CoreSkeleton</CoreH4>
      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />
      <ComponentProps component={CoreSkeleton} />
    </>
  );
}
