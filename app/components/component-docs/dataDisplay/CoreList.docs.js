import React, { useState } from "react";

import {
  CoreH4,
  CoreH5,
  CoreGrid,
  CoreSelect,
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

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

const listStyles = [
  "AUTO",
  "CJK_HEAVENLY_STEM",
  "ARABIC_INDIC",
  "DISC",
  "CIRCLE",
  "SQUARE",
  "DECIMAL",
  "DECIMAL_LEADING_ZERO",
  "ARMENIAN",
  "BENGALI",
  "CAMBODIAN",
  "CJK_EARTHLY_BRANCH",
  "CJK_IDEOGRAPHIC",
  "DEVANAGARI",
  "ETHIOPIC_HALEHAME",
  "ETHIOPIC_HALEHAME_AM",
  "ETHIOPIC_HALEHAME_TI_ER",
  "ETHIOPIC_HALEHAME_TI_ET",
  "GEORGIAN",
  "GUJARATI",
  "HANGUL",
  "HANGUL_CONSONANT",
  "HEBREW",
  "HIRAGANA",
  "HIRAGANAIROHA",
  "INSIDE",
  "KANNADA",
  "KATAKANA",
  "KATAKANA_IROHA",
  "KHMER",
  "KOREAN_HANJA_FORMAL",
  "KOREAN_HANGUL_FORMAL",
  "KOREAN_HANJA_INFORMAL",
  "LAO",
  "LOWER_ALPHA",
  "LOWER_ARMENIAN",
  "LOWER_LATIN",
  "LOWER_GREEK",
  "LOWER_ROMAN",
  "MALAYALAM",
  "MONGOLIAN",
  "MYANMAR",
  "ORIYA",
  "OUTSIDE",
  "PERSIAN",
  "SIMP_CHINESE_FORMAL",
  "SIMP_CHINESE_INFORMAL",
  "TELUGU",
  "THAI",
  "TIBETAN",
  "TRAD_CHINESE_FORMAL",
  "TRAD_CHINESE_INFORMAL",
  "UPPER_ALPHA",
  "UPPER_ARMENIAN",
  "UPPER_LATIN",
  "UPPER_ROMAN",
  "URDU",
  "INHERIT",
  "INITIAL",
  "REVERT",
  "REVERT_LAYER",
  "UNSET",
  "NONE"
];

export default function CoreListDocs() {
  // start of nested list code sample
  const [open, setOpen] = useState(false);
  
  const [listStyleItem, setListStyleItem] = useState(listStyles[0]);
  const handleSelectChange = (event) => {
    setListStyleItem(event.target.value);
  };

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

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT1]}>
        Lists are a continuous group of text or images. They are composed of
        items containing primary and supplemental actions, which are represented
        by icons and text.
      </CoreTypographyBody1>

      <CodeImport name="CoreList" />

      <CoreH5>Introduction</CoreH5>

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT1]}>
        Lists present information in a concise, easy-to-follow format through a continuous, vertical index of text or images.
      </CoreTypographyBody1>

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB0]}>
        Wrappid CoreComponent CoreLists are implemented using a collection of related components:
      </CoreTypographyBody1>
      
      <CoreBox styleClasses={[CoreClasses.PADDING.PL2]}>
        <CoreList variant="HTML" listType="AUTO">
          <CoreListItem>
            <CoreListItemText primary="CoreList: a wrapper for list items. Renders as a <ul> by default." /> 
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="CoreList Item: a common list item. Renders as an <li> by default." />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="CoreList Item Button: an action element to be used inside a list item." /> 
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="CoreList Item Icon: an icon to be used inside of a list item." /> 
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="CoreList Item Avatar: an avatar to be used inside of a list item." />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="CoreList Item Text: a container inside a list item, used to display text content." /> 
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="CoreList Divider: a separator between list items." />
          </CoreListItem>
          
          <CoreListItem>
            <CoreListItemText primary="CoreList Subheader: a label for a nested list." />
          </CoreListItem>
        </CoreList>
      </CoreBox>
      
      <CodeSample
        title={"Basic List"}
        description={"This is a basic structure of CoreList that a user can use."}
        code={`
        <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
          <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}>
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
        description={"A nested list is a list that is contained within another list, making it an element of that list. This structure allows for the organization of data in a hierarchical or multi-dimensional manner. CoreList can also be used to make nested list. "}
        code={`
  <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
    <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}>
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
                      {open ? (<CoreIcon icon="arrow_back" />) : (<CoreIcon icon="arrow_forward" />)}
          </CoreListItemButton>
        </CoreListItem>
        <CoreCollapse in={open} >
              <CoreList disablePadding styleClasses={[CoreClasses.PADDING.PL2]}>
                <CoreListItemButton >
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

                      {open ? (<CoreIcon icon="arrow_back" />) : (<CoreIcon icon="arrow_forward" />)}
                      
                    </CoreListItemButton>
                  </CoreListItem>

                  <CoreCollapse in={open} >

                    <CoreList disablePadding styleClasses={[CoreClasses.PADDING.PL2]}>

                      <CoreListItemButton >

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
        description={"It allow you to structure and style lists that can represent folders and files, much like a file explorer."}
        code={`
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
            <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}>
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
        description={"The CoreListItem component can be styled or marked as <selected> to indicate that it is currently active or has been chosen by the user. This is often used in navigation menus, lists of options, or any interactive list where selecting an item is important."}
        code={`
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
            <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25]}>
              <CoreList>
                <CoreListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                  <CoreListItemIcon>
                  <CoreIcon icon="drafts" />
                  </CoreListItemIcon>
                  <CoreListItemText primary="Inbox" />
                </CoreListItemButton>
                <CoreListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                  <CoreListItemIcon>
                  <CoreIcon icon="inbox" />
                  </CoreListItemIcon>
                  <CoreListItemText primary="Drafts" />
                </CoreListItemButton>
              </CoreList>
              <CoreDivider />
              <CoreList component="nav" aria-label="secondary mailbox folder">
                <CoreListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                  <CoreListItemText primary="Trash" />
                </CoreListItemButton>
                <CoreListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                  <CoreListItemText primary="Spam" />
                </CoreListItemButton>
              </CoreList>
            </CoreStack>
          </CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
              <CoreStack component={CorePaper} styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.PADDING.P2]}>
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
        description={<><CoreTypographyBody1>In Wrappid, you can control the alignment of CoreList components in various ways depending on how you want the content(text, icons, etc.) within the items to be arranged.</CoreTypographyBody1><CoreDivider /><CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB0, CoreClasses.PADDING.PT1]}>Use Cases:
        </CoreTypographyBody1>

        <CoreBox styleClasses={[CoreClasses.PADDING.PL2]}>
          <CoreList variant="HTML" listType="AUTO">
            <CoreListItem>
              <CoreListItemText primary="Navigation: Aligning items in navigation bars or side menus."/>
            </CoreListItem>

            <CoreListItem>
              <CoreListItemText primary="File Explorer UI: Creating a visually organized list of files and folders."/>
            </CoreListItem>

            <CoreListItem>
              <CoreListItemText primary="Custom Lists: Any scenario where you need specific control over how list items are displayed and aligned."/>
            </CoreListItem>
          </CoreList>
        </CoreBox>
        </>
        }
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

      <>
        <CodeSample
          title={"List_Style"}
          description={"List_Style helps you to directly implement types of list style in your list. "}
          code={`
        <CoreList varient="HTML" listType="${listStyleItem}">
          <CoreListItem>
            <CoreListItemText primary="Write your text" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="Item" />
          </CoreListItem>
        </CoreList>
        `}
          renderElement={
            <> 
              <CoreGrid styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreSelect
                    gridProps={{ gridSize: { md: 6 } }}
                    id="listStyleItem"
                    value={listStyleItem}
                    handleChange={(event) => handleSelectChange(event)}
                    options={Object.keys(listStyles).map((key) => ({
                      id   : listStyles[key],
                      label: listStyles[key],
                      value: listStyles[key],
                    }))}
                  />
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreTypographyBody1>Select from Dropdown to see our other listTypes</CoreTypographyBody1>
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreList variant="HTML" listType={`${listStyleItem}`}>
                    <CoreListItem>
                      <CoreListItemText primary="Car" />
                    </CoreListItem>

                    <CoreListItem>
                      <CoreListItemText primary="Plane" />
                    </CoreListItem>

                    <CoreListItem>
                      <CoreListItemText primary="Rocket" />
                    </CoreListItem>
                  </CoreList>
            
                </CoreBox>
              </CoreGrid>
            
            </>}
        />
      </>
      <ComponentProps component={CoreList} />
    </>
  );
}
