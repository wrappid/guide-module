import { CoreTypographyBody1, CoreClasses, CoreSpan } from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreSpanDocs() {
  return (
    <ComponentDocs
      component={CoreSpan}
      description="The CoreSpan creates a span element in wrappid."
      samples={
        <>
          <CodeSample
            title={"Basic CoreSpan"}
            description="Here is a example of CoreSpan."
            code={`<CoreContainer maxWidth="sm">
  <CoreBox height="500px" styleClasses={[CoreClasses.BG.BG_INFO]} />
</CoreContainer>`}
            expandedCode={`import { CoreTypographyBody1, CoreClasses, CoreSpan } from "@wrappid/core";
export default function BasicCoreBox() {
  return (
    <CoreTypographyBody1>
      Add the basil, <CoreSpan styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>pine nuts and garlic</CoreSpan> to a blender and blend into a paste.
    </CoreTypographyBody1>
  );
}`}
            renderElement={
              <CoreTypographyBody1>Add the basil, <CoreSpan styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>pine nuts and garlic</CoreSpan> to a blender and blend into a paste.</CoreTypographyBody1>
            }
          />
        </>
      }
    />
  );
}