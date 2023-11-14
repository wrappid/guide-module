import { CoreClasses, CoreH4, CoreTimer } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTimerDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreTimer
      </CoreH4>

      <CodeSample
        title={"Simple CoreTimer (NOT WORKONH)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<StatusText status="ACTIVE" ></StatusText>
        `}
        renderElement={<>
          <CoreTimer ></CoreTimer>
        </>}
      />

      <ComponentProps component={CoreTimer} />

    </>
  );
}
