import {
  CoreAvatar,
  CoreClasses,
  CoreStack,
  CoreSpan,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreAvatarDocs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreAvatar
      </CoreH4>

      <CoreTypographyBody1>
        Avatars are found throughout material design with uses in everything from tables to dialog
        menus.
      </CoreTypographyBody1>

      <CodeSample
        title={"Image avatars"}
        description={
          <>
            Image avatars can be created by passing standard
            <CoreSpan code={true}>{" img "}</CoreSpan>props

            <CoreSpan code={true}>{" src "}</CoreSpan>or

            <CoreSpan code={true}>{" srcSet "}</CoreSpan>to the component.
          </>
        }
        code={`
<CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />
<CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />
<CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />
        `}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />

            <CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />

            <CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Letter avatars"}
        description={
          <>
            Avatars containing simple characters can be created by passing a string as
            {/* eslint-disable-next-line react/jsx-newline */}
            <CoreSpan code={true}>{" children "}</CoreSpan>
          </>
        }
        code={`
<CoreAvatar>W</CoreAvatar>
<CoreAvatar>WD</CoreAvatar>
<CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>W</CoreAvatar>
<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>WR</CoreAvatar>
        `}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreAvatar>W</CoreAvatar>

            <CoreAvatar>WR</CoreAvatar>

            <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>W</CoreAvatar>

            <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>WR</CoreAvatar>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Sizes"}
        description={
          <>
            You can change the size of the avatar with the{" "}

            <CoreSpan code={true}>{" height "}</CoreSpan> and

            <CoreSpan code={true}>{" width "}</CoreSpan> CSS properties.

            {/* eslint-disable-next-line react/jsx-newline */}
          </>
        }
        code={`
<CoreAvatar 
  src="https://mui.com/static/images/avatar/1.jpg"
  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} />

<CoreAvatar 
  src="https://mui.com/static/images/avatar/2.jpg"
  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]} />

<CoreAvatar 
  src="https://mui.com/static/images/avatar/3.jpg"
  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]} />

<CoreAvatar 
  src="https://mui.com/static/images/avatar/1.jpg"
  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]} />

<CoreAvatar 
  src="https://mui.com/static/images/avatar/2.jpg"
  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]} />
        `}
        renderElement={
          <CoreStack direction="row">
            <CoreAvatar
              src="https://mui.com/static/images/avatar/1.jpg"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
            />

            <CoreAvatar
              src="https://mui.com/static/images/avatar/2.jpg"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
            />

            <CoreAvatar
              src="https://mui.com/static/images/avatar/3.jpg"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
            />

            <CoreAvatar
              src="https://mui.com/static/images/avatar/1.jpg"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}
            />

            <CoreAvatar
              src="https://mui.com/static/images/avatar/2.jpg"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]}
            />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Icon avatars"}
        description={
          <>
            Icon avatars are created by passing an icon as
            {/* eslint-disable-next-line react/jsx-newline */}
            <CoreSpan code={true}>{" children "}</CoreSpan>
          </>
        }
        code={`
<CoreAvatar 
    styleClasses={[CoreClasses.BG.BG_BLACK]}>
    <CoreIcon>folder</CoreIcon></CoreAvatar>
<CoreAvatar 
    styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>
    <CoreIcon>pageview</CoreIcon></CoreAvatar>
<CoreAvatar 
    styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>
    <CoreIcon>assignment</CoreIcon></CoreAvatar>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
              <CoreIcon>folder</CoreIcon>
            </CoreAvatar>

            <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>
              <CoreIcon>pageview</CoreIcon>
            </CoreAvatar>

            <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>
              <CoreIcon>assignment</CoreIcon>
            </CoreAvatar>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Variants"}
        description={
          <>
            If you need square or rounded avatars, use the{" "}

            <CoreSpan code={true}>{" variant "}</CoreSpan> prop.
          </>
        }
        code={`
<CoreAvatar 
    styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}
    variant="square">N</CoreAvatar>
    <CoreAvatar 
    styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} 
    variant="round"><CoreIcon>assignment</CoreIcon></CoreAvatar>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">
              N
            </CoreAvatar>

            <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded">
              <CoreIcon>assignment</CoreIcon>
            </CoreAvatar>
          </CoreStack>
        }
      />

      <CodeSample
        title="Fallbacks"
        description="If there is an error loading the avatar image, the component falls back to an alternative in the following order:
the provided children
the first letter of the alt text
a generic avatar icon
"
        code={`
<CoreStack direction="row" spacing={2}>
  <CoreAvatar
    styleClasses={[CoreClasses.BG.BG_PRIMARY]}
    alt="Remy Sharp"
    src="/broken-image.jpg"
  >
    B
  </CoreAvatar>
  <CoreAvatar
    styleClasses={[CoreClasses.BG.BG_PRIMARY]}
    alt="Remy Sharp"
    src="/broken-image.jpg"
  />
  <CoreAvatar src="/broken-image.jpg" />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreAvatar
              styleClasses={[CoreClasses.BG.BG_PRIMARY]}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </CoreAvatar>

            <CoreAvatar
              styleClasses={[CoreClasses.BG.BG_PRIMARY]}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            />

            <CoreAvatar src="/broken-image.jpg" />
          </CoreStack>
        }
      />

      <CodeSample
        title="Grouped (NOT IMPLEMENTED)"
        description="AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars."
        code={`
          <CoreAvatarGroup max={4}>
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <CoreAvatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </CoreAvatarGroup>
        `}
        renderElement={
          <>
            {/* <CoreAvatarGroup max={4}> */}
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />

            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />

            <CoreAvatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />

            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />

            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />

            {/* </CoreAvatarGroup> */}
          </>
        }
      />

      <CodeSample
        title="Total avatars (NOT IMPLEMENTED)"
        description="If you need to control the total number of avatars not shown, you can use the total prop."
        code={`
          <CoreAvatarGroup total={24}>
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </CoreAvatarGroup>
        `}
        renderElement={
          <>
            {/* <CoreAvatarGroup total={24}> */}
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />

            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />

            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />

            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />

            {/* </CoreAvatarGroup> */}
          </>
        }
      />

      <CodeSample
        title="Custom surplus (NOT IMPLEMENTED)"
        description="Set the renderSurplus prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the max prop, and should return a React.ReactNode.
The renderSurplus prop is useful when you need to render the surplus based on the data sent from the server."
        code={`
          <CoreAvatarGroup 
            renderSurplus={(surplus) => <>+{surplus.toString()[0]}k</>}
            total={4250}>
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </CoreAvatarGroup>
        `}
        renderElement={
          <>
            {/* <CoreAvatarGroup 
              renderSurplus={(surplus) => <>+{surplus.toString()[0]}k</>}
              total={4250}> */}
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />

            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />

            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />

            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />

            {/* </CoreAvatarGroup> */}
          </>
        }
      />

      <CodeSample
        title="With badge (NOT IMPLEMENTED)"
        description=""
        code={`
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: \`0 0 0 2px \${theme.palette.background.paper}\`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
<CoreStack direction="row" spacing={2}>
  <StyledBadge
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    variant="dot"
  >
    <CoreAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  </StyledBadge>
  <CoreBadge
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    badgeContent={
      <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    }
  >
    <CoreAvatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  </CoreBadge>
</CoreStack>
        `}
        renderElement={
          <></>
        }
      />

      <ComponentProps component={CoreAvatar} />

    </>
  );
}