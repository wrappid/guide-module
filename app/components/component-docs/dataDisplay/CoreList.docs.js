import React, { useState } from "react";

import {
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
  CoreAvatar,
  CoreCheckbox,
  CoreSwitch,
  CoreIconButton
  
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

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
  
  const handleClick = () => {
    setOpen(!open);
  };
  // end of nested list code sample 
 
  // start of listStyle
  const [listStyleItem, setListStyleItem] = useState(listStyles[0]);
  const handleSelectChange = (event) => {
    setListStyleItem(event.target.value);
  };
  //end of listStyle

  // start of slected item list
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // end of selected item list

  // start of List Controls
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // end of list controls

  return (
    <>
      <ComponentDocs
        component={CoreList}
        description="Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text."
        samples={
          <>
            <CodeSample
              title={"Basic CoreList"}
              description={<>
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
                
                <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB0]}>
                  This is a basic structure of CoreList that a user can use.
                </CoreTypographyBody1>
              </>}
              code={`<CoreList>
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
</CoreList>`}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreIcon,
  CoreListItemText,
  CoreDivider,
  CoreListItemButton,
  CoreBox,
  CoreListItemIcon
} from "@wrappid/core";

export default function BasicCoreList() {
  return (
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
  );
}`}
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
              description={<>
                <CoreTypographyBody1>
                    CoreList can also be used to make nested list.
                </CoreTypographyBody1>

                <CodeSample
                  title={"Basic Nested List"}
                  description={"This is the basic structure of nested list using varient=\"HTML\" and liststyle props."}
                  code={`<CoreList variant="HTML" listType="DECIMAL">
  <CoreListItem>
    <CoreListItemText primary="List Item" />

    <CoreList variant="HTML" listType="UPPER_ROMAN">
      <CoreListItem>
        <CoreListItemText primary="List Item 1" />

        <CoreList variant="HTML" listType="LOWER_ROMAN">
          <CoreListItem>
            <CoreListItemText primary="List Item 1" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List Item 2" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List Item 3" />
          </CoreListItem>
        </CoreList>
      </CoreListItem>

      <CoreListItem>
        <CoreListItemText primary="List Item 2" />
      </CoreListItem>

      <CoreListItem>
        <CoreListItemText primary="List Item 3" />
      </CoreListItem>
    </CoreList>

  </CoreListItem>

  <CoreListItem>
    <CoreListItemText primary="List" />
  </CoreListItem>

  <CoreListItem>
    <CoreListItemText primary="Item" />
  </CoreListItem>
</CoreList>`}
                  expandedCode={`import {
  CoreList,
  CoreListItem,
  CoreListItemText
} from "@wrappid/core";

export default function BasicNestedList() {
  return (
    <CoreList variant="HTML" listType="DECIMAL">
      <CoreListItem>
        <CoreListItemText primary="List Item" />

        <CoreList variant="HTML" listType="UPPER_ROMAN">
          <CoreListItem>
            <CoreListItemText primary="List Item 1" />

            <CoreList variant="HTML" listType="LOWER_ROMAN">
              <CoreListItem>
                <CoreListItemText primary="List Item 1" />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="List Item 2" />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="List Item 3" />
              </CoreListItem>
            </CoreList>
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List Item 2" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List Item 3" />
          </CoreListItem>
        </CoreList>

      </CoreListItem>

      <CoreListItem>
        <CoreListItemText primary="List" />
      </CoreListItem>

      <CoreListItem>
        <CoreListItemText primary="Item" />
      </CoreListItem>
    </CoreList>
  );
}`}
                  renderElement={
                    
                    <CoreList variant="HTML" listType="DECIMAL">
                      <CoreListItem>
                        <CoreListItemText primary="List Item" />

                        <CoreList variant="HTML" listType="UPPER_ROMAN">
                          <CoreListItem>
                            <CoreListItemText primary="List Item 1" />

                            <CoreList variant="HTML" listType="LOWER_ROMAN">
                              <CoreListItem>
                                <CoreListItemText primary="List Item 1" />
                              </CoreListItem>

                              <CoreListItem>
                                <CoreListItemText primary="List Item 2" />
                              </CoreListItem>

                              <CoreListItem>
                                <CoreListItemText primary="List Item 3" />
                              </CoreListItem>
                            </CoreList>
                          </CoreListItem>

                          <CoreListItem>
                            <CoreListItemText primary="List Item 2" />
                          </CoreListItem>

                          <CoreListItem>
                            <CoreListItemText primary="List Item 3" />
                          </CoreListItem>
                        </CoreList>

                      </CoreListItem>

                      <CoreListItem>
                        <CoreListItemText primary="List" />
                      </CoreListItem>

                      <CoreListItem>
                        <CoreListItemText primary="Item" />
                      </CoreListItem>
                    </CoreList>
                     
                  }
                />

                <CodeSample
                  title={"Dropdown Nested List"}
                  description={"This structure allows for the organization of data in a hierarchical or multi-dimensional manner."}
                  code={`<CoreList variant="HTML" listType="DECIMAL">
  <CoreListItem>
    <CoreListItemText primary="List Item" />

    <CoreList variant="HTML" listType="UPPER_ROMAN">
      <CoreListItem>
        <CoreListItemText primary="List Item 1" />

        <CoreList variant="HTML" listType="LOWER_ROMAN">
          <CoreListItem>
            <CoreListItemText primary="List Item 1" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List Item 2" />
          </CoreListItem>

          <CoreListItem>
            <CoreListItemText primary="List Item 3" />
          </CoreListItem>
        </CoreList>
      </CoreListItem>

      <CoreListItem>
        <CoreListItemText primary="List Item 2" />
      </CoreListItem>

      <CoreListItem>
        <CoreListItemText primary="List Item 3" />
      </CoreListItem>
    </CoreList>

  </CoreListItem>

  <CoreListItem>
    <CoreListItemText primary="List" />
  </CoreListItem>

  <CoreListItem>
    <CoreListItemText primary="Item" />
  </CoreListItem>
</CoreList>`}
                  expandedCode={`import React from "react";

import {
  CoreBox,
  CoreClasses,
  CoreCollapse,
  CoreIcon,
  CoreList,
  CoreListItem,
  CoreListItemButton,
  CoreListItemIcon,
  CoreListItemText
} from "@wrappid/core";

export default function DropdownNestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
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
                <CoreIcon icon="merge_type" />
              </CoreListItemIcon>

              <CoreListItemText primary="Type" />

              {open ? (<CoreIcon icon="keyboard_arrow_up" />) : (<CoreIcon icon="keyboard_arrow_down" />)}
                      
            </CoreListItemButton>
          </CoreListItem>

          <CoreCollapse in={open} >

            <CoreList disablePadding styleClasses={[CoreClasses.PADDING.PL2]}>

              <CoreListItemButton >

                <CoreListItemText primary="Type 1" />
              </CoreListItemButton>

              <CoreListItemButton >

                <CoreListItemText primary="Type 2" />
              </CoreListItemButton>
            </CoreList>
          </CoreCollapse>
        </CoreList>
      </CoreStack>

    </CoreBox>
  );
}`}
                  renderElement={
                    
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
                                <CoreIcon icon="merge_type" />
                              </CoreListItemIcon>

                              <CoreListItemText primary="Type" />

                              {open ? (<CoreIcon icon="keyboard_arrow_up" />) : (<CoreIcon icon="keyboard_arrow_down" />)}
                      
                            </CoreListItemButton>
                          </CoreListItem>

                          <CoreCollapse in={open} >

                            <CoreList disablePadding styleClasses={[CoreClasses.PADDING.PL2]}>

                              <CoreListItemButton >

                                <CoreListItemText primary="Type 1" />
                              </CoreListItemButton>

                              <CoreListItemButton >

                                <CoreListItemText primary="Type 2" />
                              </CoreListItemButton>
                            </CoreList>
                          </CoreCollapse>
                        </CoreList>
                      </CoreStack>

                    </CoreBox>
                     
                  }
                />
              </>}
            />

            <CodeSample
              title={"Folder List"}
              description="It allow you to structure and style lists that can represent folders and files, much like a file explorer."
              code={`<CoreList>
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
</CoreList>`}
              expandedCode={`import {
  CoreAvatar,
  CoreBox,
  CoreClasses,
  CoreIcon,
  CoreList,
  CoreListItem,
  CoreListItemAvatar,
  CoreListItemText,
  CorePaper,
  CoreStack
} from "@wrappid/core";

export default function FolderList() {
  return (
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
  );
}`}
              renderElement={
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
              }
            />

            <CodeSample
              title={"Interactive (Comming Soon)"}
              //needed to discuss first
            />
            
            <CodeSample
              title={"Selected ListItem"}
              description="The CoreListItem component can be styled or marked as <selected> to indicate that it is currently active or has been chosen by the user. This is often used in navigation menus, lists of options, or any interactive list where selecting an item is important."
              code={`<CoreList>
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
</CoreList>`}
              expandedCode={`import React from "react";

import {
  CoreBox,
  CoreClasses,
  CoreDivider,
  CoreIcon,
  CoreList,
  CoreListItemButton,
  CoreListItemIcon,
  CoreListItemText,
  CorePaper,
  CoreStack
} from "@wrappid/core";

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
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
  );
}`}
              renderElement={
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
              }
            />

            <CodeSample
              title={"Align list items"}
              description={<><CoreTypographyBody1>In Wrappid, you can control the alignment of CoreList components in various ways depending on how you want the content(text, icons, etc.) within the items to be arranged.</CoreTypographyBody1>
                
                <CoreTypographyBody1>Use Cases:
                </CoreTypographyBody1>

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
              </>
              }
              code={`<CoreList disablePadding>
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
        </>} />
    </CoreListItemButton>
  </CoreListItem>
</CoreList>`}
              expandedCode={`import {
  CoreAvatar,
  CoreList,
  CoreListItem,
  CoreListItemAvatar,
  CoreListItemButton,
  CoreListItemText,
  CoreTypographyBody1
} from "@wrappid/core";

export default function AlignListItem() {
  return (
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
            </>} />
        </CoreListItemButton>
      </CoreListItem>
    </CoreList>
  );
}`}
              renderElement={
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
              }
            />

            <CodeSample
              title={"List Style Props"}
              description={"List_Style helps you to directly implement types of list style in your list. Ensure to use variant=HTML in the code below, as listType will not function properly without it."}
              code={`<CoreList variant="HTML" listType={${listStyleItem}}>
  <CoreListItem>
    <CoreListItemText primary="Car" />
  </CoreListItem>

  <CoreListItem>
    <CoreListItemText primary="Plane" />
  </CoreListItem>

  <CoreListItem>
    <CoreListItemText primary="Rocket" />
  </CoreListItem>
</CoreList>`}
              expandedCode={`import {
  CoreBox,
  CoreClasses,
  CoreGrid,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreSelect,
  CoreTypographyBody1
} from "@wrappid/core";

export default function ListType() {
  return (
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
        <CoreList variant="HTML" listType={${listStyleItem}}>
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
  );
}`}
              renderElement={
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
              }
            />

            <CodeSample
              title={"List Controls"}
              description={<>
                <CodeSample
                  title={"Checkbox"}
                  description={<><CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT1]}>A checkbox can either be a primary action or a secondary action.</CoreTypographyBody1><CoreTypographyBody1>The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.
                  </CoreTypographyBody1>
                  </>
                  }
                  code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_50]}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = "${"checkbox-list-label-${value}"}";
        <CoreListItem
            key={value}
            secondaryAction={
              <CoreListItemButton edge="end">
                <CoreIcon icon="chat"/>
              </CoreListItemButton>
            }
            disablePadding
          >
            <CoreListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <CoreListItemIcon>
                <CoreCheckbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </CoreListItemIcon>

              <CoreListItemText id={labelId} primary={"${"Line item ${value + 1}"}"} />
            </CoreListItemButton>
          </CoreListItem>
        );
      })}
    </CoreList>`}
                  expandedCode={`import React from "react";

import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreCheckbox,
  CoreListItemButton,
  CoreIcon
} from "@wrappid/core";

export default function ListControlsCheckboxone() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <CoreList styleClasses={[CoreClasses.WIDTH.W_50]}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = "${"checkbox-list-label-${value}"}";

        return (
          <CoreListItem
            key={value}
            secondaryAction={
              <CoreListItemButton edge="end">
                <CoreIcon icon="chat"/>
              </CoreListItemButton>
            }
            disablePadding
          >
            <CoreListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <CoreListItemIcon>
                <CoreCheckbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </CoreListItemIcon>

              <CoreListItemText id={labelId} primary={"${"Line item ${value + 1}"}"} />
            </CoreListItemButton>
          </CoreListItem>
        );
      })}
    </CoreList>
  );
}`}
                  renderElement={
                    <CoreList styleClasses={[CoreClasses.WIDTH.W_50]}>
                      {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                          <CoreListItem
                            key={value}
                            secondaryAction={
                              <CoreListItemButton edge="end">
                                <CoreIcon icon="chat"/>
                              </CoreListItemButton>
                            }
                            disablePadding
                          >
                            <CoreListItemButton role={undefined} onClick={handleToggle(value)} dense>
                              <CoreListItemIcon>
                                <CoreCheckbox
                                  edge="start"
                                  checked={checked.indexOf(value) !== -1}
                                  tabIndex={-1}
                                  disableRipple
                                  inputProps={{ "aria-labelledby": labelId }}
                                />
                              </CoreListItemIcon>

                              <CoreListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </CoreListItemButton>
                          </CoreListItem>
                        );
                      })}
                    </CoreList>
                  }
                />

                <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT1]}>The checkbox is the secondary action for the list item and a separate target.
                </CoreTypographyBody1>
              </>
              }
              code={`<CoreList dense styleClasses={[CoreClasses.WIDTH.W_50]}>
  {[0, 1, 2, 3].map((value) => {
    const labelId = "checkbox-list-secondary-label-${"${value}"}";
      <CoreListItem
        key={value}
        secondaryAction={
          <CoreCheckbox
            edge="end"
            onChange={handleToggle(value)}
            checked={checked.indexOf(value) !== -1}
            inputProps={{ "aria-labelledby": labelId }}
          />
        }
        disablePadding
      >
        <CoreListItemButton>
          <CoreListItemAvatar>
            <CoreAvatar
              alt={"/Avatar n°${"${value + 1}"}"}
              src={"https://picsum.photos/200?random=1"}
            />
          </CoreListItemAvatar>

          <CoreListItemText id={labelId} primary={"Line item ${"${value + 1}"}"} />
        </CoreListItemButton>
      </CoreListItem>
    );
  })}
</CoreList>`}
              expandedCode={`import React from "react";

import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreCheckbox,
  CoreListItemButton,
  CoreListItemAvatar,
  CoreAvatar
} from "@wrappid/core";

export default function ListControlsCheckboxtwo() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <CoreList dense styleClasses={[CoreClasses.WIDTH.W_50]}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = "checkbox-list-secondary-label-${"${value}"}";

        return (
          <CoreListItem
            key={value}
            secondaryAction={
              <CoreCheckbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <CoreListItemButton>
              <CoreListItemAvatar>
                <CoreAvatar
                  alt={"/Avatar n°${"${value + 1}"}"}
                  src={"https://picsum.photos/200?random=1"}
                />
              </CoreListItemAvatar>

              <CoreListItemText id={labelId} primary={"Line item ${"${value + 1}"}"} />
            </CoreListItemButton>
          </CoreListItem>
        );
      })}
    </CoreList>
  );
}`}
              renderElement={
                <CoreList dense styleClasses={[CoreClasses.WIDTH.W_50]}>
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;

                    return (
                      <CoreListItem
                        key={value}
                        secondaryAction={
                          <CoreCheckbox
                            edge="end"
                            onChange={handleToggle(value)}
                            checked={checked.indexOf(value) !== -1}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        }
                        disablePadding
                      >
                        <CoreListItemButton>
                          <CoreListItemAvatar>
                            <CoreAvatar
                              alt={`Avatar n°${value + 1}`}
                              src={"https://picsum.photos/200?random=1"}
                            />
                          </CoreListItemAvatar>

                          <CoreListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        </CoreListItemButton>
                      </CoreListItem>
                    );
                  })}
                </CoreList>
              }
            />

            <CodeSample
              title={"Switch"}
              description={<><CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT1]}>The switch is the secondary action and a separate target.
              </CoreTypographyBody1>
              </>
              }
              code={`<CoreList
  styleClasses={[CoreClasses.WIDTH.W_50]}
  subheader={<CoreListSubheader>Settings</CoreListSubheader>}
>
  <CoreListItem>
    <CoreListItemIcon>
      <CoreIcon icon="wifi"/>
    </CoreListItemIcon>

    <CoreListItemText id="switch-list-label-wifi" primary="Wi-Fi" />

    <CoreSwitch
      edge="end"
      onChange={handleToggle("wifi")}
      checked={checked.indexOf("wifi") !== -1}
      inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
    />
  </CoreListItem>

  <CoreListItem>
    <CoreListItemIcon>
      <CoreIcon icon="bluetooth"/>
    </CoreListItemIcon>

    <CoreListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />

    <CoreSwitch
      edge="end"
      onChange={handleToggle("bluetooth")}
      checked={checked.indexOf("bluetooth") !== -1}
      inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
    />
  </CoreListItem>
</CoreList>`}
              expandedCode={`import React from "react";

import {
  CoreSwitch,
  CoreClasses,
  CoreIcon,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreListSubheader,
  CoreListItemIcon
} from "@wrappid/core";

export default function ListControlsSwitch() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <CoreList
      styleClasses={[CoreClasses.WIDTH.W_50]}
      subheader={<CoreListSubheader>Settings</CoreListSubheader>}
    >
      <CoreListItem>
        <CoreListItemIcon>
          <CoreIcon icon="wifi"/>
        </CoreListItemIcon>

        <CoreListItemText id="switch-list-label-wifi" primary="Wi-Fi" />

        <CoreSwitch
          edge="end"
          onChange={handleToggle("wifi")}
          checked={checked.indexOf("wifi") !== -1}
          inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
        />
      </CoreListItem>

      <CoreListItem>
        <CoreListItemIcon>
          <CoreIcon icon="bluetooth"/>
        </CoreListItemIcon>

        <CoreListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />

        <CoreSwitch
          edge="end"
          onChange={handleToggle("bluetooth")}
          checked={checked.indexOf("bluetooth") !== -1}
          inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
        />
      </CoreListItem>
    </CoreList>
  );
}`}
              renderElement={
                <CoreList
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  subheader={<CoreListSubheader>Settings</CoreListSubheader>}
                >
                  <CoreListItem>
                    <CoreListItemIcon>
                      <CoreIcon icon="wifi"/>
                    </CoreListItemIcon>

                    <CoreListItemText id="switch-list-label-wifi" primary="Wi-Fi" />

                    <CoreSwitch
                      edge="end"
                      onChange={handleToggle("wifi")}
                      checked={checked.indexOf("wifi") !== -1}
                      inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
                    />
                  </CoreListItem>

                  <CoreListItem>
                    <CoreListItemIcon>
                      <CoreIcon icon="bluetooth"/>
                    </CoreListItemIcon>

                    <CoreListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />

                    <CoreSwitch
                      edge="end"
                      onChange={handleToggle("bluetooth")}
                      checked={checked.indexOf("bluetooth") !== -1}
                      inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
                    />
                  </CoreListItem>
                </CoreList>
              }
            />

            <CodeSample
              title={"Scrollable List"}
              description="We can use the CoreList to make it scrollable. It renders rows and can easily handle more."
              code={`<CoreList>
  {[1,2,3,4,5,6,7,8,9,10,11].map((item) => (
    <CoreListItem key={"${`item-${"${item}"}`}"}>
      <CoreListItemText primary={${`Item ${"${item}"}`}} />
    </CoreListItem>
  ))}
</CoreList>`}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreBox
} from "@wrappid/core";

export default function ScrollableList() {

  return (
    <CoreBox height={200} styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.OVERFLOW.OVERFLOW_SCROLL]}>
      <CoreList>
        {[1,2,3,4,5,6,7,8,9,10,11].map((item) => (
          <CoreListItem key={"${`item-${"${item}"}`}"}>
            <CoreListItemText primary={${`Item ${"${item}"}`}} />
          </CoreListItem>
        ))}
      </CoreList>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox height={200} styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.OVERFLOW.OVERFLOW_SCROLL]}>
                  <CoreList>
                    {[
                      0,
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10,
                      11
                    ].map((item) => (
                      <CoreListItem key={`item-${item}`}>
                        <CoreListItemText primary={`Item ${item}`} />
                      </CoreListItem>
                    ))}
                  </CoreList>
                </CoreBox>

              }
            />
            
            <CodeSample
              title={"Sticky Subheader"}
              description="Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning."
              code={`<CoreList
        subheader={<li />}
      >
        {[1,2,3,4].map((sectionId) => (
          <li key={${"section-${sectionId}"}}>
            <ul>
              <CoreListSubheader>{${"I'm sticky ${sectionId}"}}</CoreListSubheader>

              {[0, 1, 2].map((item) => (
                <CoreListItem key={${"item-${sectionId}-${item}"}}>
                  <CoreListItemText primary={${"Item ${item}"}} />
                </CoreListItem>
              ))}
            </ul>
          </li>
        ))}
      </CoreList>`}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreBox,
  CoreListSubheader
} from "@wrappid/core";

export default function StickySubheader() {

  return (
    <CoreBox height={200} styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.OVERFLOW.OVERFLOW_SCROLL]}>
      <CoreList
        subheader={<li />}
      >
        {[1,2,3,4].map((sectionId) => (
          <li key={${`section-${"${sectionId}"}`}}>
            <ul>
              <CoreListSubheader>{${`I'm sticky ${"${sectionId}"}`}}</CoreListSubheader>

              {[0, 1, 2].map((item) => (
                <CoreListItem key={${`${"item-${sectionId}-${item}"}`}}>
                  <CoreListItemText primary={${`${"Item ${item}"}`}} />
                </CoreListItem>
              ))}
            </ul>
          </li>
        ))}
      </CoreList>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox height={200} styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.OVERFLOW.OVERFLOW_SCROLL]}>
                  <CoreList
                    subheader={<li />}
                  >
                    {[
                      0,
                      1,
                      2,
                      3,
                      4
                    ].map((sectionId) => (
                      <li key={`section-${sectionId}`}>
                        <ul>
                          <CoreListSubheader>{`I'm sticky ${sectionId}`}</CoreListSubheader>

                          {[0, 1, 2].map((item) => (
                            <CoreListItem key={`item-${sectionId}-${item}`}>
                              <CoreListItemText primary={`Item ${item}`} />
                            </CoreListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </CoreList>
                </CoreBox>
              }
            />

            <CodeSample
              title={"Inset List Item"}
              description={<CoreTypographyBody1>The <CodeBlock>inset</CodeBlock> prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.</CoreTypographyBody1>}
              code={`<CoreList
  styleClasses={[CoreClasses.WIDTH.W_50]}
  aria-label="contacts"
>
  <CoreListItem disablePadding>
    <CoreListItemButton>
      <CoreListItemIcon>
        <CoreIcon icon="star"/>
      </CoreListItemIcon>

      <CoreListItemText primary="Arka" />
    </CoreListItemButton>
  </CoreListItem>

  <CoreListItem disablePadding>
    <CoreListItemButton>
      <CoreListItemText inset primary="Dawn" />
    </CoreListItemButton>
  </CoreListItem>
</CoreList>`}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreListItemButton,
  CoreListItemIcon,
  CoreIcon
} from "@wrappid/core";

export default function InsetListItem() {

  return (
    <CoreList
      styleClasses={[CoreClasses.WIDTH.W_50]}
      aria-label="contacts"
    >
      <CoreListItem disablePadding>
        <CoreListItemButton>
          <CoreListItemIcon>
            <CoreIcon icon="star"/>
          </CoreListItemIcon>

          <CoreListItemText primary="Arka" />
        </CoreListItemButton>
      </CoreListItem>

      <CoreListItem disablePadding>
        <CoreListItemButton>
          <CoreListItemText inset primary="Dawn" />
        </CoreListItemButton>
      </CoreListItem>
    </CoreList>
  );
}`}
              renderElement={
                <CoreList
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  aria-label="contacts"
                >
                  <CoreListItem disablePadding>
                    <CoreListItemButton>
                      <CoreListItemIcon>
                        <CoreIcon icon="star"/>
                      </CoreListItemIcon>

                      <CoreListItemText primary="Arka" />
                    </CoreListItemButton>
                  </CoreListItem>

                  <CoreListItem disablePadding>
                    <CoreListItemButton>
                      <CoreListItemText inset primary="Dawn" />
                    </CoreListItemButton>
                  </CoreListItem>
                </CoreList>
              }
            />

            <CodeSample
              title={"Gutterless list"}
              description={<><CoreTypographyBody1>When rendering a list within a component that defines its own gutters, <CodeBlock>ListItem</CodeBlock> gutters can be disabled with

                <CodeBlock>disableGutters</CodeBlock>
                .
              </CoreTypographyBody1></>}
              code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_50]}>
  {[1, 2, 3].map((value) => (
    <CoreListItem
      key={value}
      disableGutters
      secondaryAction={
        <CoreIconButton aria-label="comment">
          <CoreIcon icon="chat"/>
        </CoreIconButton>
      }
    >
      <CoreListItemText primary={${"Line item ${value}"}} />
    </CoreListItem>
  ))}
</CoreList>`}
              expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreIcon,
  CoreIconButton
} from "@wrappid/core";

export default function GutterlessList() {

  return (
    <CoreList styleClasses={[CoreClasses.WIDTH.W_50]}>
      {[1, 2, 3].map((value) => (
        <CoreListItem
          key={value}
          disableGutters
          secondaryAction={
            <CoreIconButton aria-label="comment">
              <CoreIcon icon="chat"/>
            </CoreIconButton>
          }
        >
          <CoreListItemText primary={"${"Line item ${value}"}"} />
        </CoreListItem>
      ))}
    </CoreList>
  );
}`}
              renderElement={
                <CoreList styleClasses={[CoreClasses.WIDTH.W_50]}>
                  {[1, 2, 3].map((value) => (
                    <CoreListItem
                      key={value}
                      disableGutters
                      secondaryAction={
                        <CoreIconButton aria-label="comment">
                          <CoreIcon icon="chat"/>
                        </CoreIconButton>
                      }
                    >
                      <CoreListItemText primary={`Line item ${value}`} />
                    </CoreListItem>
                  ))}
                </CoreList>
              }
            />
            
            <CodeSample
              title={"Virtualized List (Comming Soon)"}
              // we didn't implemented it since we find any support for mobile till now but we can achieve it using Scrollable List 
            />
            
            <CodeSample
              title={"Customization (Comming Soon)"}
              //this was not implemented due to we don't have any customization page till now
              
            />

          </>
        }
      />
    </>
  );
}
