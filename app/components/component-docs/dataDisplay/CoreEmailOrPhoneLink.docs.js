import { CoreClasses, CoreEmailLink, CoreEmailOrPhoneLink, CoreH4, CoreStack } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreEmailOrPhoneLinkDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreEmailOrPhoneLink
      </CoreH4>

      <CodeSample
        title={"Simple CoreEmailLink"}
        description={"This is a customized wrappid component built using mui icon. It will be used for displaying user's email id. "}
        code={`
<CoreStack direction="column">
  
  <CoreEmailOrPhoneLink email="pritam@rxefy"></CoreEmailOrPhoneLink>

  <CoreEmailOrPhoneLink phone="8777083277"></CoreEmailOrPhoneLink>
  
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
