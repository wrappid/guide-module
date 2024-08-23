import { CoreBox, CoreClasses, CoreH5, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreH5Docs() {
  return (
    <>
      <ComponentDocs
        component={CoreH5}
        description={
          <CoreTypographyBody1>
              CoreH5 used for the smallest level of subheadings on a page. They are typically used for minor section headings or to emphasize specific points within a larger section.    
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"CoreH5 Usage"}
              description={"This sample of CoreH5"}
              expandedCode={`import { CoreH5 } from "@wrappid/core";
                
export default function BasiCoreH5(){
  return (
    <CoreH5>h5.Heading</CoreH5>
  );
}`}
              code={"<CoreH5>h5.Heading</CoreH5>"}
              renderElement={<CoreH5>h5.Heading</CoreH5>}
            />

            <CodeSample
              title={"Alignment"}
              description={"Here's an example of an CoreH5 with different alignments."}
              code={`<CoreStack direction="column">
  <CoreH5 align="left">h5.Heading</CoreH5>

  <CoreH5 align="center">h5.Heading</CoreH5>

  <CoreH5 align="right">h5.Heading</CoreH5>

  <CoreH5 align="justify">h5.Heading</CoreH5>

  <CoreH5 align="inherit">h5.Heading</CoreH5>
</CoreStack>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreH5, CoreStack } from "@wrappid/core";
                
export default function AllignmentCoreH5(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
      <CoreStack direction="column">
        <CoreH5 align="left">h5.Heading</CoreH5>

        <CoreH5 align="center">h5.Heading</CoreH5>

        <CoreH5 align="right">h5.Heading</CoreH5>

        <CoreH5 align="justify">h5.Heading</CoreH5>

        <CoreH5 align="inherit">h5.Heading</CoreH5>
      </CoreStack>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
                    <CoreStack direction="column">
                      <CoreH5 align="left">h5.Heading</CoreH5>

                      <CoreH5 align="center">h5.Heading</CoreH5>

                      <CoreH5 align="right">h5.Heading</CoreH5>

                      <CoreH5 align="justify">h5.Heading</CoreH5>

                      <CoreH5 align="inherit">h5.Heading</CoreH5>
                    </CoreStack>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Gutter Bottom"}
              description={"A gutter bottom in CoreH5 typically refers to a space between the bottom of the text and the next element."}
              code={"<CoreH5 gutterBottom={true}>h5.Heading</CoreH5>"}
              expandedCode={`import { CoreBox, CoreClasses, CoreH5 } from "@wrappid/core";
                
export default function GutterBottomCoreH5(){
  return (
      <CoreH5 gutterBottom={true}>h5.Heading</CoreH5>
  );
}`}
              renderElement={
                <>
                  <CoreH5 gutterBottom={true}>h5.Heading</CoreH5>
                </>
              }
            />

            <CodeSample
              title={"No wrap"}
              description={<>
                <CoreTypographyBody1>
                The nowrap in CoreH5 component prevents the text from wrapping to the next line, if it exceeds the container{"'"}s width. This can be useful for creating fixed-width headers, labels, or other elements where you want the text to remain on a single line.
                </CoreTypographyBody1>
              </>}
              code={`<CoreH5 noWrap={true}>h5.Heading with no wrap true</CoreH5>
 <CoreH5 noWrap={false}>h5.Heading</CoreH5>`}
              expandedCode={`import { CoreBox, CoreH5 } from "@wrappid/core";
                
export default function NowrapCoreH5(){
  return (
    <CoreBox>            
      <CoreH5 noWrap={true}>h5.Heading with no wrap true</CoreH5>

      <CoreH5 noWrap={false}>h5.Heading</CoreH5>
    </CoreBox>
  );
}
  `}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_25]}>              
                    <CoreH5 noWrap={true}>h5.Heading with no wrap true</CoreH5>

                    <CoreH5 noWrap={false}>h5.Heading</CoreH5>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Paragraph"}
              description={"If this is true the text will have a bottom margin."}
              code={`<CoreH5 paragraph={true}>h5.Heading</CoreH5>
<CoreH5 paragraph={false}>h5.Heading</CoreH5>`}
              expandedCode={`import { CoreBox, CoreH5 } from "@wrappid/core";
                
export default function ParagrapheH5(){
  return (
    <CoreBox>
      <CoreH5 paragraph={true}>h5.Heading</CoreH5>

      <CoreH5 paragraph={false}>h5.Heading</CoreH5>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreH5 paragraph={true}>h5.Heading</CoreH5>

                    <CoreH5 paragraph={false}>h5.Heading</CoreH5>
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
