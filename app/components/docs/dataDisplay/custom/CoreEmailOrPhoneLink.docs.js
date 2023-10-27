import { CoreClasses, CoreEmailLink, CoreH4, CoreStack } from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function CoreEmailOrPhoneLinkDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreEmailOrPhoneLink
      </CoreH4>

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
    </>
    
  );
}
