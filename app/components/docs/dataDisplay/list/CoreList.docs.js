import {
  CoreH4,
  CoreTypographyBody1,
  CoreList,
  CoreListItem,
  CoreListItemButton,
  CoreListItemText,
  CoreListItemIcon,
  CoreBox,
  CoreDivider,
  CoreClasses,
  CoreIcon,
} from "@wrappid/core";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreListDocs() {
  return (
    <>
      <CoreH4>{`CoreList`}</CoreH4>
      <CoreTypographyBody1>
        Lists are a continuous group of text or images. They are composed of
        items containing primary and supplemental actions, which are represented
        by icons and text.
      </CoreTypographyBody1>
      <CodeSample
        title={"Basic List"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
        <CoreBox
        styleClasses={[
          CoreClasses.WIDTH.W_100.MAX_W_100,
          CoreClasses.BORDER.BORDER_2,
        ]}
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
      </CoreBox>
        `}
        renderElement={
          <>
            <CoreBox
              styleClasses={[
                CoreClasses.WIDTH.W_100.MAX_W_100,
                CoreClasses.BORDER.BORDER_2,
              ]}
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
            </CoreBox>
          </>
        }
      />
      <CodeSample
        title={"Nested List"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
      />
      <CodeSample
        title={"Folder List"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
      />
      <CodeSample
        title={"Selected ListItem"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
      />
      <CodeSample
        title={"Align list items"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
      />
      <ComponentProps component={CoreList} />
    </>
  );
}
