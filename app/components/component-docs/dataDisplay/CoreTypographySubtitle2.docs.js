import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographySubtitle2
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographySubtitle2;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographySubtitle2Docs() {
  return (
    <ComponentDocs
      component={CoreTypographySubtitle2}
      description={`The ${CORE_COMPONENT_NAME} component is used to display subtitle.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographySubtitle2>
  This is a CoreTypographySubtitle2 sample.
</CoreTypographySubtitle2>`}
            expandedCode={`import { CoreTypographySubtitle2 } from "@wrappid/core";

export default function SampleCoreTypographySubtitle2() {
  return (
    <>
      <CoreTypographySubtitle2>
            This is a CoreTypographySubtitle2 sample.
      </CoreTypographySubtitle2>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographySubtitle2>
            This is a CoreTypographySubtitle2 sample.
                </CoreTypographySubtitle2>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographySubtitle2 with different alignments."}
            code={`<CoreTypographySubtitle2 align="left">CoreTypographySubtitle2 Alignment left</CoreTypographySubtitle2>

<CoreTypographySubtitle2 align="center">CoreTypographySubtitle2 Alignment center</CoreTypographySubtitle2>

<CoreTypographySubtitle2 align="right">CoreTypographySubtitle2 Alignment right</CoreTypographySubtitle2>

<CoreTypographySubtitle2 align="justify">CoreTypographySubtitle2 Alignment justify</CoreTypographySubtitle2>

<CoreTypographySubtitle2 align="inherit">CoreTypographySubtitle2 Alignment inherit</CoreTypographySubtitle2>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographySubtitle2 } from "@wrappid/core";

export default function AlignmentCoreTypographySubtitle2() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographySubtitle2 align="left">CoreTypographySubtitle2 Alignment left</CoreTypographySubtitle2>

          <CoreTypographySubtitle2 align="center">CoreTypographySubtitle2 Alignment center</CoreTypographySubtitle2>

          <CoreTypographySubtitle2 align="right">CoreTypographySubtitle2 Alignment right</CoreTypographySubtitle2>

          <CoreTypographySubtitle2 align="justify">CoreTypographySubtitle2 Alignment justify</CoreTypographySubtitle2>

          <CoreTypographySubtitle2 align="inherit">CoreTypographySubtitle2 Alignment inherit</CoreTypographySubtitle2>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographySubtitle2 align="left">CoreTypographySubtitle2 Alignment left</CoreTypographySubtitle2>

                    <CoreTypographySubtitle2 align="center">CoreTypographySubtitle2 Alignment center</CoreTypographySubtitle2>

                    <CoreTypographySubtitle2 align="right">CoreTypographySubtitle2 Alignment right</CoreTypographySubtitle2>

                    <CoreTypographySubtitle2 align="justify">CoreTypographySubtitle2 Alignment justify</CoreTypographySubtitle2>

                    <CoreTypographySubtitle2 align="inherit">CoreTypographySubtitle2 Alignment inherit</CoreTypographySubtitle2>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographySubtitle2 will have a bottom margin."}
            code={`<CoreTypographySubtitle2 gutterBottom={true}>
  CoreTypographySubtitle2 with gutter bottom.
</CoreTypographySubtitle2>`}
            expandedCode={`import { CoreTypographySubtitle2 } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographySubtitle2 gutterBottom={true}>
        CoreTypographySubtitle2 with gutter bottom.
      </CoreTypographySubtitle2>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographySubtitle2 gutterBottom={true}>
                  CoreTypographySubtitle2 with gutter bottom.
                </CoreTypographySubtitle2>
              </>
            }
          />

          <CodeSample
            title={"No wrap"}
            description={<>
        This is CoreTypographySubtitle2 with <CodeBlock>noWrap</CodeBlock>.
            </>}
            code={`<CoreTypographySubtitle2 noWrap={true}>
  CoreTypographySubtitle2 with no wrap true. Make window small to see the sample.
</CoreTypographySubtitle2>

<CoreTypographySubtitle2 noWrap={false}>
  CoreTypographySubtitle2 with no wrap false.
</CoreTypographySubtitle2>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographySubtitle2 } from "@wrappid/core";

export default function NoWrapCoreTypographySubtitle2() {
  return (
    <>
      <CoreTypographySubtitle2 noWrap={true}>
        CoreTypographySubtitle2 with no wrap true. Make window small to see the sample.
      </CoreTypographySubtitle2>

      <CoreTypographySubtitle2 noWrap={false}>
        CoreTypographySubtitle2 with no wrap false.
      </CoreTypographySubtitle2>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
                  <CoreTypographySubtitle2 noWrap={true}>
                    CoreTypographySubtitle2 with no wrap true. Make window small to see the sample.
                  </CoreTypographySubtitle2>

                  <CoreTypographySubtitle2 noWrap={false}>
                    CoreTypographySubtitle2 with no wrap false.
                  </CoreTypographySubtitle2>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographySubtitle2 with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographySubtitle2 paragraph={true}>
  CoreTypographySubtitle2 with paragraph true.
</CoreTypographySubtitle2>

<CoreTypographySubtitle2 paragraph={false}>
  CoreTypographySubtitle2 with paragraph false.
</CoreTypographySubtitle2>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographySubtitle2 } from "@wrappid/core";

export default function ParagraphCoreTypographySubtitle2() {
  return (
    <>
      <CoreBox>
        <CoreTypographySubtitle2 paragraph={true}>
          CoreTypographySubtitle2 with paragraph true.
        </CoreTypographySubtitle2>

        <CoreTypographySubtitle2 paragraph={false}>
          CoreTypographySubtitle2 with paragraph false.
        </CoreTypographySubtitle2>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographySubtitle2 paragraph={true}>
                    CoreTypographySubtitle2 with paragraph true.
                  </CoreTypographySubtitle2>

                  <CoreTypographySubtitle2 paragraph={false}>
                    CoreTypographySubtitle2 with paragraph false.
                  </CoreTypographySubtitle2>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}