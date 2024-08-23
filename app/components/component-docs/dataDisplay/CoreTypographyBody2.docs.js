import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographyBody2
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographyBody2;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographyBody2Docs() {
  return (
    <ComponentDocs
      component={CoreTypographyBody2}
      description={`The ${CORE_COMPONENT_NAME} component is used to display body text. This is smaller than CoreTypographyBody1.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographyBody2>
  This is a CoreTypographyBody2 sample.
</CoreTypographyBody2>`}
            expandedCode={`import { CoreTypographyBody2 } from "@wrappid/core";

export default function SampleCoreTypographyBody2() {
  return (
    <>
      <CoreTypographyBody2>
            This is a CoreTypographyBody2 sample.
      </CoreTypographyBody2>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyBody2>
            This is a CoreTypographyBody2 sample.
                </CoreTypographyBody2>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographyBody2 with different alignments."}
            code={`<CoreTypographyBody2 align="left">CoreTypographyBody2 Alignment left</CoreTypographyBody2>

<CoreTypographyBody2 align="center">CoreTypographyBody2 Alignment center</CoreTypographyBody2>

<CoreTypographyBody2 align="right">CoreTypographyBody2 Alignment right</CoreTypographyBody2>

<CoreTypographyBody2 align="justify">CoreTypographyBody2 Alignment justify</CoreTypographyBody2>

<CoreTypographyBody2 align="inherit">CoreTypographyBody2 Alignment inherit</CoreTypographyBody2>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographyBody2 } from "@wrappid/core";

export default function AlignmentCoreTypographyBody2() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographyBody2 align="left">CoreTypographyBody2 Alignment left</CoreTypographyBody2>

          <CoreTypographyBody2 align="center">CoreTypographyBody2 Alignment center</CoreTypographyBody2>

          <CoreTypographyBody2 align="right">CoreTypographyBody2 Alignment right</CoreTypographyBody2>

          <CoreTypographyBody2 align="justify">CoreTypographyBody2 Alignment justify</CoreTypographyBody2>

          <CoreTypographyBody2 align="inherit">CoreTypographyBody2 Alignment inherit</CoreTypographyBody2>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographyBody2 align="left">CoreTypographyBody2 Alignment left</CoreTypographyBody2>

                    <CoreTypographyBody2 align="center">CoreTypographyBody2 Alignment center</CoreTypographyBody2>

                    <CoreTypographyBody2 align="right">CoreTypographyBody2 Alignment right</CoreTypographyBody2>

                    <CoreTypographyBody2 align="justify">CoreTypographyBody2 Alignment justify</CoreTypographyBody2>

                    <CoreTypographyBody2 align="inherit">CoreTypographyBody2 Alignment inherit</CoreTypographyBody2>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographyBody2 will have a bottom margin"}
            code={`<CoreTypographyBody2 gutterBottom={true}>
  CoreTypographyBody2 with gutter bottom.
</CoreTypographyBody2>`}
            expandedCode={`import { CoreTypographyBody2 } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographyBody2 gutterBottom={true}>
        CoreTypographyBody2 with gutter bottom.
      </CoreTypographyBody2>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyBody2 gutterBottom={true}>
                  CoreTypographyBody2 with gutter bottom.
                </CoreTypographyBody2>
              </>
            }
          />

          <CodeSample
            title={"No wrap"}
            description={<>
        This is CoreTypographyBody2 with <CodeBlock>noWrap</CodeBlock>.
            </>}
            code={`<CoreTypographyBody2 noWrap={true}>
  CoreTypographyBody2 with no wrap true. Make window small to see the sample.
</CoreTypographyBody2>

<CoreTypographyBody2 noWrap={false}>
  CoreTypographyBody2 with no wrap false.
</CoreTypographyBody2>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyBody2 } from "@wrappid/core";

export default function NoWrapCoreTypographyBody2() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
        <CoreTypographyBody2 noWrap={true}>
          CoreTypographyBody2 with no wrap true. Make window small to see the sample.
        </CoreTypographyBody2>

        <CoreTypographyBody2 noWrap={false}>
          CoreTypographyBody2 with no wrap false.
        </CoreTypographyBody2>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
                  <CoreTypographyBody2 noWrap={true}>
                    CoreTypographyBody2 with no wrap true. Make window small to see the sample.
                  </CoreTypographyBody2>

                  <CoreTypographyBody2 noWrap={false}>
                    CoreTypographyBody2 with no wrap false.
                  </CoreTypographyBody2>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographyBody2 with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographyBody2 paragraph={true}>
  CoreTypographyBody2 with paragraph true.
</CoreTypographyBody2>

<CoreTypographyBody2 paragraph={false}>
  CoreTypographyBody2 with paragraph false.
</CoreTypographyBody2`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyBody2 } from "@wrappid/core";

export default function ParagraphCoreTypographyBody2() {
  return (
    <>
      <CoreBox>
        <CoreTypographyBody2 paragraph={true}>
          CoreTypographyBody2 with paragraph true.
        </CoreTypographyBody2>

        <CoreTypographyBody2 paragraph={false}>
          CoreTypographyBody2 with paragraph false.
        </CoreTypographyBody2>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographyBody2 paragraph={true}>
                    CoreTypographyBody2 with paragraph true.
                  </CoreTypographyBody2>

                  <CoreTypographyBody2 paragraph={false}>
                    CoreTypographyBody2 with paragraph false.
                  </CoreTypographyBody2>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}