import { CoreClasses, CoreH4, CoreLabel, CoreStack } from "@wrappid/core";

import CodeSample from "../../CodeSample";

export default function CoreLabelDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreLabel
      </CoreH4>

      <CodeSample
        title="Basic CoreLabel"
        description=""
        code={`
<CoreStack direction="column">
  <CoreLabel>This is Lable 1</CoreLabel><CoreLabel>This is Lable 2</CoreLabel><CoreLabel>This is Lable 3</CoreLabel>
</CoreStack>        
`}
        renderElement={
          <>
            <CoreStack direction="column">
              <CoreLabel>This is Lable 1</CoreLabel><CoreLabel>This is Lable 2</CoreLabel><CoreLabel>This is Lable 3</CoreLabel>
            </CoreStack>
          </>
        }
      />
    </>
  );
}
