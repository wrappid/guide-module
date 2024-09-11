import {
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreIcon,
  CorePaper,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAccordionDetailDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreAccordionSummary}
        basicSample={false}
        description={<>
          <CoreTypographyBody1>
          An CoreAccordionSummary component serves as the header or title section of an accordion. It{"'"}s a foundational element within the CoreAccordion component, providing a concise and interactive way to indicate the content that will be revealed when the accordion is expanded.</CoreTypographyBody1>
        </>}
        samples={
          <CodeSample
            title={"Basic CoreAccordionSummary"}
            description={" "}
            code={`<CoreStack component={CorePaper}>
  <CoreAccordion>
    <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
      <CoreTypographyBody1>Summary 1</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
  <CoreAccordion>
    <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
      <CoreTypographyBody1>Summary 2</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
</CoreStack>`}
            expandedCode={`import {
  CoreStack,
  CorePaper, 
  CoreAccordion, 
  CoreAccordionSummary, 
  CoreIcon, 
  CoreTypographyBody1, 
  CoreAccordionDetail 
} from "@wrappid/core";
                
export default function BasicCoreAccordionDetail() {
  return (  
    <CoreStack component={CorePaper}>
      <CoreAccordion>
        <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
          <CoreTypographyBody1>Summary 1</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
      <CoreAccordion>
        <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
          <CoreTypographyBody1>Summary 2</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
    </CoreStack>           
  );              
}`}
            renderElement={<>
              <CoreStack component={CorePaper}>
                <CoreAccordion>
                  <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
                    <CoreTypographyBody1>Summary 1</CoreTypographyBody1>
                  </CoreAccordionSummary>

                  <CoreAccordionDetail>
                    <CoreTypographyBody1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
                  </CoreAccordionDetail>
                </CoreAccordion>

                <CoreAccordion>
                  <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
                    <CoreTypographyBody1>Summary 2</CoreTypographyBody1>
                  </CoreAccordionSummary>

                  <CoreAccordionDetail>
                    <CoreTypographyBody1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
                  </CoreAccordionDetail>
                </CoreAccordion>
              </CoreStack>    
            </>}
          />
        
        }
      />
    </>
  );
}