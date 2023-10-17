import {
  CoreH1, CoreH2, CoreH3, CoreH4, CoreH5, CoreH6, CoreStack 
} from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function HeadingDocs() {
  return (
    <>
      <CoreH4>Heading Docs</CoreH4>

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