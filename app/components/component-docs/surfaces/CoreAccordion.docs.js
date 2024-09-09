/* eslint-disable etc/no-commented-out-code */

import {
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreIcon,
  CorePaper,
  CoreTypographyBody1,
  CoreStack,
  CoreBox,
  CoreListItem,
  CoreList
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAccordionDocs() {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpansion = () => {
  //   setExpanded((prevExpanded) => !prevExpanded);
  // };

  return (
    <>

      <ComponentDocs
        component={CoreAccordion}
        basicSample={false}
        description={<>
          <CoreTypographyBody1>
      The accordion component allows the user to show and hide sections of related content on a page.
      An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
          </CoreTypographyBody1>
        </>}
        samples={
          <>
            <CodeSample
              title={"Basic accordion"}
              description={<>
                <CoreTypographyBody1>
              The CoreAccordion component includes several complementary utility components to handle various use cases:
                </CoreTypographyBody1>

                <CoreList listType="DISC" variant="HTML">
                  <CoreListItem>
                  Accordion: the wrapper for grouping related components.
                  </CoreListItem>

                  <CoreListItem>
                  Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when clicked.
                  </CoreListItem>

                  <CoreListItem>
                  Accordion Details: the wrapper for the Accordion content.
                  </CoreListItem>

                  <CoreListItem>
                  Accordion Actions: an optional wrapper that groups a set of buttons.
                  </CoreListItem>
                </CoreList>
              </>}
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
                
export default function BasicAccordion() {
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
              renderElement={
                <>
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
            
            <CodeSample
              title={"Expand icon"}
              description={<>
                <CoreTypographyBody1>
                Use the <CodeBlock>expandIcon</CodeBlock> prop on the Accordion Summary component to change the expand indicator icon. The component handles the turning upside-down transition automatically.
                </CoreTypographyBody1>
              </>}
              code={`<CoreBox>
  <CoreAccordion>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="arrow_downward" />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
      </CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
  <CoreAccordion>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="arrow_drop_down" />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
      </CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
</CoreBox>`}
              expandedCode={`import {
  CoreAccordion,
  CoreAccordionSummary,
  CoreIcon,
  CoreTypographyBody1,
  CoreAccordionDetail, 
  CoreBox
} from "@wrappid/core";
        
export default function AccordionExpandIcon() {
  return (   
    <CoreBox>
      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="arrow_downward" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
          </CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="arrow_drop_down" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
          </CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
    </CoreBox>    
  );          
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreAccordion>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="arrow_downward" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>

                    <CoreAccordion>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="arrow_drop_down" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>
                  </CoreBox>   
                </>}
            />

            <CodeSample
              title={"Expanded by default"}
              description={<>
                <CoreTypographyBody1>
              Use the <CodeBlock>defaultExpanded</CodeBlock> prop on the Accordion component to have it opened by default.
                </CoreTypographyBody1>
              </>}
              code={` <CoreBox>
  <CoreAccordion defaultExpanded>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <CoreTypographyBody1>Expanded by default</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
  <CoreAccordion>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <CoreTypographyBody1>Header</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
</CoreBox>`}
              expandedCode={`import {
  CoreAccordion,
  CoreAccordionSummary,
  CoreIcon,
  CoreTypographyBody1,
  CoreAccordionDetail, 
  CoreBox
} from "@wrappid/core";
        
export default function AccordionExpandDefault() {
  return (
    <CoreBox>
      <CoreAccordion defaultExpanded>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CoreTypographyBody1>Expanded by default</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <CoreTypographyBody1>Header</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
    </CoreBox>
  )
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreAccordion defaultExpanded>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <CoreTypographyBody1>Expanded by default</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>

                    <CoreAccordion>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <CoreTypographyBody1>Header</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>
                  </CoreBox>
                </>}
            />

            <CodeSample
              title={"Transition(NOT WORKING)"}
              description={<>
                <CoreTypographyBody1>
              Use the slots.transition and slotProps.transition props to change the Accordion{"'"}s default transition.
                </CoreTypographyBody1>
              </>}
              code={"NA"}
              renderElement={
                <>
                  {/* <div>
                    <CoreAccordion
                      expanded={expanded}
                      onChange={handleExpansion}
                      slots={{ transition: CoreFade }}
                      slotProps={{ transition: { timeout: 4000 } }}
                      sx={[
                        expanded
                          ? {
                            "& .MuiAccordion-region"     : { height: "auto" },
                            "& .MuiAccordionDetails-root": { display: "block" },
                          }
                          : {
                            "& .MuiAccordion-region"     : { height: 0 },
                            "& .MuiAccordionDetails-root": { display: "none" },
                          },
                      ]}
                    >
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <CoreTypographyBody1>Custom transition using Fade</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>

                    <CoreAccordion>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <CoreTypographyBody1>Default transition using Collapse</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>
                  </div> */}
                </>}
            />

            <CodeSample
              title={"Disabled item"}
              description="Use the disabled prop on the Accordion component to disable interaction and focus."
              code={`<CoreBox>
  <CoreAccordion>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
  <CoreAccordion>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
      aria-controls="panel2-content"
      id="panel2-header"
    >
      <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
    </CoreAccordionSummary>
    <CoreAccordionDetail>
      <CoreTypographyBody1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </CoreTypographyBody1>
    </CoreAccordionDetail>
  </CoreAccordion>
  <CoreAccordion disabled>
    <CoreAccordionSummary
      expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
      aria-controls="panel3-content"
      id="panel3-header"
    >
      <CoreTypographyBody1>Disabled CoreAccordion</CoreTypographyBody1>
    </CoreAccordionSummary>
  </CoreAccordion>
</CoreBox>`}
              expandedCode={`import {
  CoreAccordion,
  CoreAccordionSummary,
  CoreIcon,
  CoreTypographyBody1,
  CoreAccordionDetail, 
  CoreBox
} from "@wrappid/core";
                
export default function DisabledAccordion() {
  return (    
    <CoreBox>
      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
      <CoreAccordion>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
        </CoreAccordionSummary>
        <CoreAccordionDetail>
          <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </CoreTypographyBody1>
        </CoreAccordionDetail>
      </CoreAccordion>
      <CoreAccordion disabled>
        <CoreAccordionSummary
          expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <CoreTypographyBody1>Disabled CoreAccordion</CoreTypographyBody1>
        </CoreAccordionSummary>
      </CoreAccordion>
    </CoreBox>            
  ); 
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreAccordion>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <CoreTypographyBody1>Accordion 1</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>

                    <CoreAccordion>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <CoreTypographyBody1>Accordion 2</CoreTypographyBody1>
                      </CoreAccordionSummary>

                      <CoreAccordionDetail>
                        <CoreTypographyBody1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </CoreTypographyBody1>
                      </CoreAccordionDetail>
                    </CoreAccordion>

                    <CoreAccordion disabled>
                      <CoreAccordionSummary
                        expandIcon={<CoreIcon icon="keyboard_arrow_down" />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                      >
                        <CoreTypographyBody1>Disabled CoreAccordion</CoreTypographyBody1>
                      </CoreAccordionSummary>
                    </CoreAccordion>
                  </CoreBox>
                </>}
            />

          </>
        }
      />
    </>
  );
}