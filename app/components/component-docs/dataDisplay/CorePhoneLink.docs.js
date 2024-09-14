import { CorePhoneLink } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CorePhoneLinkDocs() {

  const CORE_COMPONENT = CorePhoneLink;
  const CORE_COMPONENT_LINK = (CORE_COMPONENT?.name || CORE_COMPONENT?.displayName);

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={"The " + CORE_COMPONENT_LINK + " component is used to display a phone number with a call icon. It can also be used to display a phone number with a verified flag."}
      basicSampleProps={{ phone: "9000000000" }}
      samples={
        <CodeSample
          title={`${CORE_COMPONENT_LINK} with verified flag`}
          description={`This is a basic sample of how to use the ${CORE_COMPONENT_LINK} component with the verified flag.`}
          code={"<CorePhoneLink phone=\"9000000000\" verified={true} />"}
          renderElement={<>
            <CorePhoneLink phone="9000000000" verified={true} />
          </>}
          expandedCode={`import { CorePhoneLink } from "@wrappid/core";

export default function WithFlagCorePhoneLink() {
  return (
    <CorePhoneLink phone="9000000000" />
  );
}`}
        />
      }
    />
  );
}
