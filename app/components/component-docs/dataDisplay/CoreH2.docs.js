import { CoreBox, CoreClasses, CoreH2, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreH2Docs() {
  return (
    <>
      <ComponentDocs
        component={CoreH2}
        description={
          <CoreTypographyBody1>
        CoreH2 are used to indicate subheadings within a page.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"CoreH2 Usage"}
              description={"This sample of CoreH2"}
              expandedCode={`import { CoreH2 } from "@wrappid/core";
                
export default function BasiCoreH2(){
  return (
    <CoreH2>h2.Heading</CoreH2>
  );
}`}
              code={"<CoreH2>h2.Heading</CoreH2>"}
              renderElement={<CoreH2>h2.Heading</CoreH2>}
            />

            <CodeSample
              title={"Alignment"}
              description={"Here's an example of an CoreH2 with different alignments."}
              code={`<CoreStack direction="column">
  <CoreH2 align="left">h2.Heading</CoreH2>

  <CoreH2 align="center">h2.Heading</CoreH2>

  <CoreH2 align="right">h2.Heading</CoreH2>

  <CoreH2 align="justify">h2.Heading</CoreH2>

  <CoreH2 align="inherit">h2.Heading</CoreH2>
</CoreStack>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreH2, CoreStack } from "@wrappid/core";
                
export default function AllignmentCoreH2(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
      <CoreStack direction="column">
        <CoreH2 align="left">h2.Heading</CoreH2>

        <CoreH2 align="center">h2.Heading</CoreH2>

        <CoreH2 align="right">h2.Heading</CoreH2>

        <CoreH2 align="justify">h2.Heading</CoreH2>

        <CoreH2 align="inherit">h2.Heading</CoreH2>
      </CoreStack>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.PADDING.P2]}>
                    <CoreStack direction="column">
                      <CoreH2 align="left">h2.Heading</CoreH2>

                      <CoreH2 align="center">h2.Heading</CoreH2>

                      <CoreH2 align="right">h2.Heading</CoreH2>

                      <CoreH2 align="justify">h2.Heading</CoreH2>

                      <CoreH2 align="inherit">h2.Heading</CoreH2>
                    </CoreStack>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Gutter Bottom"}
              description={"A gutter bottom in CoreH2 typically refers to a space between the bottom of the text and the next element."}
              code={"<CoreH2 gutterBottom={true}>h2.Heading</CoreH2>"}
              expandedCode={`import { CoreBox, CoreClasses, CoreH2 } from "@wrappid/core";
                
export default function GutterBottomCoreH2(){
  return (
      <CoreH2 gutterBottom={true}>h2.Heading</CoreH2>
  );
}`}
              renderElement={
                <>
                  <CoreH2 gutterBottom={true}>h2.Heading</CoreH2>
                </>
              }
            />

            <CodeSample
              title={"No wrap"}
              description={<>
                <CoreTypographyBody1>
                The nowrap in CoreH2 component prevents the text from wrapping to the next line, if it exceeds the container{"'"}s width. This can be useful for creating fixed-width headers, labels, or other elements where you want the text to remain on a single line.
                </CoreTypographyBody1>
              </>}
              code={`<CoreH2 noWrap={true}>h2.Heading with no wrap true</CoreH2>
 <CoreH2 noWrap={false}>h2.Heading</CoreH2>`}
              expandedCode={`import { CoreBox, CoreH2 } from "@wrappid/core";
                
export default function NowrapCoreH2(){
  return (
    <CoreBox>            
      <CoreH2 noWrap={true}>h2.Heading with no wrap true</CoreH2>

      <CoreH2 noWrap={false}>h2.Heading</CoreH2>
    </CoreBox>
  );
}
  `}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_25]}>              
                    <CoreH2 noWrap={true}>h2.Heading with no wrap true</CoreH2>

                    <CoreH2 noWrap={false}>h2.Heading</CoreH2>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Paragraph"}
              description={"If this is true the text will have a bottom margin."}
              code={`<CoreH2 paragraph={true}>h2.Heading</CoreH2>
<CoreH2 paragraph={false}>h2.Heading</CoreH2>`}
              expandedCode={`import { CoreBox, CoreH2 } from "@wrappid/core";
                
export default function ParagrapheH2(){
  return (
    <CoreBox>
      <CoreH2 paragraph={true}>h2.Heading</CoreH2>

      <CoreH2 paragraph={false}>h2.Heading</CoreH2>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreH2 paragraph={true}>h2.Heading</CoreH2>

                    <CoreH2 paragraph={false}>h2.Heading</CoreH2>
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
