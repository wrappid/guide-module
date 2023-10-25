import { CoreH4, CoreTypographySubtitle1, CoreTypography } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographySubtitle1Docs() {
  return (
    <>
      <CoreH4>{`CoreTypographySubtitle1`}</CoreH4>
      <CoreTypographySubtitle1>COMPONENT_DESCRIPTION</CoreTypographySubtitle1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographySubtitle1>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Quos blanditiis tenetur
</CoreTypographySubtitle1>`}
        renderElement={
          <>
            <CoreTypographySubtitle1>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </CoreTypographySubtitle1>
          </>
        }
      />
      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
