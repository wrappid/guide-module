import { CoreMultiTimeRangePicker } from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreMultiTimeRangePickerDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreMultiTimeRangePicker}
        description={"It allows users to select multiple time ranges within a specified interval. It's particularly useful in scenarios where users need to schedule multiple events or activities within a certain timeframe"}
        samples={
          <>
            <CodeSample
              title={"Basic CoreMultiTimeRangePicker"}
              description={"<CoreMultiTimeRangePicker/>"}
              code={" "}
              expandedCode={`import { CoreMultiTimeRangePicker } from "@wrappid/core";
                
export default function BasicCoreMultiTimeRangePicker(){
  return(
      <CoreMultiTimeRangePicker/>
  );                
}`}
              renderElement={<>
                <CoreMultiTimeRangePicker/>
              </>}
            />
          </>
        }
      />
    </>
  );
}