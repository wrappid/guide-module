import { CoreClasses, CoreH4, CoreTable, CoreTableBodyCell } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTableBodyCellDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreTableBodyCell
      </CoreH4>

      <CodeSample
        title={"Simple CoreTableBodyCell"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreTable>
  <CoreTableBodyCell>DATA</CoreTableBodyCell>

  <CoreTableBodyCell>DATA</CoreTableBodyCell>

  <CoreTableBodyCell>DATA</CoreTableBodyCell>

  <CoreTableBodyCell>DATA</CoreTableBodyCell>
</CoreTable>
        
        `}
        renderElement={<>
          <CoreTable>
            <CoreTableBodyCell>DATA</CoreTableBodyCell>

            <CoreTableBodyCell>DATA</CoreTableBodyCell>

            <CoreTableBodyCell>DATA</CoreTableBodyCell>

            <CoreTableBodyCell>DATA</CoreTableBodyCell>
          </CoreTable>
        </>} />

      <ComponentProps component={CoreTableBodyCell} />
        
    </>
  );
}
