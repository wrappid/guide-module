import {
  CoreBox,
  CoreH, CoreH1, CoreH2, CoreH3, CoreH4, CoreH5, CoreH6 
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreHDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreH}
        description="Please provide your component description to describe what is it used for."
        samples={
          <>
            <CodeSample
              title={"Headings"}
              description={"Example of different type of heading."}
              expandedCode={`import {
  CoreBox,
  CoreH1,
  CoreH2,
  CoreH3,
  CoreH4,
  CoreH5,
  CoreH6 
} from "@wrappid/core";
  
export default function CoreHTypes() {
  return (
    <CoreBox>
      <CoreH1 gutterBottom>h1.heading</CoreH1>

      <CoreH2 gutterBottom>h2.heading</CoreH2>

      <CoreH3 gutterBottom>h3.heading</CoreH3>

      <CoreH4 gutterBottom>h4.heading</CoreH4>

      <CoreH5 gutterBottom>h5.heading</CoreH5>

      <CoreH6 gutterBottom>h6.heading</CoreH6>
    </CoreBox>           
  );
}`}
              code={`<CoreBox>
  <CoreH1 gutterBottom>h1.heading</CoreH1>

  <CoreH2 gutterBottom>h2.heading</CoreH2>

  <CoreH3 gutterBottom>h3.heading</CoreH3>

  <CoreH4 gutterBottom>h4.heading</CoreH4>

  <CoreH5 gutterBottom>h5.heading</CoreH5>

  <CoreH6 gutterBottom>h6.heading</CoreH6>
</CoreBox>`}
              renderElement={<>
                <CoreBox>

                  <CoreH1 gutterBottom>h1.heading</CoreH1>

                  <CoreH2 gutterBottom>h2.heading</CoreH2>

                  <CoreH3 gutterBottom>h3.heading</CoreH3>

                  <CoreH4 gutterBottom>h4.heading</CoreH4>

                  <CoreH5 gutterBottom>h5.heading</CoreH5>

                  <CoreH6 gutterBottom>h6.heading</CoreH6>
                </CoreBox>
              </>}
            />
          </>
        }
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreH} /> */}
      
    </>
  );
}