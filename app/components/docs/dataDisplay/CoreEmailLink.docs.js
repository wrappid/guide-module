import { CoreClasses, CoreEmailLink, CoreH4 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreEmailLinkDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreEmailLink
      </CoreH4>

      <CodeSample
        title={"Simple CoreEmailLink"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreEmailLink email="pritam@rxefy"></CoreEmailLink>
        `}
        renderElement={
          <CoreEmailLink email="pritam@rxefy"></CoreEmailLink>
        } />

      <ComponentProps component={CoreEmailLink} />

    </>
  );
}
