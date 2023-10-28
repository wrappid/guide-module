import { CoreClasses, CoreH4, CorePhoneLink } from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function CorePhoneLinkDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CorePhoneLink
      </CoreH4>

      <CodeSample
        title={"Simple CoreMarkdownViewer "}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CorePhoneLink phone="987878675" verified={true}></CorePhoneLink>
        `}
        renderElement={<>
          <CorePhoneLink phone="987878675" verified={true}></CorePhoneLink>
        </>}
      />

    </>
  );
}
