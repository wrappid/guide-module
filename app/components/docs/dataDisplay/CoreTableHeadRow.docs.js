import { CoreClasses, CoreH4, CoreTableHeadRow } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTableHeadRowDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreTableHeadRow
      </CoreH4>
      
      <CodeSample
        title={"Simple CoreTableHeadRow"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={""}
        renderElement={
          <CoreTableHeadRow></CoreTableHeadRow>
        }
      />

      <ComponentProps component={CoreTableHeadRow} />

    </>
  );
}
