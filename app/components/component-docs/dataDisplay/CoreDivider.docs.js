import {
  CoreClasses,
  CoreH4,
  CoreTypographyBody1,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreDivider,
  CoreIcon,
  CoreBox,
  CoreStack,
  CoreChip,
  CoreTypographyBody2,
  CoreH6
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreDividerDocs() {
  const content = 
    <CoreTypographyBody1>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</CoreTypographyBody1>

  ;

  return (
    <>
      <ComponentDocs
        component={CoreDivider}
        description={
          <CoreTypographyBody1>
            The CoreDivider component provides a thin, unobtrusive line for grouping elements to reinforce visual hierarchy.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample 
              title="Basic"
              description={
                <>
          The CoreDivider component renders as a dark gray <CodeBlock>{"<hr>"}</CodeBlock> by default, and features several useful props for quick style adjustments.
                </>
              }
              code={"Na"}
              expandedCode={`import {
  CoreClasses,
  CoreDivider,
  CoreBox,
  CoreStack,
  CoreChip,
  CoreH4,
  CoreH6,
  CoreTypographyBody1,
  CoreTypographyBody2
} from "@wrappid/core";

export default function BasicDivider() { 
  return(
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
      <CoreBox styleClasses={[CoreClasses.PADDING.P2]}>
        <CoreStack
          direction="row"
          styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
          justifyContent="space-between"
          alignItems="center">
          <CoreH4 gutterBottom component="div">Toothbrush</CoreH4>
          <CoreH6 gutterBottom component="div">
            $4.50
          </CoreH6>
        </CoreStack>
        <CoreTypographyBody2 color="text.secondary">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.
        </CoreTypographyBody2>
      </CoreBox>
      <CoreDivider/>
      <CoreBox styleClasses={[CoreClasses.PADDING.P2]}>
        <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
          Select type
        </CoreTypographyBody1>
        <CoreStack direction="row" spacing={1}>
          <CoreChip size="small" label="Extra Soft" />
          <CoreChip size="small" color="primary" label="Soft" />
          <CoreChip size="small" label="Medium" />
          <CoreChip size="small" label="Hard" />
        </CoreStack>
      </CoreBox>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
                  <CoreBox styleClasses={[CoreClasses.PADDING.P2]}>
                    <CoreStack
                      direction="row"
                      styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
                      justifyContent="space-between"
                      alignItems="center">
                      <CoreH4 gutterBottom component="div">
                    Toothbrush
                      </CoreH4>

                      <CoreH6 gutterBottom component="div">
                    $4.50
                      </CoreH6>
                    </CoreStack>

                    <CoreTypographyBody2 color="text.secondary">
                Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                just down the hall.
                    </CoreTypographyBody2>
                  </CoreBox>

                  <CoreDivider/>

                  <CoreBox styleClasses={[CoreClasses.PADDING.P2]}>
                    <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
                Select type
                    </CoreTypographyBody1>

                    <CoreStack direction="row" spacing={1}>
                      <CoreChip size="small" label="Extra Soft" />

                      <CoreChip size="small" color="primary" label="Soft" />

                      <CoreChip size="small" label="Medium" />

                      <CoreChip size="small" label="Hard" />
                    </CoreStack>
                  </CoreBox>
                </CoreBox>
              }
            />

            <CodeSample 
              title="Variants"
              description={
                <>
                The Divider component supports three variants: <CodeBlock>fullWidth</CodeBlock> (default),

                  {" "}

                  <CodeBlock>inset</CodeBlock>, and 

                  {" "}

                  <CodeBlock>middle</CodeBlock>.
                </>
              }
              code={"NA"}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreDivider,
  CoreBox
} from "@wrappid/core";
               
export default function DividerVariants(){
  return(
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_75, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
      <CoreList styleClasses={[CoreClasses.LAYOUT.FULL_WIDTH]}>
        <CoreListItem>
          <CoreListItemText primary="Full width variant below" />
        </CoreListItem>
        <CoreDivider component="li" />
        <CoreListItem>
          <CoreListItemText primary="Inset variant below" />
        </CoreListItem>
        <CoreDivider variant="inset" component="li" />
        <CoreListItem>
          <CoreListItemText primary="Middle variant below" />
        </CoreListItem>
        <CoreDivider variant="middle" component="li" />
        <CoreListItem>
          <CoreListItemText primary="List item" />
        </CoreListItem>
      </CoreList>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.W_75, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
                    <CoreList styleClasses={[CoreClasses.LAYOUT.FULL_WIDTH]}>
                      <CoreListItem>
                        <CoreListItemText primary="Full width variant below" />
                      </CoreListItem>

                      <CoreDivider component="li" />

                      <CoreListItem>
                        <CoreListItemText primary="Inset variant below" />
                      </CoreListItem>

                      <CoreDivider variant="inset" component="li" />

                      <CoreListItem>
                        <CoreListItemText primary="Middle variant below" />
                      </CoreListItem>

                      <CoreDivider variant="middle" component="li" />

                      <CoreListItem>
                        <CoreListItemText primary="List item" />
                      </CoreListItem>
                    </CoreList>
                  </CoreBox>
                </>
              }
            />

            <CodeSample 
              title="Orientation"
              description={
                <>
        Use the <CodeBlock>orientation</CodeBlock> prop to change the Divider from horizontal to vertical.
                </>
              }
              code={"<CoreDivider styleClasses={[CoreClasses.MARGIN.M0]} orientation=\"vertical\" flexItem />"}
              expandedCode={`import {
  CoreClasses,
  CoreDivider,
  CoreBox,
  CoreIcon
} from "@wrappid/core";
    
export default function VerticalDividers() {
  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="cloud" />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="folder" />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="mail" />
      <CoreDivider styleClasses={[CoreClasses.MARGIN.M0]} orientation="vertical" flexItem />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="phone" />
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="cloud" />

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="folder" />

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="mail" />

                  <CoreDivider styleClasses={[CoreClasses.MARGIN.M0]} orientation="vertical" flexItem />
              
                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} fontSize="large" icon="phone" />
                </CoreBox>
              }
            />

            <CodeSample 
              title="Flex item"
              description={
                <>
          Use the <CodeBlock>flexItem</CodeBlock> prop to display the Divider when it&apos; being used in a flex container.
                </>
              }
              code={"<CoreDivider orientation=\"vertical\" flexItem />"}
              expandedCode={`import {
  CoreClasses,
  CoreDivider,
  CoreBox,
  CoreIcon
} from "@wrappid/core";

export default function FlexDivider() {
  return(
    <CoreBox styleClasses={[
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.WIDTH.MAX_W_75,
      CoreClasses.BORDER.BORDER,
      CoreClasses.BORDER.BORDER_GREY_400,
      CoreClasses.BORDER.BORDER_ROUNDED_1
    ]}>
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} >dehaze</CoreIcon>
      <CoreDivider orientation="vertical" flexItem />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} >edit</CoreIcon>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[
                  CoreClasses.DISPLAY.FLEX,
                  CoreClasses.WIDTH.MAX_W_75,
                  CoreClasses.BORDER.BORDER,
                  CoreClasses.BORDER.BORDER_GREY_400,
                  CoreClasses.BORDER.BORDER_ROUNDED_1
                ]}>

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} >dehaze</CoreIcon>

                  <CoreDivider orientation="vertical" flexItem />

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} >edit</CoreIcon>
                </CoreBox>
              }
            />

            <CodeSample 
              title="With children"
              description={
                <>
                 Use the <CodeBlock>textAlign</CodeBlock> prop to align elements that are wrapped by the Divider.
                </>
              }
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  {content}
  <CoreDivider>CENTER</CoreDivider>
  {content}
  <CoreDivider textAlign="left">LEFT</CoreDivider>
  {content}
  <CoreDivider textAlign="right">RIGHT</CoreDivider>
  {content}
  <CoreDivider>
    <CoreChip label="Chip" size="small" />
  </CoreDivider>
  {content}
</CoreBox>`}
              expandedCode={`import {
  CoreClasses,
  CoreTypographyBody1,
  CoreDivider,
  CoreBox,
  CoreChip
} from "@wrappid/core";
                
export default function DividerText() {
  const content = <CoreTypographyBody1>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</CoreTypographyBody1>;

  return(
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      {content}
      <CoreDivider>CENTER</CoreDivider>
      {content}
      <CoreDivider textAlign="left">LEFT</CoreDivider>
      {content}
      <CoreDivider textAlign="right">RIGHT</CoreDivider>
      {content}
      <CoreDivider>
        <CoreChip label="Chip" size="small" />
      </CoreDivider>
      {content}
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                  {content}

                  <CoreDivider>CENTER</CoreDivider>

                  {content}

                  <CoreDivider textAlign="left">LEFT</CoreDivider>

                  {content}

                  <CoreDivider textAlign="right">RIGHT</CoreDivider>

                  {content}

                  <CoreDivider>
                    <CoreChip label="Chip" size="small" />
                  </CoreDivider>

                  {content}
                </CoreBox>
              }
            />
      
            <CodeSample 
              title="Use with a List"
              description={
                <>
          When using the Divider to separate items in a List, use the <CodeBlock>component</CodeBlock> prop to render it as an 

                  {" "}

                  <CodeBlock>{"<li>"}</CodeBlock>—otherwise it won&apos; be a valid HTML element.
                </>
              }
              code={`<CoreList aria-label="mailbox folders">
  <CoreListItem >
    <CoreListItemText primary="Inbox" />
  </CoreListItem>
  <CoreDivider component="li" />
  <CoreListItem>
    <CoreListItemText primary="Drafts" />
  </CoreListItem>
  <CoreDivider component="li" />
  <CoreListItem>
    <CoreListItemText primary="Trash" />
  </CoreListItem>
  <CoreDivider component="li" />
  <CoreListItem>
    <CoreListItemText primary="Spam" />
  </CoreListItem>
</CoreList>`}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreDivider,
  CoreBox
} from "@wrappid/core";

export default function ListDividers() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>
      <CoreList aria-label="mailbox folders">
        <CoreListItem >
          <CoreListItemText primary="Inbox" />
        </CoreListItem>
        <CoreDivider component="li" />
        <CoreListItem>
          <CoreListItemText primary="Drafts" />
        </CoreListItem>
        <CoreDivider component="li" />
        <CoreListItem>
          <CoreListItemText primary="Trash" />
        </CoreListItem>
        <CoreDivider component="li" />
        <CoreListItem>
          <CoreListItemText primary="Spam" />
        </CoreListItem>
      </CoreList>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>

                  <CoreList aria-label="mailbox folders">
                    <CoreListItem >
                      <CoreListItemText primary="Inbox" />
                    </CoreListItem>

                    <CoreDivider component="li" />

                    <CoreListItem>
                      <CoreListItemText primary="Drafts" />
                    </CoreListItem>

                    <CoreDivider component="li" />

                    <CoreListItem>
                      <CoreListItemText primary="Trash" />
                    </CoreListItem>

                    <CoreDivider component="li" />

                    <CoreListItem>
                      <CoreListItemText primary="Spam" />
                    </CoreListItem>
                  </CoreList>
                </CoreBox>
              }
            />

            <CodeSample 
              title="Icon grouping"
              description={
                <>
          The demo below shows how to combine the props <CodeBlock>{"variant=\"middle\""}</CodeBlock> and 

                  {" "}

                  <CodeBlock>{"orientation=\"vertical\""}</CodeBlock>.

                </>
              }
              code={`<CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_right" />
<CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_center" />
<CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_justify" />
<CoreDivider variant="middle" orientation="vertical" flexItem />
<CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_bold" />`}
              expandedCode={`import {
  CoreClasses,
  CoreDivider,
  CoreBox,
  CoreIcon
} from "@wrappid/core";
                
export default function VerticalDividerMiddle() {
  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>

      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_right" />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_center" />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_justify" />
      <CoreDivider variant="middle" orientation="vertical" flexItem />
      <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_bold" />
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1]}>

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_right" />

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_center" />

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_align_justify" />

                  <CoreDivider variant="middle" orientation="vertical" flexItem />

                  <CoreIcon styleClasses={[CoreClasses.MARGIN.M1]} icon="format_bold" />
                </CoreBox>
              }
            />
          </>
        }/>

    </>
  );
}
  