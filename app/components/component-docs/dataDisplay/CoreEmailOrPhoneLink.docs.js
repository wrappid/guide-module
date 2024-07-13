import { CoreClasses, CoreEmailLink, CoreEmailOrPhoneLink, CoreH4, CoreStack } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
import CodeImport from "../../CodeImport";

export default function CoreEmailOrPhoneLinkDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreEmailOrPhoneLink
      </CoreH4>
<CodeImport name="CoreEmailLink" />
      <CodeSample
        title={"Simple CoreEmailLink (NOT WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreStack direction="column">
  
  <CoreEmailLink email="pritam@rxefy"></CoreEmailLink>

  <CoreEmailLink phone="8777083277"></CoreEmailLink>
  
</CoreStack>
        `}
        renderElement={
          <>
            <CoreStack direction="column">
              <CoreEmailLink email="pritam@rxefy"></CoreEmailLink>

              <CoreEmailLink phone="8777083277"></CoreEmailLink>
              
            </CoreStack>
          </>
        } />

      <ComponentProps component={CoreEmailOrPhoneLink} />

    </>
    
  );
}
