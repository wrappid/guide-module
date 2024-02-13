import {
  CoreAvatarGroup,
  CoreAvatar,
  CoreClasses,
  CoreStack,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  CoreSpan
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
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

      <CodeImport name="CoreAvatar" />

      <CodeSample
        title={"Image avatars"}
        description={
          <>
            Image avatars can be created by passing standard <CodeBlock>img</CodeBlock> props
            
            {" "}

            <CodeBlock>src</CodeBlock> or 

            <CodeBlock>srcSet</CodeBlock> to the component.
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
  <CoreAvatar src="https://picsum.photos/200?random=1" />
  <CoreAvatar src="https://picsum.photos/200?random=2" />
  <CoreAvatar src="https://picsum.photos/200?random=3" />
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row"
          >
            <CoreAvatar src="https://picsum.photos/200?random=1" />

            <CoreAvatar src="https://picsum.photos/200?random=2" />

            <CoreAvatar src="https://picsum.photos/200?random=3" />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Letter avatars"}
        description={
          <>
            Avatars containing simple characters can be created by passing a string as
            {/* eslint-disable-next-line react/jsx-newline */}
            <CodeBlock>{"children"}</CodeBlock>.
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
  <CoreAvatar>W</CoreAvatar>
  <CoreAvatar>WR</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>W</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>WR</CoreAvatar>
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row"
          >
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
          <CoreTypographyBody1>
            You can change the size of the avatar with the <CodeBlock>{"height"}</CodeBlock>

            {" and "}

            <CodeBlock>{"width"}</CodeBlock> CSS properties.
          </CoreTypographyBody1>
        }
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row">
  <CoreAvatar src="https://picsum.photos/200?random=1" />
  <CoreAvatar
    src="https://picsum.photos/200?random=1"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=2"
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=3"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=4"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=5"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=6"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]}
  />
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            direction="row"
            spacing={2}
          >
            <CoreAvatar
              src="https://picsum.photos/200?random=1"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
            />

            <CoreAvatar src="https://picsum.photos/200?random=2" />

            <CoreAvatar
              src="https://picsum.photos/200?random=3"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
            />

            <CoreAvatar
              src="https://picsum.photos/200?random=4"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
            />

            <CoreAvatar
              src="https://picsum.photos/200?random=5"
              styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}
            />

            <CoreAvatar
              src="https://picsum.photos/200?random=6"
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
            <CodeBlock>{" children "}</CodeBlock>.
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
    <CoreIcon>folder</CoreIcon>
  </CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>
    <CoreIcon>pageview</CoreIcon>
  </CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>
    <CoreIcon>assignment</CoreIcon>
  </CoreAvatar>
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row"
          >
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
            If you need square or rounded avatars, use the <CodeBlock>{"variant"}</CodeBlock> prop.
          </>
        }
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded">
    <CoreIcon>assignment</CoreIcon>
  </CoreAvatar>
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row"
          >
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
        description={
          <>
            <CoreTypographyBody1>
              {
                "If there is an error loading the avatar image, the component falls back to an alternative in the following order:"
              }
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              - the provided children - the first letter of the alt text - a generic avatar icon
            </CoreTypographyBody1>
          </>
        }
        code={`
<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
  <CoreAvatar
    styleClasses={[CoreClasses.BG.BG_PRIMARY]}
    alt="Remy Sharp"
    src="/broken-image.jpg"
  >B</CoreAvatar>
  <CoreAvatar
    styleClasses={[CoreClasses.BG.BG_PRIMARY]}
    alt="Remy Sharp"
    src="/broken-image.jpg"
  />
  <CoreAvatar src="/broken-image.jpg" />
</CoreStack>
        `}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            direction="row"
            spacing={2}
          >
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
        title="Grouped"
        description="AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars."
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
  <CoreAvatarGroup max={4}>
    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
    <CoreAvatar alt="Some Photo 5" src="https://picsum.photos/200?random=5" />
  </CoreAvatarGroup>
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            direction="row"
            spacing={2}
          >
            <CoreAvatarGroup max={4}>
              <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />

              <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />

              <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />

              <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />

              <CoreAvatar alt="Some Photo 5" src="https://picsum.photos/200?random=5" />
            </CoreAvatarGroup>
          </CoreStack>
        }
      />

      <CodeSample
        title="Total avatars"
        description="If you need to control the total number of avatars not shown, you can use the total prop."
        code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
  <CoreAvatarGroup total={24}>
    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
  </CoreAvatarGroup>
</CoreStack>`}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            direction="row"
            spacing={2}
          >
            <CoreAvatarGroup total={24}>
              <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />

              <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />

              <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />

              <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
            </CoreAvatarGroup>
          </CoreStack>
        }
      />

      <CodeSample
        title="Custom surplus (NOT IMPLEMENTED)"
        description="Set the renderSurplus prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the max prop, and should return a React.ReactNode.
The renderSurplus prop is useful when you need to render the surplus based on the data sent from the server."
        code={`
          <CoreAvatarGroup 
            renderSurplus={(surplus) => <CoreSpan>+{surplus.toString()[0]}k</>}
            total={4250}>
    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
          </CoreAvatarGroup>
        `}
        renderElement={
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            direction="row"
            spacing={2}
          >
            <CoreAvatarGroup
              renderSurplus={(surplus) => <CoreSpan>+{surplus.toString()[0]}k</CoreSpan>}
              total={4250}
            >
              <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />

              <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />

              <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />

              <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
            </CoreAvatarGroup>
          </CoreStack>
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

<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
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
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            direction="row"
            spacing={2}
          >
            
          </CoreStack>
        }
      />

      <ComponentProps component={CoreAvatar} />
    </>
  );
}
