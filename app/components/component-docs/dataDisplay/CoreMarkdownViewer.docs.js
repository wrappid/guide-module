import { CoreClasses, CoreH4, CoreMarkdownViewer } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreMarkdownViewerDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreMarkdownViewer
      </CoreH4>

      <CodeSample
        title={"Simple CoreMarkdownViewer "}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreMarkdownViewer></CoreMarkdownViewer>
        `}
        renderElement={<>
          <CoreMarkdownViewer></CoreMarkdownViewer>
        </>}
      />

      <ComponentProps component={CoreMarkdownViewer} />

    </>
  );
}
