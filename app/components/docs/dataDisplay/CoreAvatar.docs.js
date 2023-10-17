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
        code={`<CoreAvatar src="https://mui.com/static/images/avatar/1.jpg" />
<CoreAvatar src="https://mui.com/static/images/avatar/2.jpg" />
<CoreAvatar src="https://mui.com/static/images/avatar/3.jpg" />`}
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
        code={`<CoreAvatar>W</CoreAvatar>
<CoreAvatar>WD</CoreAvatar>
<CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>W</CoreAvatar>
<CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>WR</CoreAvatar>`}
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
  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]} />`}
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

      <CodeSample title="Fallbacks (NOT IMPLEMENTED)" />

      <CodeSample title="Grouped (NOT IMPLEMENTED)" />

      <CodeSample title="Total avatars (NOT IMPLEMENTED)" />

      <CodeSample title="With badge (NOT IMPLEMENTED)" />

      <ComponentProps component={CoreAvatar} />

    </>
  );
}