import { CoreH4, CoreTypographySubtitle2, CoreTypography } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographySubtitle2Docs() {
  return (
    <>
      <CoreH4>{`CoreTypographySubtitle2`}</CoreH4>
      <CoreTypographySubtitle2>COMPONENT_DESCRIPTION</CoreTypographySubtitle2>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographySubtitle2>
    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Quos blanditiis tenetur
</CoreTypographySubtitle2>`}
        renderElement={
          <>
            <CoreTypographySubtitle2>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </CoreTypographySubtitle2>
          </>
        }
      />
      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
