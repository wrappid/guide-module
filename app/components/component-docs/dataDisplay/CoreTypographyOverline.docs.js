import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographyOverline
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographyOverline;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographyOverlineDocs() {
  return (
    <ComponentDocs
      component={CoreTypographyOverline}
      description={`The ${CORE_COMPONENT_NAME} component is used to display overline text.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographyOverline>
  This is a CoreTypographyOverline sample.
</CoreTypographyOverline>`}
            expandedCode={`import { CoreTypographyOverline } from "@wrappid/core";

export default function SampleCoreTypographyOverline() {
  return (
    <>
      <CoreTypographyOverline>
            This is a CoreTypographyOverline sample.
      </CoreTypographyOverline>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyOverline>
            This is a CoreTypographyOverline sample.
                </CoreTypographyOverline>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographyOverline with different alignments."}
            code={`<CoreTypographyOverline align="left">CoreTypographyOverline Alignment left</CoreTypographyOverline>

<CoreTypographyOverline align="center">CoreTypographyOverline Alignment center</CoreTypographyOverline>

<CoreTypographyOverline align="right">CoreTypographyOverline Alignment right</CoreTypographyOverline>

<CoreTypographyOverline align="justify">CoreTypographyOverline Alignment justify</CoreTypographyOverline>

<CoreTypographyOverline align="inherit">CoreTypographyOverline Alignment inherit</CoreTypographyOverline>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographyOverline } from "@wrappid/core";

export default function AlignmentCoreTypographyOverline() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographyOverline align="left">CoreTypographyOverline Alignment left</CoreTypographyOverline>

          <CoreTypographyOverline align="center">CoreTypographyOverline Alignment center</CoreTypographyOverline>

          <CoreTypographyOverline align="right">CoreTypographyOverline Alignment right</CoreTypographyOverline>

          <CoreTypographyOverline align="justify">CoreTypographyOverline Alignment justify</CoreTypographyOverline>

          <CoreTypographyOverline align="inherit">CoreTypographyOverline Alignment inherit</CoreTypographyOverline>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographyOverline align="left">CoreTypographyOverline Alignment left</CoreTypographyOverline>

                    <CoreTypographyOverline align="center">CoreTypographyOverline Alignment center</CoreTypographyOverline>

                    <CoreTypographyOverline align="right">CoreTypographyOverline Alignment right</CoreTypographyOverline>

                    <CoreTypographyOverline align="justify">CoreTypographyOverline Alignment justify</CoreTypographyOverline>

                    <CoreTypographyOverline align="inherit">CoreTypographyOverline Alignment inherit</CoreTypographyOverline>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographyOverline will have a bottom margin."}
            code={`<CoreTypographyOverline gutterBottom={true}>
  CoreTypographyOverline with gutter bottom.
</CoreTypographyOverline>`}
            expandedCode={`import { CoreTypographyOverline } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographyOverline gutterBottom={true}>
        CoreTypographyOverline with gutter bottom.
      </CoreTypographyOverline>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyOverline gutterBottom={true}>
                  CoreTypographyOverline with gutter bottom.
                </CoreTypographyOverline>
              </>
            }
          />

          <CodeSample
            title={"No wrap"}
            description={<>
        This is CoreTypographyOverline with <CodeBlock>noWrap</CodeBlock>.
            </>}
            code={`<CoreTypographyOverline noWrap={true}>
  CoreTypographyOverline with no wrap true. Make window small to see the sample.
</CoreTypographyOverline>

<CoreTypographyOverline noWrap={false}>
  CoreTypographyOverline with no wrap false.
</CoreTypographyOverline>`}
            expandedCode={`import { CoreTypographyOverline } from "@wrappid/core";

export default function NoWrapCoreTypographyOverline() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
        <CoreTypographyOverline noWrap={true}>
          CoreTypographyOverline with no wrap true. Make window small to see the sample.
        </CoreTypographyOverline>

        <CoreTypographyOverline noWrap={false}>
          CoreTypographyOverline with no wrap false.
        </CoreTypographyOverline>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
                  <CoreTypographyOverline noWrap={true}>
                    CoreTypographyOverline with no wrap true. Make window small to see the sample.
                  </CoreTypographyOverline>

                  <CoreTypographyOverline noWrap={false}>
                    CoreTypographyOverline with no wrap false.
                  </CoreTypographyOverline>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographyOverline with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographyOverline paragraph={true}>
  CoreTypographyOverline with paragraph true.
</CoreTypographyOverline>

<CoreTypographyOverline paragraph={false}>
  CoreTypographyOverline with paragraph false.
</CoreTypographyOverline>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyOverline } from "@wrappid/core";

export default function ParagraphCoreTypographyOverline() {
  return (
    <>
      <CoreBox>
        <CoreTypographyOverline paragraph={true}>
          CoreTypographyOverline with paragraph true.
        </CoreTypographyOverline>

        <CoreTypographyOverline paragraph={false}>
          CoreTypographyOverline with paragraph false.
        </CoreTypographyOverline>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographyOverline paragraph={true}>
                    CoreTypographyOverline with paragraph true.
                  </CoreTypographyOverline>

                  <CoreTypographyOverline paragraph={false}>
                    CoreTypographyOverline with paragraph false.
                  </CoreTypographyOverline>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}