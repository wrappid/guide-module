import { CoreBox, CoreClasses, CoreH4, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreH4Docs() {
  return (
    <>
      <ComponentDocs
        component={CoreH4}
        description={
          <CoreTypographyBody1>
        CoreH4 are used to indicate subheadings within a page. They are typically smaller and less prominent than CoreH3.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"CoreH4 Usage"}
              description={"This sample of CoreH4"}
              expandedCode={`import { CoreH4 } from "@wrappid/core";
                
export default function BasiCoreH4(){
  return (
    <CoreH4>h4.Heading</CoreH4>
  );
}`}
              code={"<CoreH4>h4.Heading</CoreH4>"}
              renderElement={<CoreH4>h4.Heading</CoreH4>}
            />

            <CodeSample
              title={"Alignment"}
              description={"Here's an example of an CoreH4 with different alignments."}
              code={`<CoreStack direction="column">
  <CoreH4 align="left">h4.Heading</CoreH4>

  <CoreH4 align="center">h4.Heading</CoreH4>

  <CoreH4 align="right">h4.Heading</CoreH4>

  <CoreH4 align="justify">h4.Heading</CoreH4>

  <CoreH4 align="inherit">h4.Heading</CoreH4>
</CoreStack>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreH4, CoreStack } from "@wrappid/core";
                
export default function AllignmentCoreH4(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
      <CoreStack direction="column">
        <CoreH4 align="left">h4.Heading</CoreH4>

        <CoreH4 align="center">h4.Heading</CoreH4>

        <CoreH4 align="right">h4.Heading</CoreH4>

        <CoreH4 align="justify">h4.Heading</CoreH4>

        <CoreH4 align="inherit">h4.Heading</CoreH4>
      </CoreStack>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
                    <CoreStack direction="column">
                      <CoreH4 align="left">h4.Heading</CoreH4>

                      <CoreH4 align="center">h4.Heading</CoreH4>

                      <CoreH4 align="right">h4.Heading</CoreH4>

                      <CoreH4 align="justify">h4.Heading</CoreH4>

                      <CoreH4 align="inherit">h4.Heading</CoreH4>
                    </CoreStack>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Gutter Bottom"}
              description={"A gutter bottom in CoreH4 typically refers to a space between the bottom of the text and the next element."}
              code={"<CoreH4 gutterBottom={true}>h4.Heading</CoreH4>"}
              expandedCode={`import { CoreBox, CoreClasses, CoreH4 } from "@wrappid/core";
                
export default function GutterBottomCoreH4(){
  return (
      <CoreH4 gutterBottom={true}>h4.Heading</CoreH4>
  );
}`}
              renderElement={
                <>
                  <CoreH4 gutterBottom={true}>h4.Heading</CoreH4>
                </>
              }
            />

            <CodeSample
              title={"No wrap"}
              description={<>
                <CoreTypographyBody1>
                The nowrap in CoreH4 component prevents the text from wrapping to the next line, if it exceeds the container{"'"}s width. This can be useful for creating fixed-width headers, labels, or other elements where you want the text to remain on a single line.
                </CoreTypographyBody1>
              </>}
              code={`<CoreH4 noWrap={true}>h4.Heading with no wrap true</CoreH4>
 <CoreH4 noWrap={false}>h4.Heading</CoreH4>`}
              expandedCode={`import { CoreBox, CoreH4 } from "@wrappid/core";
                
export default function NowrapCoreH4(){
  return (
    <CoreBox>            
      <CoreH4 noWrap={true}>h4.Heading with no wrap true</CoreH4>

      <CoreH4 noWrap={false}>h4.Heading</CoreH4>
    </CoreBox>
  );
}
  `}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_25]}>              
                    <CoreH4 noWrap={true}>h4.Heading with no wrap true</CoreH4>

                    <CoreH4 noWrap={false}>h4.Heading</CoreH4>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Paragraph"}
              description={"If this is true the text will have a bottom margin."}
              code={`<CoreH4 paragraph={true}>h4.Heading</CoreH4>
<CoreH4 paragraph={false}>h4.Heading</CoreH4>`}
              expandedCode={`import { CoreBox, CoreH4 } from "@wrappid/core";
                
export default function ParagrapheH4(){
  return (
    <CoreBox>
      <CoreH4 paragraph={true}>h4.Heading</CoreH4>

      <CoreH4 paragraph={false}>h4.Heading</CoreH4>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreH4 paragraph={true}>h4.Heading</CoreH4>

                    <CoreH4 paragraph={false}>h4.Heading</CoreH4>
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
