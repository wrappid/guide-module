import {
  CoreH1, CoreH2, CoreH3, CoreH4, CoreH5, CoreH6, CoreStack, CoreTypographyBody1
} from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function HeadingDocs() {
  return (
    <>
      <CoreH4>Heading Docs</CoreH4>
      <CoreTypographyBody1>
      Use CoreH(x) to present your design and content as clearly and efficiently as possible.
        </CoreTypographyBody1>
      <CoreTypographyBody1>
      6 levels of headings are supported.
      </CoreTypographyBody1>
      <CodeSample
        title={"Heading Sample"}
        code={`
<CoreH1>h1. Heading</CoreH1>
<CoreH2>h2. Heading</CoreH2>
<CoreH3>h3. Heading</CoreH3>
<CoreH4>h4. Heading</CoreH4>
<CoreH5>h5. Heading</CoreH5>
<CoreH6>h6. Heading</CoreH6>
        `}
        renderElement={
          <CoreStack direction="column">
            <CoreH1>h1. Heading</CoreH1>
            
            <CoreH2>h2. Heading</CoreH2>
            
            <CoreH3>h3. Heading</CoreH3>
            
            <CoreH4>h4. Heading</CoreH4>
            
            <CoreH5>h5. Heading</CoreH5>
            
            <CoreH6>h6. Heading</CoreH6>
          </CoreStack>
        }
      />
    </>
  );
}