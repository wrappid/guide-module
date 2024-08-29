import {
  CoreClasses, 
  CoreBox,
  CoreH6
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreBoxDocs() {
  return (
    <ComponentDocs
      component={CoreBox}
      description="The Box component is a generic, theme-aware container with access to CSS utilities from MUI System."
      samples={
        <>
          <CodeSample
            title={"Introduction"}
            description="CoreBox component is a generic container for grouping other components. It's a fundamental building block when working with Wrappid you can think of it as a <div> with extra built-in features, like access to your app's theme and the prop."
          />
            
          <CodeSample
            title={"Usage"}
            description="CoreBox component differs from other containers available in Wrappid in that its usage is intended to be multipurpose and open-ended, just like a <div>. Components like Container, Stack and Paper, by contrast, feature usage-specific props that make them ideal for certain use cases: Container for main layout orientation, Stack for one-dimensional layouts, and Paper for elevated surfaces."
          />

          <CodeSample
            title={"Basics CoreBox"}
            description="CoreBox component renders as a <div> by default, but you can swap in any other valid HTML tag or React component using the component prop. The demo below replaces the <div> with a <section> element"
            code={`<CoreBox component="section" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.DEV_BORDER]}>
  <CoreH6>This is a section container</CoreH6>
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreH6 } from "@wrappid/core";

export default function BasicCoreBox() {

  return (
    <CoreBox component="section" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.DEV_BORDER]}>
      <CoreH6>This is a section container</CoreH6>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox component="section" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.DEV_BORDER]}>
                <CoreH6>This is a section container</CoreH6>
              </CoreBox>
            }
          />
        </>
      }
    />
  );
}