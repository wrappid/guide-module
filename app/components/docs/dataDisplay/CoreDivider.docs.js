import {
    NativeBadge,
    CoreClasses,
    CoreStack,
    CoreSpan,
    CoreH4,
    CoreTypographyBody1,
    CoreIcon,
    CoreBadge,
    CoreBox
  } from "@wrappid/core";
  import {Badge} from "@mui/material"
  
  import CodeSample from "../../CodeSample";
  import ComponentProps from "../../ComponentProps";
  
  export default function CoreDividerDocs() {
    return (
      <>
        <CoreH4
          styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
        >
          CoreDivider
        </CoreH4>
  
        <CoreTypographyBody1>
        A divider is a thin line that groups content in lists and layouts.
        </CoreTypographyBody1>
  
        <CodeSample
          title={"List dividers "}
          description={
            <>
            The divider renders as an 
            <CoreSpan code={true}>{" <hr> "}</CoreSpan>
            by default. You can save rendering this DOM element by using the  
            <CoreSpan code={true}>{" divider "}</CoreSpan>
            prop on the  
            <CoreSpan code={true}>{" ListItem "}</CoreSpan>
            component.
          </>
            
          }
          code={`<List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
        <ListItemText primary="Inbox" />
    </ListItem>
    <Divider />
    <ListItem button divider>
        <ListItemText primary="Drafts" />
    </ListItem>
    <ListItem button>
        <ListItemText primary="Trash" />
    </ListItem>
    <Divider light />
    <ListItem button>
        <ListItemText primary="Spam" />
    </ListItem>
</List>`}
          renderElement={
            <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
          }
        />
  
       
  
  <ComponentProps component={CoreBadge} />
  
      </>
    );
  }
  