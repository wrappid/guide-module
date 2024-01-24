import {
  CoreH4,
  CoreTypographyBody1,
  CoreStack, CoreAccordion, CoreAccordionSummary, CoreAccordionDetail, CoreTypographyBody2, CoreIcon,
  CorePaper
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreAccordionDocs() {
  return (
    <>
      <CoreH4>CoreAccordion</CoreH4>
  
      <CoreTypographyBody1>
      The accordion component allows the user to show and hide sections of related content on a page.
      An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic accordion"}
        description={"Expan icon is missing"}
        code={` <CoreStack component={CorePaper}>
        <CoreAccordion>
          <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
            <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
          </CoreAccordionSummary>

          <CoreAccordionDetail>
            <CoreTypographyBody2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody2>
          </CoreAccordionDetail>
        </CoreAccordion>
        <CoreAccordion>
          <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
            <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
          </CoreAccordionSummary>

          <CoreAccordionDetail>
            <CoreTypographyBody2>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody2>
          </CoreAccordionDetail>
        </CoreAccordion>
        <CoreAccordion disabled>
          <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
            <CoreTypographyBody1>Disabled Accordion</CoreTypographyBody1>
          </CoreAccordionSummary>
        </CoreAccordion>
      </CoreStack>`}
        renderElement={
          <>
            <CoreStack component={CorePaper}>
              <CoreAccordion>
                <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
                  <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
                </CoreAccordionSummary>

                <CoreAccordionDetail>
                  <CoreTypographyBody2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody2>
                </CoreAccordionDetail>
              </CoreAccordion>

              <CoreAccordion>
                <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
                  <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
                </CoreAccordionSummary>

                <CoreAccordionDetail>
                  <CoreTypographyBody2>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</CoreTypographyBody2>
                </CoreAccordionDetail>
              </CoreAccordion>

              <CoreAccordion disabled>
                <CoreAccordionSummary expandIcon={<CoreIcon color="action" icon="arrow" />}>
                  <CoreTypographyBody1>Disabled Accordion</CoreTypographyBody1>
                </CoreAccordionSummary>
              </CoreAccordion>
            </CoreStack>
          </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreAccordion} /> */}
      
    </>
  );
}