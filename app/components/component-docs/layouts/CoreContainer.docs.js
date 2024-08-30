
import {
  CoreBox,
  CoreClasses,
  CoreContainer
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreContainerDocs() {
  return (
    <ComponentDocs
      component={CoreContainer}
      description="The container centers your content horizontally. It's the most basic layout element."
      samples={
        <>
          <CodeSample
            title={"Fluid"}
            description="A fluid container width is bounded by the maxWidth prop value."
            code={`<CoreContainer maxWidth="sm">
  <CoreBox height="500px" styleClasses={[CoreClasses.BG.BG_INFO]} />
</CoreContainer>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreContainer } from "@wrappid/core";

export default function BasicCoreBox() {

  return (
    <CoreContainer maxWidth="sm">
      <CoreBox height="500px" styleClasses={[CoreClasses.BG.BG_INFO]} />
    </CoreContainer>
  );
}`}
            renderElement={
              <CoreContainer maxWidth="sm">
                <CoreBox height="500px" styleClasses={[CoreClasses.BG.BG_INFO]} />
              </CoreContainer>
            }
          />

          <CodeSample
            title={"Fixed"}
            description="If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoint"
            code={`<CoreContainer fixed>
  <CoreBox height="30rem" styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]} />
</CoreContainer>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreContainer } from "@wrappid/core";

export default function BasicCoreBox() {

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_50]}>
      <CoreContainer fixed>
        <CoreBox height="30rem" styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]} />
      </CoreContainer>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_50]}>
                <CoreContainer fixed>
                  <CoreBox height="30rem" styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK]} />
                </CoreContainer>
              </CoreBox>
            }
          />
        </>
      }
    />

  );
}