import React from "react";

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
  CorePaper,
  CoreStack,
  CoreListSubheader,
  CoreCollapse,
  CoreListItemAvatar,
  CoreAvatar
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListDocs() {
  // start of nested list code sample
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  // end of nested list code sample 

  // start of slected item list
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // end of slected item list
  return (
    <>
      <CoreH4>{"CoreList"}</CoreH4>

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
        styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
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
      </CoreBox>
        `}
        renderElement={
          <>
            <CoreBox
              styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
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
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Nested List"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreBox
        styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
      >
            <CoreStack
              component={CorePaper}
              styleClasses={[CoreClasses.WIDTH.W_25]}
              >
                 <CoreList>
                    <CoreListSubheader>Nested List Items</CoreListSubheader>
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

  <CoreListItem disablePadding onClick={handleClick}>
    <CoreListItemButton>
      <CoreListItemIcon>
        <CoreIcon icon="delete" />
      </CoreListItemIcon>
      <CoreListItemText primary="Trash" />
      {open ? <CoreIcon icon="arrow" /> : <CoreIcon icon="expandmore" />}
    </CoreListItemButton>
  </CoreListItem>
  <CoreCollapse in={open} >
        <CoreList disablePadding styleClasses={[CoreClasses.PADDING.PL2]}>
          <CoreListItemButton >
          <CoreIcon icon="expandmore" />
            <CoreListItemText primary="Collpased done" />
          </CoreListItemButton>
        </CoreList>
      </CoreCollapse>
 </CoreList>
</CoreStack>

        </CoreBox>`}
        renderElement={
          <>
            <CoreBox
              styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
            >
              <CoreStack
                component={CorePaper}
                styleClasses={[CoreClasses.WIDTH.W_25]}
              >
                <CoreList>
                  <CoreListSubheader>Nested List Items</CoreListSubheader>

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

                  <CoreListItem disablePadding onClick={handleClick}>
                    <CoreListItemButton>
                      <CoreListItemIcon>
                        <CoreIcon icon="delete" />
                      </CoreListItemIcon>

                      <CoreListItemText primary="Trash" />

                      {open ? <CoreIcon icon="arrow" /> : <CoreIcon icon="expandmore" />}
                    </CoreListItemButton>
                  </CoreListItem>

                  <CoreCollapse in={open} >
                    <CoreList disablePadding styleClasses={[CoreClasses.PADDING.PL2]}>
                      <CoreListItemButton >
                        <CoreIcon icon="expandmore" />

                        <CoreListItemText primary="Collpased done" />
                      </CoreListItemButton>
                    </CoreList>
                  </CoreCollapse>
                </CoreList>
              </CoreStack>

            </CoreBox>
          </>}
      />

      <CodeSample
        title={"Folder List"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
        >
           <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}
           >
 <CoreList>
   <CoreListItem>
     <CoreListItemAvatar>
       <CoreAvatar>
       <CoreIcon icon="inbox" />
       </CoreAvatar>
     </CoreListItemAvatar>
     <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
   </CoreListItem>
   <CoreListItem>
     <CoreListItemAvatar>
       <CoreAvatar>
       <CoreIcon icon="inbox" />
       </CoreAvatar>
     </CoreListItemAvatar>
     <CoreListItemText primary="Work" secondary="Jan 7, 2014" />
   </CoreListItem>
   <CoreListItem>
     <CoreListItemAvatar>
       <CoreAvatar>
       <CoreIcon icon="inbox" />
       </CoreAvatar>
     </CoreListItemAvatar>
     <CoreListItemText primary="Vacation" secondary="July 20, 2014" />
   </CoreListItem>
 </CoreList>
 </CoreStack>
 </CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
            >
              <CoreStack
                component={CorePaper}
                styleClasses={[CoreClasses.WIDTH.W_25]}
              >
                <CoreList>
                  <CoreListItem>
                    <CoreListItemAvatar>
                      <CoreAvatar>
                        <CoreIcon icon="inbox" />
                      </CoreAvatar>
                    </CoreListItemAvatar>

                    <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
                  </CoreListItem>

                  <CoreListItem>
                    <CoreListItemAvatar>
                      <CoreAvatar>
                        <CoreIcon icon="inbox" />
                      </CoreAvatar>
                    </CoreListItemAvatar>

                    <CoreListItemText primary="Work" secondary="Jan 7, 2014" />
                  </CoreListItem>

                  <CoreListItem>
                    <CoreListItemAvatar>
                      <CoreAvatar>
                        <CoreIcon icon="inbox" />
                      </CoreAvatar>
                    </CoreListItemAvatar>

                    <CoreListItemText primary="Vacation" secondary="July 20, 2014" />
                  </CoreListItem>
                </CoreList>
              </CoreStack>
            </CoreBox>
          </>}
      />

      <CodeSample
        title={"Selected ListItem"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}>
          <CoreList>
        <CoreListItemButton
      selected={selectedIndex === 0}
      onClick={(event) => handleListItemClick(event, 0)}
    >
      <CoreListItemIcon>
      <CoreIcon icon="drafts" />
      </CoreListItemIcon>
      <CoreListItemText primary="Inbox" />
    </CoreListItemButton>
    <CoreListItemButton
      selected={selectedIndex === 1}
      onClick={(event) => handleListItemClick(event, 1)}
    >
      <CoreListItemIcon>
      <CoreIcon icon="inbox" />
      </CoreListItemIcon>
      <CoreListItemText primary="Drafts" />
    </CoreListItemButton>
  </CoreList>
  <CoreDivider />
  <CoreList component="nav" aria-label="secondary mailbox folder">
    <CoreListItemButton
      selected={selectedIndex === 2}
      onClick={(event) => handleListItemClick(event, 2)}
    >
      <CoreListItemText primary="Trash" />
    </CoreListItemButton>
    <CoreListItemButton
      selected={selectedIndex === 3}
      onClick={(event) => handleListItemClick(event, 3)}
    >
      <CoreListItemText primary="Spam" />
    </CoreListItemButton>
    </CoreList>
        </CoreStack>
      </CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
              <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}>
                <CoreList>
                  <CoreListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <CoreListItemIcon>
                      <CoreIcon icon="drafts" />
                    </CoreListItemIcon>

                    <CoreListItemText primary="Inbox" />
                  </CoreListItemButton>

                  <CoreListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <CoreListItemIcon>
                      <CoreIcon icon="inbox" />
                    </CoreListItemIcon>

                    <CoreListItemText primary="Drafts" />
                  </CoreListItemButton>
                </CoreList>

                <CoreDivider />

                <CoreList component="nav" aria-label="secondary mailbox folder">
                  <CoreListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <CoreListItemText primary="Trash" />
                  </CoreListItemButton>

                  <CoreListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <CoreListItemText primary="Spam" />
                  </CoreListItemButton>
                </CoreList>
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Align list items"}
        description={"this props not working properly"}
        code={`
        <CoreList disablePadding>
      <CoreListItem alignItems="flex-start">
        <CoreListItemButton>
          <CoreListItemAvatar>
            <CoreAvatar src="https://picsum.photos/200?random=1" />
          </CoreListItemAvatar>

          <CoreListItemText
            primary="Profile 1"
            secondary={<>
              <CoreTypographyBody1 color="text.primary">
        Sandra Adams
              </CoreTypographyBody1>

              {" — Do you have Paris recommendations? Have you ever…"}
            </>} 
          />
        </CoreListItemButton>
      </CoreListItem>

      <CoreListItem alignItems="flex-start">
        <CoreListItemButton>
          <CoreListItemAvatar>
            <CoreAvatar src="https://picsum.photos/200?random=2" />
          </CoreListItemAvatar>

          <CoreListItemText
            primary="Profile 2"
            secondary={<>
              <CoreTypographyBody1 color="text.primary">
            to Scott, Alex, Jennifer
              </CoreTypographyBody1>

              {" — Wish I could come, but I'm out of town this…"}
            </>} />
        </CoreListItemButton>
      </CoreListItem>

      <CoreListItem alignItems="flex-start">
        <CoreListItemButton>
          <CoreListItemAvatar>
            <CoreAvatar src="https://picsum.photos/200?random=3" />
          </CoreListItemAvatar>

          <CoreListItemText
            primary="Profile 3"
            secondary={<>
              <CoreTypographyBody1 color="text.primary">
            Ali Connors
              </CoreTypographyBody1>

              {" — I'll be in your neighborhood doing errands this…"}
            </>} />
        </CoreListItemButton>
      </CoreListItem>
    </CoreList>
        `}
        renderElement={
          <> 
            <CoreList disablePadding>
              <CoreListItem alignItems="flex-start">
                <CoreListItemButton>
                  <CoreListItemAvatar>
                    <CoreAvatar src="https://picsum.photos/200?random=1" />
                  </CoreListItemAvatar>

                  <CoreListItemText
                    primary="Profile 1"
                    secondary={<>
                      <CoreTypographyBody1 color="text.primary">
        Sandra Adams
                      </CoreTypographyBody1>

                      {" — Do you have Paris recommendations? Have you ever…"}
                    </>} 
                  />
                </CoreListItemButton>
              </CoreListItem>

              <CoreListItem alignItems="flex-start">
                <CoreListItemButton>
                  <CoreListItemAvatar>
                    <CoreAvatar src="https://picsum.photos/200?random=2" />
                  </CoreListItemAvatar>

                  <CoreListItemText
                    primary="Profile 2"
                    secondary={<>
                      <CoreTypographyBody1 color="text.primary">
            to Scott, Alex, Jennifer
                      </CoreTypographyBody1>

                      {" — Wish I could come, but I'm out of town this…"}
                    </>} />
                </CoreListItemButton>
              </CoreListItem>

              <CoreListItem alignItems="flex-start">
                <CoreListItemButton>
                  <CoreListItemAvatar>
                    <CoreAvatar src="https://picsum.photos/200?random=3" />
                  </CoreListItemAvatar>

                  <CoreListItemText
                    primary="Profile 3"
                    secondary={<>
                      <CoreTypographyBody1 color="text.primary">
            Ali Connors
                      </CoreTypographyBody1>

                      {" — I'll be in your neighborhood doing errands this…"}
                    </>} />
                </CoreListItemButton>
              </CoreListItem>
            </CoreList>
          </>}
      />

      <ComponentProps component={CoreList} />
    </>
  );
}
