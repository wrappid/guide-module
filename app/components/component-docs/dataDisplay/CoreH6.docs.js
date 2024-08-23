import { CoreBox, CoreClasses, CoreH6, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreH6Docs() {
  return (
    <>
      <ComponentDocs
        component={CoreH6}
        description={
          <CoreTypographyBody1>
              CoreH6 is the smallest level of heading. They are typically used for the most minor subheadings or for captions within a page.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"CoreH6 Usage"}
              description={"This sample of CoreH6"}
              expandedCode={`import { CoreH6 } from "@wrappid/core";
                
export default function BasiCoreH6(){
  return (
    <CoreH6>h6.Heading</CoreH6>
  );
}`}
              code={"<CoreH6>h6.Heading</CoreH6>"}
              renderElement={<CoreH6>h6.Heading</CoreH6>}
            />

            <CodeSample
              title={"Alignment"}
              description={"Here's an example of an CoreH6 with different alignments."}
              code={`<CoreStack direction="column">
  <CoreH6 align="left">h6.Heading</CoreH6>

  <CoreH6 align="center">h6.Heading</CoreH6>

  <CoreH6 align="right">h6.Heading</CoreH6>

  <CoreH6 align="justify">h6.Heading</CoreH6>

  <CoreH6 align="inherit">h6.Heading</CoreH6>
</CoreStack>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreH6, CoreStack } from "@wrappid/core";
                
export default function AllignmentCoreH6(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
      <CoreStack direction="column">
        <CoreH6 align="left">h6.Heading</CoreH6>

        <CoreH6 align="center">h6.Heading</CoreH6>

        <CoreH6 align="right">h6.Heading</CoreH6>

        <CoreH6 align="justify">h6.Heading</CoreH6>

        <CoreH6 align="inherit">h6.Heading</CoreH6>
      </CoreStack>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
                    <CoreStack direction="column">
                      <CoreH6 align="left">h6.Heading</CoreH6>

                      <CoreH6 align="center">h6.Heading</CoreH6>

                      <CoreH6 align="right">h6.Heading</CoreH6>

                      <CoreH6 align="justify">h6.Heading</CoreH6>

                      <CoreH6 align="inherit">h6.Heading</CoreH6>
                    </CoreStack>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Gutter Bottom"}
              description={"A gutter bottom in CoreH6 typically refers to a space between the bottom of the text and the next element."}
              code={"<CoreH6 gutterBottom={true}>h6.Heading</CoreH6>"}
              expandedCode={`import { CoreBox, CoreClasses, CoreH6 } from "@wrappid/core";
                
export default function GutterBottomCoreH6(){
  return (
      <CoreH6 gutterBottom={true}>h6.Heading</CoreH6>
  );
}`}
              renderElement={
                <>
                  <CoreH6 gutterBottom={true}>h6.Heading</CoreH6>
                </>
              }
            />

            <CodeSample
              title={"No wrap"}
              description={<>
                <CoreTypographyBody1>
                The nowrap in CoreH6 component prevents the text from wrapping to the next line, if it exceeds the container{"'"}s width. This can be useful for creating fixed-width headers, labels, or other elements where you want the text to remain on a single line.
                </CoreTypographyBody1>
              </>}
              code={`<CoreH6 noWrap={true}>h6.Heading with no wrap true</CoreH6>
 <CoreH6 noWrap={false}>h6.Heading</CoreH6>`}
              expandedCode={`import { CoreBox, CoreH6 } from "@wrappid/core";
                
export default function NowrapCoreH6(){
  return (
    <CoreBox>            
      <CoreH6 noWrap={true}>h6.Heading with no wrap true</CoreH6>

      <CoreH6 noWrap={false}>h6.Heading</CoreH6>
    </CoreBox>
  );
}
  `}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_25]}>              
                    <CoreH6 noWrap={true}>h6.Heading with no wrap true</CoreH6>

                    <CoreH6 noWrap={false}>h6.Heading</CoreH6>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Paragraph"}
              description={"If this is true the text will have a bottom margin."}
              code={`<CoreH6 paragraph={true}>h6.Heading</CoreH6>
<CoreH6 paragraph={false}>h6.Heading</CoreH6>`}
              expandedCode={`import { CoreBox, CoreH6 } from "@wrappid/core";
                
export default function ParagrapheH6(){
  return (
    <CoreBox>
      <CoreH6 paragraph={true}>h6.Heading</CoreH6>

      <CoreH6 paragraph={false}>h6.Heading</CoreH6>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreH6 paragraph={true}>h6.Heading</CoreH6>

                    <CoreH6 paragraph={false}>h6.Heading</CoreH6>
                  </CoreBox>
                </>
              }
            />
          </>
        }
      />

    </>
  );
}
