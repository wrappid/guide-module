import {
  CoreH4,
  CoreTypographyBody1,
  CoreListItem,
  CoreBox,
  CoreClasses,
  CoreList,
  CoreIcon,
  CoreListItemText,
  CoreListItemIcon,
  CoreListItemButton,
  CoreDivider,
  CoreH5,
  CoreStack,
  CorePaper
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemDocs() {
  return (
    <>
      <CoreH4>{"CoreListItem"}</CoreH4>

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
        In Wrappid Component, the CoreListItem component is used to represent a single item in a list. Wrappid provides a rich set of components that make it easy to build lists with various levels of customization and functionality. Here is a breakdown of the key aspects of ListItem:
      </CoreTypographyBody1>

      <CodeImport name="CoreListItem" />
      
      <CodeSample
        title={"Basic CoreListItem"}
        description={<>
          <CoreTypographyBody1>
            CoreListItem Component: This is the core component used to create an item in a list. It is typically wrapped inside a List component.
          </CoreTypographyBody1>

          <CoreH5>Subcomponents</CoreH5>

          <CoreBox styleClasses={[CoreClasses.MARGIN.SMML1]}>
            <CoreList variant="HTML" listType="DISC">
              <CoreListItem>
                <CoreListItemText primary="CoreListItemText: Used to display the primary and secondary text within a list item. You can pass primary and secondary props to this component to display different levels of text."/>
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemButton: It is designed to be used when you want a list item to have the look and feel of a button. It provides a more semantic and accessible way to create clickable list items."/>
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemIcon: Allows you to add an icon to the left side of the list item. This is commonly used with icons from the Material-UI icon library." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemAvatar: Used to display an avatar on the left side of the list item, which is useful for lists with user profiles or similar content." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemSecondaryAction: Allows you to add an action element (like a button or icon) to the right side of the list item." />
              </CoreListItem>
            </CoreList>
          </CoreBox>
        </>}
        code={`<CoreBox
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

    <CoreDivider />

    <CoreList>
      <CoreListItem disablePadding>
        <CoreListItemButton>
          <CoreListItemText primary="Trash" />
        </CoreListItemButton>
      </CoreListItem>

      <CoreListItem disablePadding>
        <CoreListItemButton component="a" href="#simple-Corelist">
          <CoreListItemText primary="Spam" />
        </CoreListItemButton>
      </CoreListItem>
    </CoreList>

  </CoreStack>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox
              styleClasses={[
                CoreClasses.WIDTH.W_100,
                CoreClasses.MARGIN.M4,
                CoreClasses.DISPLAY.FLEX,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                CoreClasses.BORDER.BORDER_2
              ]}
              // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <CoreStack
                component={CorePaper}
                styleClasses={[CoreClasses.WIDTH.W_25]}
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

                <CoreDivider />

                {/* <nav aria-label="secondary mailbox folders"> */}
                <CoreList>
                  <CoreListItem disablePadding>
                    <CoreListItemButton>
                      <CoreListItemText primary="Trash" />
                    </CoreListItemButton>
                  </CoreListItem>

                  <CoreListItem disablePadding>
                    <CoreListItemButton component="a" href="#simple-Corelist">
                      <CoreListItemText primary="Spam" />
                    </CoreListItemButton>
                  </CoreListItem>
                </CoreList>

                {/* </nav> */}
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={[CoreListItem]} />
    </>
  );
}
