import {
  CoreListItemIcon,
  CoreList,
  CoreListItem,
  CoreListItemButton,
  CoreListItemText,
  CoreBox,
  CoreClasses,
  CoreIcon,
  CorePaper,
  CoreStack
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreListItemIconDocs() {
  return (
    <>

      <ComponentDocs
        component={CoreListItemIcon}
        description="CoreListItemIcon component is used specifically within CoreList components to display an CoreIcon aligned with a CoreListItem. It is typically used alongside CoreListItemText to create a cohesive and well-aligned CoreListItem with both text and an icon."
        samples={
          <>
            <CodeSample
              title={"Basic CoreListItemIcon"}
              description="This code uses CoreListItemIcon to align CoreIcons next to the text in each CoreListItem. For example, InboxIcon is placed beside Inbox and DraftsIcon next to Drafts. ListItemIcon ensures that the CoreIcons are properly positioned and aligned with the text, providing a clean and organized look for the CoreListItems within the CoreList."
              code={`<CoreListItemIcon>
  <CoreIcon icon="inbox" />
</CoreListItemIcon>`}
              expandedCode={`import {
  BlankLayout,
  CoreBox,
  CoreClasses,
  CoreListItemButton,
  CoreListItemIcon,
  CoreLayoutItem,
  CoreList,
  CoreListItem,
  CoreIcon,
  CoreListItemText
} from "@wrappid/core";

export default function BasicCoreListItemIcon() {
  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P5]}>

        <CoreBox
          styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}
        >
          <CoreList>
            <CoreListItem disablePadding>
              <CoreListItemButton>
                <CoreListItemIcon>
                  <CoreIcon icon="inbox" />
                </CoreListItemIcon>

                <CoreListItemText primary="Inbox" />
              </CoreListItemButton>
            </CoreListItem>

            <CoreListItem disablePadding>
              <CoreListItemButton>
                <CoreListItemIcon>
                  <CoreIcon icon="drafts" />
                </CoreListItemIcon>

                <CoreListItemText primary="Drafts" />
              </CoreListItemButton>
            </CoreListItem>
          </CoreList>

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
                  <CoreBox
                    styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}
                    // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                  >
                    {/* <nav aria-label="main mailbox folders"> */}
                    <CoreList>
                      <CoreListItem disablePadding>
                        <CoreListItemButton>
                          <CoreListItemIcon>
                            <CoreIcon icon="inbox" />
                          </CoreListItemIcon>

                          <CoreListItemText primary="Inbox" />
                        </CoreListItemButton>
                      </CoreListItem>

                      <CoreListItem disablePadding>
                        <CoreListItemButton>
                          <CoreListItemIcon>
                            <CoreIcon icon="drafts" />
                          </CoreListItemIcon>

                          <CoreListItemText primary="Drafts" />
                        </CoreListItemButton>
                      </CoreListItem>
                    </CoreList>

                  </CoreBox>
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
