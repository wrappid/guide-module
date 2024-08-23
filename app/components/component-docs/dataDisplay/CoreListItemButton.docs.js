import {
  CoreListItemButton,
  CoreDivider,
  CoreListItemIcon,
  CoreList,
  CoreListItem,
  CoreIconText,
  CoreListItemText,
  CoreStack,
  CorePaper,
  CoreClasses
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreListItemButtonDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreListItemButton}
        description="CoreListItemButton is a simplified version of CoreListItem optimized for items that act like buttons. It's designed to make it easier to create clickable CoreList items without needing to configure additional props."
        samples={
          <>
            <CodeSample
              title={"Basic CoreListItemButton"}
              description="CoreListItemButton is the primary component used to make the CoreList item behave like a CoreButton. It automatically has button-like behavior, meaning it’s clickable and can be styled as a button. Adds an icon to the left side of the CoreListItemButton, typically used to represent the content or action associated with the item."
              code={`<CoreListItemButton>
  <CoreListItemIcon>
    <CoreIconText icon="mail" />
  </CoreListItemIcon>

  <CoreListItemText primary="Inbox" />
</CoreListItemButton>`}
              expandedCode={`import {
  BlankLayout,
  CoreBox,
  CoreClasses,
  CoreListItemButton,
  CoreListItemIcon,
  CoreIconText,
  CoreLayoutItem,
  CorePaper,
  CoreStack,
  CoreDivider,
  CoreList,
  CoreListItem,
  CoreListItemText
} from "@wrappid/core";

export default function BasicCoreListItemButton() {
  return (
    <>
      
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P5]}>

        <CoreBox
          styleClasses={[
            CoreClasses.WIDTH.W_100,
            CoreClasses.MARGIN.M4,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.BORDER.BORDER_2
          ]}
        >
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
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
};`}
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
              </>
              }
            />
          </>
        }
      />
    </>
  );
}
