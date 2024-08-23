import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographyBody1;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographyBody1Docs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`The ${CORE_COMPONENT_NAME} component is used to display body text.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographyBody1>
  This is a CoreTypographyBody1 sample.
</CoreTypographyBody1>`}
            expandedCode={`import { CoreTypographyBody1 } from "@wrappid/core";

export default function SampleCoreTypographyBody1() {
  return (
    <>
      <CoreTypographyBody1>
            This is a CoreTypographyBody1 sample.
      </CoreTypographyBody1>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyBody1>
            This is a CoreTypographyBody1 sample.
                </CoreTypographyBody1>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographyBody1 with different alignments."}
            code={`<CoreTypographyBody1 align="left">CoreTypographyBody1 Alignment left</CoreTypographyBody1>

<CoreTypographyBody1 align="center">CoreTypographyBody1 Alignment center</CoreTypographyBody1>

<CoreTypographyBody1 align="right">CoreTypographyBody1 Alignment right</CoreTypographyBody1>

<CoreTypographyBody1 align="justify">CoreTypographyBody1 Alignment justify</CoreTypographyBody1>

<CoreTypographyBody1 align="inherit">CoreTypographyBody1 Alignment inherit</CoreTypographyBody1>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

export default function AlignmentCoreTypographyBody1() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographyBody1 align="left">CoreTypographyBody1 Alignment left</CoreTypographyBody1>

          <CoreTypographyBody1 align="center">CoreTypographyBody1 Alignment center</CoreTypographyBody1>

          <CoreTypographyBody1 align="right">CoreTypographyBody1 Alignment right</CoreTypographyBody1>

          <CoreTypographyBody1 align="justify">CoreTypographyBody1 Alignment justify</CoreTypographyBody1>

          <CoreTypographyBody1 align="inherit">CoreTypographyBody1 Alignment inherit</CoreTypographyBody1>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographyBody1 align="left">CoreTypographyBody1 Alignment left</CoreTypographyBody1>

                    <CoreTypographyBody1 align="center">CoreTypographyBody1 Alignment center</CoreTypographyBody1>

                    <CoreTypographyBody1 align="right">CoreTypographyBody1 Alignment right</CoreTypographyBody1>

                    <CoreTypographyBody1 align="justify">CoreTypographyBody1 Alignment justify</CoreTypographyBody1>

                    <CoreTypographyBody1 align="inherit">CoreTypographyBody1 Alignment inherit</CoreTypographyBody1>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographyBody1 will have a bottom margin"}
            code={`<CoreTypographyBody1 gutterBottom={true}>
  CoreTypographyBody1 with gutter bottom.
</CoreTypographyBody1>`}
            expandedCode={`import { CoreTypographyBody1 } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographyBody1 gutterBottom={true}>
        CoreTypographyBody1 with gutter bottom.
      </CoreTypographyBody1>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyBody1 gutterBottom={true}>
                  CoreTypographyBody1 with gutter bottom.
                </CoreTypographyBody1>
              </>
            }
          />

          <CodeSample
            title={"No wrap"}
            description={<>
        This is CoreTypographyBody1 with <CodeBlock>noWrap</CodeBlock>.
            </>}
            code={`<CoreTypographyBody1 noWrap={true}>
  CoreTypographyBody1 with no wrap true. Make window small to see the sample.
</CoreTypographyBody1>

<CoreTypographyBody1 noWrap={false}>
  CoreTypographyBody1 with no wrap false.
</CoreTypographyBody1>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyBody1 } from "@wrappid/core";

export default function NoWrapCoreTypographyBody1() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
        <CoreTypographyBody1 noWrap={true}>
          CoreTypographyBody1 with no wrap true. Make window small to see the sample.
        </CoreTypographyBody1>

        <CoreTypographyBody1 noWrap={false}>
          CoreTypographyBody1 with no wrap false.
        </CoreTypographyBody1>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
                  <CoreTypographyBody1 noWrap={true}>
                    CoreTypographyBody1 with no wrap true. Make window small to see the sample.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1 noWrap={false}>
                    CoreTypographyBody1 with no wrap false.
                  </CoreTypographyBody1>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographyBody1 with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographyBody1 paragraph={true}>
  CoreTypographyBody1 with paragraph true.
</CoreTypographyBody1>

<CoreTypographyBody1 paragraph={false}>
  CoreTypographyBody1 with paragraph false.
</CoreTypographyBody1>`}
            expandedCode={`import { CoreTypographyBody1 } from "@wrappid/core";

export default function ParagraphCoreTypographyBody1() {
  return (
    <>
      <CoreBox>
        <CoreTypographyBody1 paragraph={true}>
          CoreTypographyBody1 with paragraph true.
        </CoreTypographyBody1>

        <CoreTypographyBody1 paragraph={false}>
          CoreTypographyBody1 with paragraph false.
        </CoreTypographyBody1>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographyBody1 paragraph={true}>
                    CoreTypographyBody1 with paragraph true.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1 paragraph={false}>
                    CoreTypographyBody1 with paragraph false.
                  </CoreTypographyBody1>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}