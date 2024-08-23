import { CoreBox, CoreClasses, CoreH1, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreH1Docs() {
  return (
    <>
      <ComponentDocs
        component={CoreH1}
        description={
          <CoreTypographyBody1>
         CoreH1 elements are the most important headings on a web page. They are typically used for the main title of a page or section.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"CoreH1 Usage"}
              description={"This sample of CoreH1"}
              expandedCode={`import { CoreH1 } from "@wrappid/core";
                
export default function BasiCoreH1(){
  return (
    <CoreH1>h1.Heading</CoreH1>
  );
}`}
              code={"<CoreH1>h1.Heading</CoreH1>"}
              renderElement={<CoreH1>h1.Heading</CoreH1>}
            />

            <CodeSample
              title={"Alignment"}
              description={"Here's an example of an CoreH1 with different alignments."}
              code={`<CoreStack direction="column">
  <CoreH1 align="left">h1.Heading</CoreH1>

  <CoreH1 align="center">h1.Heading</CoreH1>

  <CoreH1 align="right">h1.Heading</CoreH1>

  <CoreH1 align="justify">h1.Heading</CoreH1>

  <CoreH1 align="inherit">h1.Heading</CoreH1>
</CoreStack>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreH1, CoreStack } from "@wrappid/core";
                
export default function AllignmentCoreH1(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
      <CoreStack direction="column">
        <CoreH1 align="left">h1.Heading</CoreH1>

        <CoreH1 align="center">h1.Heading</CoreH1>

        <CoreH1 align="right">h1.Heading</CoreH1>

        <CoreH1 align="justify">h1.Heading</CoreH1>

        <CoreH1 align="inherit">h1.Heading</CoreH1>
      </CoreStack>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
                    <CoreStack direction="column">
                      <CoreH1 align="left">h1.Heading</CoreH1>

                      <CoreH1 align="center">h1.Heading</CoreH1>

                      <CoreH1 align="right">h1.Heading</CoreH1>

                      <CoreH1 align="justify">h1.Heading</CoreH1>

                      <CoreH1 align="inherit">h1.Heading</CoreH1>
                    </CoreStack>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Gutter Bottom"}
              description={"A gutter bottom in CoreH1 typically refers to a space between the bottom of the text and the next element."}
              code={"<CoreH1 gutterBottom={true}>h1.Heading</CoreH1>"}
              expandedCode={`import { CoreBox, CoreClasses, CoreH1 } from "@wrappid/core";
                
export default function GutterBottomCoreH1(){
  return (
      <CoreH1 gutterBottom={true}>h1.Heading</CoreH1>
  );
}`}
              renderElement={
                <>
                  <CoreH1 gutterBottom={true}>h1.Heading</CoreH1>
                </>
              }
            />

            <CodeSample
              title={"No wrap"}
              description={<>
                <CoreTypographyBody1>
                The nowrap in CoreH1 component prevents the text from wrapping to the next line, if it exceeds the container{"'"}s width. This can be useful for creating fixed-width headers, labels, or other elements where you want the text to remain on a single line.
                </CoreTypographyBody1>
              </>}
              code={`<CoreH1 noWrap={true}>h1.Heading with no wrap true</CoreH1>
 <CoreH1 noWrap={false}>h1.Heading</CoreH1>`}
              expandedCode={`import { CoreBox, CoreH1 } from "@wrappid/core";
                
export default function NowrapCoreH1(){
  return (
    <CoreBox>            
      <CoreH1 noWrap={true}>h1.Heading with no wrap true</CoreH1>

      <CoreH1 noWrap={false}>h1.Heading</CoreH1>
    </CoreBox>
  );
}
  `}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_25]}>              
                    <CoreH1 noWrap={true}>h1.Heading with no wrap true</CoreH1>

                    <CoreH1 noWrap={false}>h1.Heading</CoreH1>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Paragraph"}
              description={"If this is true the text will have a bottom margin."}
              code={`<CoreH1 paragraph={true}>h1.Heading</CoreH1>
<CoreH1 paragraph={false}>h1.Heading</CoreH1>`}
              expandedCode={`import { CoreBox, CoreH1 } from "@wrappid/core";
                
export default function ParagrapheH1(){
  return (
    <CoreBox>
      <CoreH1 paragraph={true}>h1.Heading</CoreH1>

      <CoreH1 paragraph={false}>h1.Heading</CoreH1>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreH1 paragraph={true}>h1.Heading</CoreH1>

                    <CoreH1 paragraph={false}>h1.Heading</CoreH1>
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
