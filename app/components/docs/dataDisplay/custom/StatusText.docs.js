import { CoreClasses, CoreH4, StatusText } from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function StatusTextDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      StatusText
      </CoreH4>

      <CodeSample
        title={"Simple StatusText (NOT WORKONH)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<StatusText status="ACTIVE" ></StatusText>
        `}
        renderElement={<>
          <StatusText status="ACTIVE" ></StatusText>
        </>}
      />
    </>
  );
}
