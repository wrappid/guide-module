import {
  CoreH4,
  CoreTypographyBody1
  // CoreRating
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreRatingDocs() {
  return (
    <>
      <CoreH4>CoreRating</CoreH4>
      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
        </CoreTypographyBody1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />
      {/* <ComponentProps component={CoreRating} /> */}
    </>
  );
}
