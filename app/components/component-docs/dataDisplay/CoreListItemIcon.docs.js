import {
  CoreH4,
  CoreTypographyBody1,
  CoreListItemIcon,
  CoreList,
  CoreListItem,
  CoreListItemButton,
  CoreListItemText,
  CoreBox,
  CoreClasses,
  CoreIcon
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemIconDocs() {
  return (
    <>
      <CoreH4>{"CoreListItemIcon"}</CoreH4>

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
        The CoreListItemIcon component is a part of Wrappid, used specifically within CoreList components to display an CoreIcon aligned with a CoreListItem. It is typically used alongside CoreListItemText to create a cohesive and well-aligned CoreListItem with both text and an icon.
      </CoreTypographyBody1>

      <CodeImport name="CoreListItemIcon" />

      <CodeSample
        title={"Basic Description"}
        description={"This code uses CoreListItemIcon to align CoreIcons next to the text in each CoreListItem. For example, InboxIcon is placed beside Inbox and DraftsIcon next to Drafts. ListItemIcon ensures that the CoreIcons are properly positioned and aligned with the text, providing a clean and organized look for the CoreListItems within the CoreList."}
        code={`<CoreBox
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
        `}
        renderElement={
          <>
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
          </>
        }
      />

      <ComponentProps component={CoreListItemIcon} />
    </>
  );
}
