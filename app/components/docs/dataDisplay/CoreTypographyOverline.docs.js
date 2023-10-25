import { CoreH4, CoreTypographyOverline } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyOverlineDocs() {
  return (
    <>
      <CoreH4>{`CoreTypographyOverline`}</CoreH4>
      <CoreTypographyOverline>COMPONENT_DESCRIPTION</CoreTypographyOverline>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographyOverline>
    OVERLINE TEXT
</CoreTypographyOverline>`}
        renderElement={
          <>
            <CoreTypographyOverline>OVERLINE TEXT</CoreTypographyOverline>
          </>
        }
      />
      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
