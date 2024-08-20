import {
  CoreBox,
  CoreH4,
  CoreLabel,
  CoreTypographyBody1
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreLabelDocs() {
  return (
    <>
      <CoreH4>CoreLabel</CoreH4>

      <CoreTypographyBody1>
        CoreLabel helps you to put a label on your component.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreLabel usage"}
        description={"Below is an example of CoreLabel usage."}
        code={`<CoreBox>
  <CoreLabel>I am CoreLabel</CoreLabel>

  <CoreTypographyBody1>Above text is a sample CoreLabel</CoreTypographyBody1>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox>
              <CoreLabel>I am CoreLabel</CoreLabel>

              <CoreTypographyBody1>Above text is a sample CoreLabel</CoreTypographyBody1>
            </CoreBox>

          </>
        }
      />

      <ComponentProps component={CoreLabel} />

    </>
  );
}