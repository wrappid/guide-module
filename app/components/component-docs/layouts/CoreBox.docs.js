import {
  CoreClasses,
  CoreH4,
  CoreTypographyBody1, 
  CoreBox,
  CoreH6
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreBoxDocs() {
  return (
    <>
      <CoreH4>CoreBox</CoreH4>
  
      <CoreTypographyBody1>
      The Box component is a generic, theme-aware container with access to CSS utilities from MUI System.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basics"}
        description={"The Box component renders as a <div> by default, but you can swap in any other valid HTML tag or React component using the component prop. The demo below replaces the <div> with a <section> element:"}
        code={`<CoreBox component="section" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.DEV_BORDER]}>
        <CoreH6>This is a section container</CoreH6>
 </CoreBox>`}
        renderElement={<>
          <CoreBox component="section" styleClasses={[CoreClasses.PADDING.P1, CoreClasses.DEV_BORDER]}>
            <CoreH6>This is a section container</CoreH6>
          </CoreBox>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreBox} /> */}
      
    </>
  );
}