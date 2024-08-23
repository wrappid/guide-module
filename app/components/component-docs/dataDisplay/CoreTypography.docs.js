import {
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographySubtitle1,
  CoreTypographySubtitle2,
  CoreTypographyCaption,
  CoreTypographyOverline,
  CoreTypographyButton,
  CoreStack,
  CoreList,
  CoreTypography
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreTypographyDocs() {
  return (
    <ComponentDocs
      component={CoreTypography}
      importSnippet={false}
      propsTable={false}
      description={<>
        <CoreTypographyBody1><CodeBlock>CoreTypography</CodeBlock> component should not be used directly.</CoreTypographyBody1>

        <CoreList variant="HTML" listType="DECIMAL">
          <CoreTypographyBody1>CoreTypographyBody1 is used to display body text.</CoreTypographyBody1>

          <CoreTypographyBody1>CoreTypgraphyBody2 is used to display body text. This is smaller than CoreTypographyBody1.</CoreTypographyBody1>

          <CoreTypographyBody1>CoreTypgraphySubtitle1 is used to display subtitle styled text.</CoreTypographyBody1>

          <CoreTypographyBody1>CoreTypgraphySubtitle2 is used to display subtitle styled text. This is smaller than CoreTypographySubtitle1.</CoreTypographyBody1>

          <CoreTypographyBody1>CoreTypgraphyCaption is used to display caption styled text.</CoreTypographyBody1>

          <CoreTypographyBody1>CoreTypgraphyOverline is used to display overline styled text.</CoreTypographyBody1>

          <CoreTypographyBody1>CoreTypgraphyButton is used to display button styled text.</CoreTypographyBody1>
        </CoreList>
      </>}
      samples={
        <>
          <CodeSample
            title={"All CoreTypography samples"}
            description={"Below is a sample of all CoreTypography components."}
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
        </>
      }/>
  );
}
