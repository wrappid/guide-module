import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographyCaption
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographyCaption;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographyCaptionDocs() {
  return (
    <ComponentDocs
      component={CoreTypographyCaption}
      description={`The ${CORE_COMPONENT_NAME} component is used to display caption text.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographyCaption>
  This is a CoreTypographyCaption sample.
</CoreTypographyCaption>`}
            expandedCode={`import { CoreTypographyCaption } from "@wrappid/core";

export default function SampleCoreTypographyCaption() {
  return (
    <>
      <CoreTypographyCaption>
            This is a CoreTypographyCaption sample.
      </CoreTypographyCaption>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyCaption>
            This is a CoreTypographyCaption sample.
                </CoreTypographyCaption>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographyCaption with different alignments."}
            code={`<CoreTypographyCaption align="left">CoreTypographyCaption Alignment left</CoreTypographyCaption>

<CoreTypographyCaption align="center">CoreTypographyCaption Alignment center</CoreTypographyCaption>

<CoreTypographyCaption align="right">CoreTypographyCaption Alignment right</CoreTypographyCaption>

<CoreTypographyCaption align="justify">CoreTypographyCaption Alignment justify</CoreTypographyCaption>

<CoreTypographyCaption align="inherit">CoreTypographyCaption Alignment inherit</CoreTypographyCaption>
`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographyCaption } from "@wrappid/core";

export default function AlignmentCoreTypographyCaption() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographyCaption align="left">CoreTypographyCaption Alignment left</CoreTypographyCaption>

          <CoreTypographyCaption align="center">CoreTypographyCaption Alignment center</CoreTypographyCaption>

          <CoreTypographyCaption align="right">CoreTypographyCaption Alignment right</CoreTypographyCaption>

          <CoreTypographyCaption align="justify">CoreTypographyCaption Alignment justify</CoreTypographyCaption>

          <CoreTypographyCaption align="inherit">CoreTypographyCaption Alignment inherit</CoreTypographyCaption>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographyCaption align="left">CoreTypographyCaption Alignment left</CoreTypographyCaption>

                    <CoreTypographyCaption align="center">CoreTypographyCaption Alignment center</CoreTypographyCaption>

                    <CoreTypographyCaption align="right">CoreTypographyCaption Alignment right</CoreTypographyCaption>

                    <CoreTypographyCaption align="justify">CoreTypographyCaption Alignment justify</CoreTypographyCaption>

                    <CoreTypographyCaption align="inherit">CoreTypographyCaption Alignment inherit</CoreTypographyCaption>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographyCaption will have a bottom margin"}
            code={`<CoreTypographyCaption gutterBottom={true}>
  CoreTypographyCaption with gutter bottom.
</CoreTypographyCaption>`}
            expandedCode={`import { CoreTypographyCaption } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographyCaption gutterBottom={true}>
        CoreTypographyCaption with gutter bottom.
      </CoreTypographyCaption>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyCaption gutterBottom={true}>
                  CoreTypographyCaption with gutter bottom.
                </CoreTypographyCaption>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographyCaption with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographyCaption paragraph={true}>
  CoreTypographyCaption with paragraph true.
</CoreTypographyCaption>

<CoreTypographyCaption paragraph={false}>
  CoreTypographyCaption with paragraph false.
</CoreTypographyCaption`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyCaption } from "@wrappid/core";

export default function ParagraphCoreTypographyCaption() {
  return (
    <>
      <CoreBox>
        <CoreTypographyCaption paragraph={true}>
          CoreTypographyCaption with paragraph true.
        </CoreTypographyCaption>

        <CoreTypographyCaption paragraph={false}>
          CoreTypographyCaption with paragraph false.
        </CoreTypographyCaption>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographyCaption paragraph={true}>
                    CoreTypographyCaption with paragraph true.
                  </CoreTypographyCaption>

                  <CoreTypographyCaption paragraph={false}>
                    CoreTypographyCaption with paragraph false.
                  </CoreTypographyCaption>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}