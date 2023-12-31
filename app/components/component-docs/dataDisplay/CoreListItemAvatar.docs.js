import {
  CoreH4,
  CoreTypographyBody1,
  CoreListItemAvatar
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemAvatarDocs() {
  return (
    <>
      <CoreH4>{"CoreListItemAvatar"}</CoreH4>

      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreListItemAvatar(NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          
        </>}
      />

      <ComponentProps component={CoreListItemAvatar} />
    </>
  );
}
