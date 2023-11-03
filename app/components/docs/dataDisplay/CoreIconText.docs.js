import { CoreClasses, CoreH4, CoreIconText, CoreStack } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreIconTextDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreIconText
      </CoreH4>

      <CodeSample
        title={"Simple CoreIconText (NOT WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreStack direction="column" spacing={2}>
  <CoreIconText icon="mail" text="Mail"></CoreIconText>

  <CoreIconText icon="phone" text="Phone"></CoreIconText>
</CoreStack>
        `}
        renderElement={<>
          <CoreStack direction="column" spacing={2}>
            <CoreIconText icon="mail" text="Mail"></CoreIconText>

            <CoreIconText icon="phone" text="Phone"></CoreIconText>
          </CoreStack>
        </>}
      />

      <ComponentProps component={CoreIconText} />

    </>
  );
}
