import * as React from "react";

import {
  CoreBox,
  CoreButton,
  CoreFade,
  CoreH4,
  CoreMenu,
  CoreClasses,
  CoreTypographyBody1,
  CoreStack, CorePaper, CoreMenuList, CoreMenuItem, CoreIcon, CoreListItemIcon, CoreListItemText, CoreIconButton, CoreDivider
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

{/* eslint-disable-next-line etc/no-commented-out-code */}
{/*const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;*/}

export default function CoreMenuDocs() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const HandleClose = () => {
    setAnchorEl(null);
  };
  const [contextMenu, setContextMenu] = React.useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
      // Other native context menus might behave different.
      // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
        null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <>
      <CoreH4>CoreMenu</CoreH4>
  
      <CoreTypographyBody1>
      Menus display a list of choices on temporary surfaces.
      </CoreTypographyBody1>
  
      <CodeSample
        title={" Basic menu (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox>
            <CoreButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
        Dashboard
            </CoreButton>

            <CoreMenu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ "aria-labelledby": "basic-button" }}
            >
              <CoreMenuItem onClick={handleClose}>Profile</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>My account</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>Logout</CoreMenuItem>
            </CoreMenu>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Icon menu"}
        description={"In desktop viewport, padding is increased to give more space to the menu."}
        code={``}
        renderElement={<>
               <CoreStack  styleClasses={[CoreClasses.WIDTH.W_25]}>
        <CoreMenuList>
          <CoreMenuItem>
            <CoreListItemIcon>
              <CoreIcon icon={"mail"} />
            </CoreListItemIcon>

            <CoreListItemText>Message</CoreListItemText>

            <CoreIconButton aria-label="add" color="secondary">
              <CoreIcon>add</CoreIcon>
            </CoreIconButton>
          </CoreMenuItem>

          <CoreMenuItem>
            <CoreListItemIcon>
              <CoreIcon icon={"phone"} />
            </CoreListItemIcon>

            <CoreListItemText>Phone</CoreListItemText>

            <CoreIconButton aria-label="add" color="secondary">
              <CoreIcon>add</CoreIcon>
            </CoreIconButton>
          </CoreMenuItem>

          <CoreMenuItem>
            <CoreListItemIcon>
              <CoreIcon icon={"delete"} />
            </CoreListItemIcon>

            <CoreListItemText>Trash</CoreListItemText>

            <CoreIconButton aria-label="add" color="secondary">
              <CoreIcon>add</CoreIcon>
            </CoreIconButton>
          </CoreMenuItem>
        </CoreMenuList>
      </CoreStack>
                  </>}
      />

      <CodeSample
        title={"Dense menu"}
        description={"For the menu that has long list and long text, you can use the dense prop to reduce the padding and text size."}
        code={``}
        renderElement={<>
          <CoreStack styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreMenuList dense>
              <CoreMenuItem>
                <CoreListItemText inset>Single</CoreListItemText>
              </CoreMenuItem>

              <CoreMenuItem>
                <CoreListItemText inset>2.5</CoreListItemText>
              </CoreMenuItem>

              <CoreMenuItem>
                <CoreListItemText inset>Double</CoreListItemText>
              </CoreMenuItem>

              <CoreDivider />

              <CoreMenuItem>
                <CoreListItemText>Add space before paragraph</CoreListItemText>
              </CoreMenuItem>

              <CoreMenuItem>
                <CoreListItemText>Add space after paragraph</CoreListItemText>
              </CoreMenuItem>

              <CoreMenuItem>
                <CoreListItemText>Custom spacing...</CoreListItemText>
              </CoreMenuItem>
            </CoreMenuList>
          </CoreStack>
        </>}
      />

      <CodeSample
        title={"Selected menu (NOT_WORKING)"}
        description={"If used for item selection, when opened, simple menus places the initial focus on the selected menu item. The currently selected menu item is set using the selected prop (from ListItem). To use a selected menu item without impacting the initial focus, set the variant prop to \"menu\"."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Positioned menu (NOT_WORKING)"}
        description={"Because the Menu component uses the Popover component to position itself, you can use the same positioning props to position it. For instance, you can display the menu on top of the anchor:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox>
            <CoreButton
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
        Dashboard
            </CoreButton>

            <CoreMenu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                horizontal: "left",
                vertical  : "top",
              }}
              transformOrigin={{
                horizontal: "left",
                vertical  : "top",
              }}
            >
              <CoreMenuItem onClick={handleClose}>Profile</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>My account</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>Logout</CoreMenuItem>
            </CoreMenu>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"MenuList composition (NOT_WORKING)"}
        description={"The Menu component uses the Popover component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a MenuList component that you can compose, with Popper in this example.\
        The primary responsibility of the MenuList component is to handle the focus."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Account menu (NOT_WORKING)"}
        description={"Menu content can be mixed with other components like Avatar."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <CoreBox styleClasses = {[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.DISPLAY.FLEX, CoreClasses.TEXT.TEXT_CENTER]}>
            <CoreTypographyBody1 sx={{ minWidth: 100 }}>Contact</CoreTypographyBody1>

            <CoreTypographyBody1 sx={{ minWidth: 100 }}>Profile</CoreTypographyBody1>

            <CoreTooltip title="Account settings">
              <CoreIconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <CoreAvatar sx={{ height: 32, width: 32 }}>M</CoreAvatar>
              </CoreIconButton>
            </CoreTooltip>
          </CoreBox>

          <CoreMenu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx       : {
                "& .MuiAvatar-root": {
                  height: 32,
                  ml    : -0.5,
                  mr    : 1,
                  width : 32,
                },
                "&:before": {
                  bgcolor  : "background.paper",
                  content  : "\"\"",
                  display  : "block",
                  height   : 10,
                  position : "absolute",
                  right    : 14,
                  top      : 0,
                  transform: "translateY(-50%) rotate(45deg)",
                  width    : 10,
                  zIndex   : 0,
                },
                filter  : "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt      : 1.5,
                overflow: "visible",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <CoreMenuItem onClick={handleClose}>
              <CoreAvatar /> Profile
            </CoreMenuItem>

            <CoreMenuItem onClick={handleClose}>
              <CoreAvatar /> My account
            </CoreMenuItem>

            <CoreDivider />

            <CoreMenuItem onClick={handleClose}>
              <CoreListItemIcon>
                <CorePersonAdd fontSize="small" />
              </CoreListItemIcon>
          Add another account
            </CoreMenuItem>

            <CoreMenuItem onClick={handleClose}>
              <CoreListItemIcon>
                <CoreSettings fontSize="small" />
              </CoreListItemIcon>
          Settings
            </CoreMenuItem>

            <CoreMenuItem onClick={handleClose}>
              <CoreListItemIcon>
                <CoreLogout fontSize="small" />
              </CoreListItemIcon>
        Core  LogoCoreLogoutut
            </CoreMenuItem>
          </CoreMenu> */}
        </>}
      />

      <CodeSample
        title={"Customization (NOT_WORKING)"}
        description={"Here is an example of customizing the component. You can learn more about this in the overrides documentation page."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Max height menu (NOT_WORKING)"}
        description={"If the height of a menu prevents all menu items from being displayed, the menu can scroll internally."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>

          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox>
            <CoreIconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <CoreMoreVertIcon />
            </CoreIconButton>

            <CoreMenu
              id="long-menu"
              MenuListProps={{ "aria-labelledby": "long-button" }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width    : "20ch",
                },
              }}
            >
              {options.map((option) => (
                <CoreMenuItem key={option} selected={option === "Pyxis"} onClick={handleClose}>
                  {option}
                </CoreMenuItem>
              ))}
            </CoreMenu>
          </CoreBox> */}
        </>
        }
      />

      <CodeSample
        title={"Limitations (NOT_WORKING)"}
        description={"There is a flexbox bug that prevents text-overflow: ellipsis from working in a flexbox layout. You can use the Typography component with noWrap to workaround this issue:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<> 
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CorePaper styleClasses= {[CoreClasses.WIDTH.W_10]} >
            <CoreMenuList>
              <CoreMenuItem>
                <CoreListItemIcon>
                  <SendIcon fontSize="small" />
                </CoreListItemIcon>

                <CoreTypographyBody1 variant="inherit">A short message</CoreTypographyBody1>
              </CoreMenuItem>

              <CoreMenuItem>
                <CoreListItemIcon>
                  <PriorityHighIcon fontSize="small" />
                </CoreListItemIcon>

                <CoreTypographyBody1 variant="inherit">A very long text that overflows</CoreTypographyBody1>
              </CoreMenuItem>

              <CoreMenuItem>
                <CoreListItemIcon>
                  <CoreDraftsIcon fontSize="small" />
                </CoreListItemIcon>

                <CoreTypographyBody1 variant="inherit" noWrap>
              A very long text that overflows
                </CoreTypographyBody1>
              </CoreMenuItem>
            </CoreMenuList>
          </CorePaper> */}
        </>}
      />

      <CodeSample
        title={"Change transition (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={` <CoreBox>
  <CoreButton
    id="fade-button"
    aria-controls={open ? "fade-menu" : undefined}
    aria-haspopup="true"
    aria-expanded={open ? "true" : undefined}
    onClick={handleClick}
  >
   Dashboard
  </CoreButton>

  <CoreMenu
    id="fade-menu"
    MenuListProps={{ "aria-labelledby": "fade-button" }}
    anchorEl={anchorEl}
    open={open}
    onClose={HandleClose}
    TransitionComponent={CoreFade}
  >
    <CoreMenuItem onClick={HandleClose}>Profile</CoreMenuItem>

    <CoreMenuItem onClick={HandleClose}>My account</CoreMenuItem>

    <CoreMenuItem onClick={HandleClose}>Logout</CoreMenuItem>
  </CoreMenu>
</CoreBox>
        `}
        renderElement={<>
          <CoreBox>
            <CoreButton
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
        Dashboard
            </CoreButton>

            <CoreMenu
              id="fade-menu"
              MenuListProps={{ "aria-labelledby": "fade-button" }}
              anchorEl={anchorEl}
              open={open}
              onClose={HandleClose}
              TransitionComponent={CoreFade}
            >
              <CoreMenuItem onClick={HandleClose}>Profile</CoreMenuItem>

              <CoreMenuItem onClick={HandleClose}>My account</CoreMenuItem>

              <CoreMenuItem onClick={HandleClose}>Logout</CoreMenuItem>
            </CoreMenu>
          </CoreBox>
        
        </>}
      />

      <CodeSample
        title={"Context menu (NOT_WORKING)"}
        description={"Here is an example of a context menu. (Right click to open.)"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
            <CoreTypographyBody1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus,
        bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum
        vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor
        porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis
        vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus
        massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit
        amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus
        consequat. Suspendisse lacinia tellus a libero volutpat maximus.
            </CoreTypographyBody1>

            <CoreMenu
              open={contextMenu !== null}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={
                contextMenu !== null
                  ? { left: contextMenu.mouseX, top: contextMenu.mouseY }
                  : undefined
              }
            >
              <CoreMenuItem onClick={handleClose}>Copy</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>Print</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>Highlight</CoreMenuItem>

              <CoreMenuItem onClick={handleClose}>Email</CoreMenuItem>
            </CoreMenu>
          </CoreBox>
        </>}
      />
        
      <CodeSample
        title={"Complementary projects (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreMenu} /> */}
      
    </>
  );
}