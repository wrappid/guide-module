import { CoreBox, CoreClasses, CoreH3, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreH3Docs() {
  return (
    <>
      <ComponentDocs
        component={CoreH3}
        description={
          <CoreTypographyBody1>
        CoreH3 are used to indicate subheadings within a page. They are typically smaller and less prominent than CoreH2, but still important for organizing and structuring your content.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"CoreH3 Usage"}
              description={"This sample of CoreH3"}
              expandedCode={`import { CoreH3 } from "@wrappid/core";
                
export default function BasiCoreH3(){
  return (
    <CoreH3>h3.Heading</CoreH3>
  );
}`}
              code={"<CoreH3>h3.Heading</CoreH3>"}
              renderElement={<CoreH3>h3.Heading</CoreH3>}
            />

            <CodeSample
              title={"Alignment"}
              description={"Here's an example of an CoreH3 with different alignments."}
              code={`<CoreStack direction="column">
  <CoreH3 align="left">h3.Heading</CoreH3>

  <CoreH3 align="center">h3.Heading</CoreH3>

  <CoreH3 align="right">h3.Heading</CoreH3>

  <CoreH3 align="justify">h3.Heading</CoreH3>

  <CoreH3 align="inherit">h3.Heading</CoreH3>
</CoreStack>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreH3, CoreStack } from "@wrappid/core";
                
export default function AllignmentCoreH3(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
      <CoreStack direction="column">
        <CoreH3 align="left">h3.Heading</CoreH3>

        <CoreH3 align="center">h3.Heading</CoreH3>

        <CoreH3 align="right">h3.Heading</CoreH3>

        <CoreH3 align="justify">h3.Heading</CoreH3>

        <CoreH3 align="inherit">h3.Heading</CoreH3>
      </CoreStack>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
                    <CoreStack direction="column">
                      <CoreH3 align="left">h3.Heading</CoreH3>

                      <CoreH3 align="center">h3.Heading</CoreH3>

                      <CoreH3 align="right">h3.Heading</CoreH3>

                      <CoreH3 align="justify">h3.Heading</CoreH3>

                      <CoreH3 align="inherit">h3.Heading</CoreH3>
                    </CoreStack>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Gutter Bottom"}
              description={"A gutter bottom in CoreH3 typically refers to a space between the bottom of the text and the next element."}
              code={"<CoreH3 gutterBottom={true}>h3.Heading</CoreH3>"}
              expandedCode={`import { CoreBox, CoreClasses, CoreH3 } from "@wrappid/core";
                
export default function GutterBottomCoreH3(){
  return (
      <CoreH3 gutterBottom={true}>h3.Heading</CoreH3>
  );
}`}
              renderElement={
                <>
                  <CoreH3 gutterBottom={true}>h3.Heading</CoreH3>
                </>
              }
            />

            <CodeSample
              title={"No wrap"}
              description={<>
                <CoreTypographyBody1>
                The nowrap in CoreH3 component prevents the text from wrapping to the next line, if it exceeds the container{"'"}s width. This can be useful for creating fixed-width headers, labels, or other elements where you want the text to remain on a single line.
                </CoreTypographyBody1>
              </>}
              code={`<CoreH3 noWrap={true}>h3.Heading with no wrap true</CoreH3>
 <CoreH3 noWrap={false}>h3.Heading</CoreH3>`}
              expandedCode={`import { CoreBox, CoreH3 } from "@wrappid/core";
                
export default function NowrapCoreH3(){
  return (
    <CoreBox>            
      <CoreH3 noWrap={true}>h3.Heading with no wrap true</CoreH3>

      <CoreH3 noWrap={false}>h3.Heading</CoreH3>
    </CoreBox>
  );
}
  `}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_25]}>              
                    <CoreH3 noWrap={true}>h3.Heading with no wrap true</CoreH3>

                    <CoreH3 noWrap={false}>h3.Heading</CoreH3>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Paragraph"}
              description={"If this is true the text will have a bottom margin."}
              code={`<CoreH3 paragraph={true}>h3.Heading</CoreH3>
<CoreH3 paragraph={false}>h3.Heading</CoreH3>`}
              expandedCode={`import { CoreBox, CoreH3 } from "@wrappid/core";
                
export default function ParagrapheH3(){
  return (
    <CoreBox>
      <CoreH3 paragraph={true}>h3.Heading</CoreH3>

      <CoreH3 paragraph={false}>h3.Heading</CoreH3>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreH3 paragraph={true}>h3.Heading</CoreH3>

                    <CoreH3 paragraph={false}>h3.Heading</CoreH3>
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
