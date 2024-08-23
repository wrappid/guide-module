import {
  CoreBox,
  CoreClasses,
  CoreStack,
  CoreTypographyButton
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTypographyButton;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTypographyButtonDocs() {
  return (
    <ComponentDocs
      component={CoreTypographyButton}
      description={`The ${CORE_COMPONENT_NAME} applies the theme typography styles of button.`}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} Usage`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreTypographyButton>
  This is a CoreTypographyButton sample.
</CoreTypographyButton>`}
            expandedCode={`import { CoreTypographyButton } from "@wrappid/core";

export default function SampleCoreTypographyButton() {
  return (
    <>
      <CoreTypographyButton>
            This is a CoreTypographyButton sample.
      </CoreTypographyButton>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyButton>
            This is a CoreTypographyButton sample.
                </CoreTypographyButton>
              </>
            }
          />

          <CodeSample
            title={"Alignment"}
            description={"CoreTypographyButton with different alignments."}
            code={`<CoreTypographyButton align="left">CoreTypographyButton Alignment left</CoreTypographyButton>

<CoreTypographyButton align="center">CoreTypographyButton Alignment center</CoreTypographyButton>

<CoreTypographyButton align="right">CoreTypographyButton Alignment right</CoreTypographyButton>

<CoreTypographyButton align="justify">CoreTypographyButton Alignment justify</CoreTypographyButton>

<CoreTypographyButton align="inherit">CoreTypographyButton Alignment inherit</CoreTypographyButton>
`}
            expandedCode={`import { CoreBox, CoreClasses, CoreStack, CoreTypographyButton } from "@wrappid/core";

export default function AlignmentCoreTypographyButton() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
        <CoreStack direction="column">
          <CoreTypographyButton align="left">CoreTypographyButton Alignment left</CoreTypographyButton>

          <CoreTypographyButton align="center">CoreTypographyButton Alignment center</CoreTypographyButton>

          <CoreTypographyButton align="right">CoreTypographyButton Alignment right</CoreTypographyButton>

          <CoreTypographyButton align="justify">CoreTypographyButton Alignment justify</CoreTypographyButton>

          <CoreTypographyButton align="inherit">CoreTypographyButton Alignment inherit</CoreTypographyButton>
        </CoreStack>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P1]}>
                  <CoreStack direction="column">
                    <CoreTypographyButton align="left">CoreTypographyButton Alignment left</CoreTypographyButton>

                    <CoreTypographyButton align="center">CoreTypographyButton Alignment center</CoreTypographyButton>

                    <CoreTypographyButton align="right">CoreTypographyButton Alignment right</CoreTypographyButton>

                    <CoreTypographyButton align="justify">CoreTypographyButton Alignment justify</CoreTypographyButton>

                    <CoreTypographyButton align="inherit">CoreTypographyButton Alignment inherit</CoreTypographyButton>
                  </CoreStack>
                </CoreBox>
              </>

            }
          />

          <CodeSample
            title={"Gutter Bottom"}
            description={"The CoreTypographyButton will have a bottom margin."}
            code={`<CoreTypographyButton gutterBottom={true}>
  CoreTypographyButton with gutter bottom.
</CoreTypographyButton>`}
            expandedCode={`import { CoreTypographyButton } from "@wrappid/core";

export default function GutterBottomTypographyBody1() {
  return (
    <>
      <CoreTypographyButton gutterBottom={true}>
        CoreTypographyButton with gutter bottom.
      </CoreTypographyButton>
    </>
  );
}`}
            renderElement={
              <>
                <CoreTypographyButton gutterBottom={true}>
                  CoreTypographyButton with gutter bottom.
                </CoreTypographyButton>
              </>
            }
          />

          <CodeSample
            title={"No wrap"}
            description={<>
        This is CoreTypographyButton with <CodeBlock>noWrap</CodeBlock>.
            </>}
            code={`<CoreTypographyButton noWrap={true}>
  CoreTypographyButton with no wrap true. Make window small to see the sample.
</CoreTypographyButton>

<CoreTypographyButton noWrap={false}>
  CoreTypographyButton with no wrap false.
</CoreTypographyButton>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyButton } from "@wrappid/core";

export default function NoWrapCoreTypographyButton() {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
        <CoreTypographyButton noWrap={true}>
          CoreTypographyButton with no wrap true. Make window small to see the sample.
        </CoreTypographyButton>

        <CoreTypographyButton noWrap={false}>
          CoreTypographyButton with no wrap false.
        </CoreTypographyButton>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.PADDING.P2]}>
                  <CoreTypographyButton noWrap={true}>
                    CoreTypographyButton with no wrap true. Make window small to see the sample.
                  </CoreTypographyButton>

                  <CoreTypographyButton noWrap={false}>
                    CoreTypographyButton with no wrap false.
                  </CoreTypographyButton>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Paragraph"}
            description={"This is CoreTypographyButton with paragraph prop. Using paragraph prop will add a margin below the component."}
            code={`<CoreTypographyButton paragraph={true}>
  CoreTypographyButton with paragraph true.
</CoreTypographyButton>

<CoreTypographyButton paragraph={false}>
  CoreTypographyButton with paragraph false.
</CoreTypographyButton>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreTypographyButton } from "@wrappid/core";

export default function ParagraphCoreTypographyButton() {
  return (
    <>
      <CoreBox>
        <CoreTypographyButton paragraph={true}>
          CoreTypographyButton with paragraph true.
        </CoreTypographyButton>

        <CoreTypographyButton paragraph={false}>
          CoreTypographyButton with paragraph false.
        </CoreTypographyButton>
      </CoreBox>
    </>
  );
}`}
            renderElement={
              <>
                <CoreBox>
                  <CoreTypographyButton paragraph={true}>
                    CoreTypographyButton with paragraph true.
                  </CoreTypographyButton>

                  <CoreTypographyButton paragraph={false}>
                    CoreTypographyButton with paragraph false.
                  </CoreTypographyButton>
                </CoreBox>
              </>
            }
          />
        </>
      }
    />
  );
}