import {
  CoreH4,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographySubtitle1,
  CoreTypographySubtitle2,
  CoreTypographyCaption,
  CoreTypographyOverline,
  CoreTypographyButton,
  CoreStack
} from "@wrappid/core";

import CodeSample from "../../CodeSample";

export default function CoreTypographyDocs() {
  return (
    <>
      <CoreH4>{"CoreTypography (NOT DEFINED)"}</CoreH4>

      <CoreTypographyBody1>COMPONENT_DESCRIPTION</CoreTypographyBody1>

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographyBody1>
  This is a CoreTypographyBody1 sample
</CoreTypographyBody1>
<CoreTypographyBody2>
  This is a CoreTypographyBody2 sample
</CoreTypographyBody2>
<CoreTypographySubtitle1>
  This is a CoreTypographySubtitle1 sample
</CoreTypographySubtitle1>
<CoreTypographySubtitle2>
  This is a CoreTypographySubtitle2 sample
</CoreTypographySubtitle2>
<CoreTypographyCaption>
  This is a CoreTypographyCaption sample
</CoreTypographyCaption>
<CoreTypographyOverline>
  This is a CoreTypographyOverline sample
</CoreTypographyOverline>
<CoreTypographyButton>
  This is a CoreTypographyButton sample
</CoreTypographyButton>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyBody1>
              This is a CoreTypographyBody1 sample
            </CoreTypographyBody1>

            <CoreTypographyBody2>
              This is a CoreTypographyBody2 sample
            </CoreTypographyBody2>

            <CoreTypographySubtitle1>
              This is a CoreTypographySubtitle1 sample
            </CoreTypographySubtitle1>

            <CoreTypographySubtitle2>
              This is a CoreTypographySubtitle2 sample
            </CoreTypographySubtitle2>

            <CoreTypographyCaption>
              This is a CoreTypographyCaption sample
            </CoreTypographyCaption>

            <CoreTypographyOverline>
              This is a CoreTypographyOverline sample
            </CoreTypographyOverline>

            <CoreTypographyButton>
              This is a CoreTypographyButton sample
            </CoreTypographyButton>
          </CoreStack>
        }
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreTypography} /> */}
    </>
  );
}
