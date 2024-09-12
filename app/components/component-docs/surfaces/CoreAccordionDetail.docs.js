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
        component={CoreAccordionDetail}
        basicSample={false}
        description={<>
          <CoreTypographyBody1>
          An CoreAccordionDetail component serves as the container for the content that expands when an accordion is opened. It{"'"}s a foundational element within the CoreAccordion component, providing a flexible and structured way to present detailed information or actions in a collapsible format.
          </CoreTypographyBody1>
        </>}
        samples={
          <CodeSample
            title={"Basic CoreAccordionDetail"}
            description={" "}
            code={`<CoreStack component={CorePaper}>
  <CoreAccordion>
    <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
      <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
  <CoreAccordion>
    <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
      <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
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
          <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
      <CoreAccordion>
        <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
          <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
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
                    <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
                  </CoreAccordionSummary>

                  <CoreAccordionDetail>
                    <CoreTypographyBody1> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody1>
                  </CoreAccordionDetail>
                </CoreAccordion>

                <CoreAccordion>
                  <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
                    <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
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