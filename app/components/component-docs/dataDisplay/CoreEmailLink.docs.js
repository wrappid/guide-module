import { CoreEmailLink } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreEmailLinkDocs() {

  const CORE_COMPONENT = CoreEmailLink;
  const CORE_COMPONENT_LINK = (CORE_COMPONENT?.name || CORE_COMPONENT?.displayName);

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={"The " + CORE_COMPONENT_LINK + " component is used to display a email address with a mail icon. It can also be used to display a email address with a verified flag."}
      basicSampleProps={{ email: "wrappid.framework@gmail.com" }}
      samples={
        <CodeSample
          title={`${CORE_COMPONENT_LINK} with verified flag`}
          description={`This is a basic sample of how to use the ${CORE_COMPONENT_LINK} component with the verified flag.`}
          code={"<CoreEmailLink email=\"wrappid.framework@gmail.com\" verified={true} />"}
          renderElement={<>
            <CoreEmailLink email="wrappid.framework@gmail.com" verified={true} />
          </>}
          expandedCode={`import { CoreEmailLink } from "@wrappid/core";

export default function WithFlagCoreEmailLink() {
  return (
    <CoreEmailLink email="wrappid.framework@gmail.com" />
  );
}`}
        />
      }
    />
  );
}
