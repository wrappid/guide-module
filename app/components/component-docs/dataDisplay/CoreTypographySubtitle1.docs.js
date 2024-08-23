import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographySubtitle1
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographySubtitle1;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographySubtitle1Docs() {
  return (
    <ComponentDocs
      component={CoreTypographySubtitle1}
      description={`The ${CORE_COMPONENT_NAME} component is used to display subtitle.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographySubtitle1>
  This is a CoreTypographySubtitle1 sample.
</CoreTypographySubtitle1>`}
            expandedCode={`import { CoreTypographySubtitle1 } from "@wrappid/core";

export default function SampleCoreTypographySubtitle1() {
  return (
    <>
      <CoreTypographySubtitle1>
            This is a CoreTypographySubtitle1 sample.
      </CoreTypographySubtitle1>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographySubtitle1>
            This is a CoreTypographySubtitle1 sample.
                </CoreTypographySubtitle1>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographySubtitle1 with different alignments."}
            code={`<CoreTypographySubtitle1 align="left">CoreTypographySubtitle1 Alignment left</CoreTypographySubtitle1>

<CoreTypographySubtitle1 align="center">CoreTypographySubtitle1 Alignment center</CoreTypographySubtitle1>

<CoreTypographySubtitle1 align="right">CoreTypographySubtitle1 Alignment right</CoreTypographySubtitle1>

<CoreTypographySubtitle1 align="justify">CoreTypographySubtitle1 Alignment justify</CoreTypographySubtitle1>

<CoreTypographySubtitle1 align="inherit">CoreTypographySubtitle1 Alignment inherit</CoreTypographySubtitle1>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographySubtitle1 } from "@wrappid/core";

export default function AlignmentCoreTypographySubtitle1() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographySubtitle1 align="left">CoreTypographySubtitle1 Alignment left</CoreTypographySubtitle1>

          <CoreTypographySubtitle1 align="center">CoreTypographySubtitle1 Alignment center</CoreTypographySubtitle1>

          <CoreTypographySubtitle1 align="right">CoreTypographySubtitle1 Alignment right</CoreTypographySubtitle1>

          <CoreTypographySubtitle1 align="justify">CoreTypographySubtitle1 Alignment justify</CoreTypographySubtitle1>

          <CoreTypographySubtitle1 align="inherit">CoreTypographySubtitle1 Alignment inherit</CoreTypographySubtitle1>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographySubtitle1 align="left">CoreTypographySubtitle1 Alignment left</CoreTypographySubtitle1>

                    <CoreTypographySubtitle1 align="center">CoreTypographySubtitle1 Alignment center</CoreTypographySubtitle1>

                    <CoreTypographySubtitle1 align="right">CoreTypographySubtitle1 Alignment right</CoreTypographySubtitle1>

                    <CoreTypographySubtitle1 align="justify">CoreTypographySubtitle1 Alignment justify</CoreTypographySubtitle1>

                    <CoreTypographySubtitle1 align="inherit">CoreTypographySubtitle1 Alignment inherit</CoreTypographySubtitle1>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographySubtitle1 will have a bottom margin."}
            code={`<CoreTypographySubtitle1 gutterBottom={true}>
  CoreTypographySubtitle1 with gutter bottom.
</CoreTypographySubtitle1>`}
            expandedCode={`import { CoreTypographySubtitle1 } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographySubtitle1 gutterBottom={true}>
        CoreTypographySubtitle1 with gutter bottom.
      </CoreTypographySubtitle1>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographySubtitle1 gutterBottom={true}>
                  CoreTypographySubtitle1 with gutter bottom.
                </CoreTypographySubtitle1>
              </>
            }
          />

          <CodeSample
            title={"No wrap"}
            description={<>
        This is CoreTypographySubtitle1 with <CodeBlock>noWrap</CodeBlock>.
            </>}
            code={`<CoreTypographySubtitle1 noWrap={true}>
  CoreTypographySubtitle1 with no wrap true. Make window small to see the sample.
</CoreTypographySubtitle1>

<CoreTypographySubtitle1 noWrap={false}>
  CoreTypographySubtitle1 with no wrap false.
</CoreTypographySubtitle1>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographySubtitle1 } from "@wrappid/core";

export default function NoWrapCoreTypographySubtitle1() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
        <CoreTypographySubtitle1 noWrap={true}>
          CoreTypographySubtitle1 with no wrap true. Make window small to see the sample.
        </CoreTypographySubtitle1>

        <CoreTypographySubtitle1 noWrap={false}>
          CoreTypographySubtitle1 with no wrap false.
        </CoreTypographySubtitle1>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
                  <CoreTypographySubtitle1 noWrap={true}>
                    CoreTypographySubtitle1 with no wrap true. Make window small to see the sample.
                  </CoreTypographySubtitle1>

                  <CoreTypographySubtitle1 noWrap={false}>
                    CoreTypographySubtitle1 with no wrap false.
                  </CoreTypographySubtitle1>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographySubtitle1 with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographySubtitle1 paragraph={true}>
  CoreTypographySubtitle1 with paragraph true.
</CoreTypographySubtitle1>

<CoreTypographySubtitle1 paragraph={false}>
  CoreTypographySubtitle1 with paragraph false.
</CoreTypographySubtitle1>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographySubtitle1 } from "@wrappid/core";

export default function ParagraphCoreTypographySubtitle1() {
  return (
    <>
      <CoreBox>
        <CoreTypographySubtitle1 paragraph={true}>
          CoreTypographySubtitle1 with paragraph true.
        </CoreTypographySubtitle1>

        <CoreTypographySubtitle1 paragraph={false}>
          CoreTypographySubtitle1 with paragraph false.
        </CoreTypographySubtitle1>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographySubtitle1 paragraph={true}>
                    CoreTypographySubtitle1 with paragraph true.
                  </CoreTypographySubtitle1>

                  <CoreTypographySubtitle1 paragraph={false}>
                    CoreTypographySubtitle1 with paragraph false.
                  </CoreTypographySubtitle1>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}