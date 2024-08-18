import {
  CoreH4,
  CoreTypographyBody1,
  CoreListItemButton,
  CoreDivider,
  CoreListItemIcon,
  CoreList,
  CoreListItem,
  CoreIconText,
  CoreListItemText,
  CoreStack,
  CorePaper,
  CoreClasses,
  CoreBox
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemButtonDocs() {
  return (
    <>
      <CoreH4>{"CoreListItemButton"}</CoreH4>

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
        CoreListItemButton is a component in Wrappid that is a simplified version of CoreListItem optimized for items that act like buttons. {"It's"} designed to make it easier to create clickable CoreList items without needing to configure additional props.
      </CoreTypographyBody1>

      <CodeImport name="CoreListItemButton" />
      
      <CodeSample
        title={"Basic Structure"}
        description={<>
          <CoreBox styleClasses={[CoreClasses.PADDING.SMPL2]}>
            <CoreList variant="HTML" listType="DISC">
              <CoreListItem>
                <CoreListItemText primary="CoreListItemButton: This is the primary component used to make the CoreList item behave like a CoreButton. It automatically has button-like behavior, meaning it’s clickable and can be styled as a button." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemIcon: Adds an icon to the left side of the CoreListItemButton, typically used to represent the content or action associated with the item."/>
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemText: Displays the text content of the CoreList item, such as labels or descriptions."/>
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreDivider: Adds a line between items to visually separate them."/>
              </CoreListItem>
            </CoreList>
          </CoreBox>
        </>}
        code={`<CoreStack
  component={CorePaper}
  styleClasses={[CoreClasses.WIDTH.W_25]}
>
  <CoreList component="nav">
    <CoreListItemButton>
      <CoreListItemIcon>
        <CoreIconText icon="mail" />
      </CoreListItemIcon>
      <CoreListItemText primary="Inbox" />
    </CoreListItemButton>

    <CoreListItemButton>
      <CoreListItemIcon>
        <CoreIconText icon="drafts"/>
      </CoreListItemIcon>
      <CoreListItemText primary="Draft" />
    </CoreListItemButton>

    <CoreDivider />
  
    <CoreListItem disablePadding> 
      <CoreListItemButton> 
        <CoreListItemText  
          primary="Javascript" /> 
      </CoreListItemButton> 
    </CoreListItem> 

    <CoreListItem disablePadding> 
      <CoreListItemButton
        component="a"
        href="#simple-list"> 
        <CoreListItemText  
          primary="PHP" /> 
      </CoreListItemButton> 
    </CoreListItem> 
  </CoreList>
</CoreStack>`}
        renderElement={<>
          <CoreStack
            component={CorePaper}
            styleClasses={[CoreClasses.WIDTH.W_25]}
          >
            <CoreList component="nav">
              <CoreListItemButton>
                <CoreListItemIcon>
                  <CoreIconText icon="mail" />
                </CoreListItemIcon>

                <CoreListItemText primary="Inbox" />
              </CoreListItemButton>

              <CoreListItemButton>
                <CoreListItemIcon>
                  <CoreIconText icon="drafts"/>
                </CoreListItemIcon>

                <CoreListItemText primary="Draft" />
              </CoreListItemButton>

              <CoreDivider />
            
              <CoreListItem disablePadding> 
                <CoreListItemButton> 
                  <CoreListItemText  
                    primary="Inbox" /> 
                </CoreListItemButton> 
              </CoreListItem> 

              <CoreListItem disablePadding> 
                <CoreListItemButton
                  component="a"
                  href="#"> 
                  <CoreListItemText  
                    primary="Draft" /> 
                </CoreListItemButton> 
              </CoreListItem> 
            </CoreList>
          </CoreStack>
        </>}
      />

      <ComponentProps component={CoreListItemButton} />
    </>
  );
}
