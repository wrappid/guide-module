import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreContainerDocs() {
  return (
    <>
      <CoreH4>CoreContainer</CoreH4>
  
      <CoreTypographyBody1>
        {"The container centers your content horizontally. It's the most basic layout element."}
      </CoreTypographyBody1>

      <CoreTypographyBody1>
      While containers can be nested, most layouts do not require a nested container.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Fluid(NOT_WORKING)"}
        description={"A fluid container width is bounded by the maxWidth prop value."}
        code={`
<CoreContainer maxWidth="sm">
  <CoreBox styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK, CoreClasses.HEIGHT.H_75]} />
</CoreContainer>
        `}
        renderElement={<>

        </>}
      />

      <CodeSample
        title={"Fixed(NOT_WORKING)"}
        description={"If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoi"}
        code={`
<CoreContainer fixed>
    <CoreBox styleClasses={[CoreClasses.BG.BG_PRIMARY_DARK, CoreClasses.HEIGHT.H_75]} />
</CoreContainer>`}
        renderElement={<>
          
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreContainer} /> */}
      
    </>
  );
}