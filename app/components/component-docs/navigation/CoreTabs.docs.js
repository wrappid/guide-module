import {
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreTabsDocs() {
  return (
    <>
      <CoreH4>CoreTabs</CoreH4>

      <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
        <CoreTypographyBody1>
      Tabs make it easy to explore and switch between different views.
        </CoreTypographyBody1>

        <CoreTypographyBody1>
        Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
        </CoreTypographyBody1>
      </CoreStack>
  
      <CodeSample
        title={"Basic tabs(NOT_WORKING)"}
        description={"A basic example with tab panels.  "}
        code={"PRE-"}
        renderElement={<></>}
      />
        
      <CodeSample
        title={"(NOT_WORKING)"}
        description={""}
        code={"PRE-"}
        renderElement={<></>}
      />

      <CodeSample
        title={"(NOT_WORKING)"}
        description={""}
        code={"PRE-"}
        renderElement={<></>}
      />

      <CodeSample
        title={"(NOT_WORKING)"}
        description={""}
        code={"PRE-"}
        renderElement={<></>}
      />

      <CodeSample
        title={"(NOT_WORKING)"}
        description={""}
        code={"PRE-"}
        renderElement={<></>}
      />

      {/* <ComponentProps component={CoreTabs} /> */}
      
    </>
  );
}