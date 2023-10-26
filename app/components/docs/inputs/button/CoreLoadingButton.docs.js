import {
  CoreH4,
  CoreTypographyBody1
  // CoreLoadingButton
} from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function CoreLoadingButtonDocs() {
  return (
    <>
      <CoreH4>CoreLoadingButton</CoreH4>

      <CoreTypographyBody1>
        CoreLoading buttons can show loading state and disable interactions.
      </CoreTypographyBody1>

      <CodeSample
        title={"Loading button (NOT_IMPLEMENTED)"}
        description={" "}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      {/* <ComponentProps component={CoreLoadingButton} /> */}
    </>
  );
}
