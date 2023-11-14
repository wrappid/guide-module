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

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemIconDocs() {
  return (
    <>
      <CoreH4>{"CoreListItemIcon"}</CoreH4>

      <CoreTypographyBody1>
        COMPONENT_DESCRIPTION
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic CoreListItemIcon"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
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
