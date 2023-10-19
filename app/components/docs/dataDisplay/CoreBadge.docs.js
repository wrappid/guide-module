import {
  NativeBadge,
  CoreClasses,
  CoreStack,
  CoreSpan,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  CoreBadge,
  CoreBox
} from "@wrappid/core";
import {Badge} from "@mui/material"

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreBadgeDocs() {
  return (
    <>
      <CoreH4
        styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
      >
        CoreBadge
      </CoreH4>

      <CoreTypographyBody1>
        Badge generates a small badge to the top-right of its child(ren).
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic badge"}
        description={
            "Examples of badges containing text, using primary and secondary\
            colors. The badge is applied to its children."
        }
        code={`<CoreBadge badgeContent={4} color="primary">
    <CoreIcon color="action" />
</CoreBadge>`}
        renderElement={
            <CoreBox>
              <CoreBadge badgeContent={4}>
              <CoreIcon color="action" icon="mail" />
            </CoreBadge>
            </CoreBox>
        }
      />

      <CodeSample
        title={"Color"}
        description={
          <>
            Use
            <CoreSpan code={true}>{" color "}</CoreSpan>
            prop to apply theme palette to component.
          </>
        }
        code={`<CoreBadge badgeContent={4} color="secondary">
    <CoreIcon color="action" />
</CoreBadge>
<CoreBadge badgeContent={4} color="success">
    <CoreIcon color="action" />
</CoreBadge>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge badgeContent={4} color="secondary">
              <CoreIcon color="action" />
            </CoreBadge>
            <CoreBadge badgeContent={4} color="success">
              <CoreIcon color="action" />
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample title="Customization (NOT IMPLEMENTED)" />

      <CodeSample title="Badge visibility (NOT IMPLEMENTED)" />
        
      <CodeSample
        // title={"Badge visibility"}
        // description={
        //   <>
        //     The visibility of badges can be controlled using the
        //     {/* eslint-disable-next-line react/jsx-newline */}
        //     <CoreSpan code={true}>{" invisible "}</CoreSpan>
        //     prop.
        //   </>
        // }
        // code={``}
        // renderElement={<CoreStack spacing={2} direction="row"></CoreStack>}
      />

      <CodeSample
        title={"Maximum value"}
        description={
          <>
            You can use the
            <CoreSpan code={true}>{" max "}</CoreSpan> prop to cap the value of
            the badge content.
          </>
        }
        code={`<CoreBadge color="secondary" badgeContent={99}>
    <CoreIcon />
</CoreBadge>
      <CoreBadge color="secondary" badgeContent={100}>
    <CoreIcon />
</CoreBadge>
    <CoreBadge color="secondary" badgeContent={1000} max={999}>
    <CoreIcon />
</CoreBadge>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge color="secondary" badgeContent={99}>
              <CoreIcon />
            </CoreBadge>
            <CoreBadge color="secondary" badgeContent={100}>
              <CoreIcon />
            </CoreBadge>
            <CoreBadge color="secondary" badgeContent={1000} max={999}>
              <CoreIcon />
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Dot badge"}
        description={
          <>
            The
            <CoreSpan code={true}>{" dot "}</CoreSpan>
            prop changes a badge into a small dot. This can be used as a
            notification that something has changed without giving a coun
          </>
        }
        code={`<CoreBadge color="secondary" variant="dot">
    <CoreIcon />
</CoreBadge>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge color="secondary" variant="dot">
              <CoreIcon />
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Badge alignment"}
        description={
          <>
            You can use the
            <CoreSpan code={true}>{" anchorOrigin "}</CoreSpan>
            prop to move the badge to any corner of the wrapped element.
          </>
        }
        code={`<CoreBadge
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
    }}
>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            ></CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Accessibility"}
        description={
          <>
            You can't rely on the content of the badge to be announced
            correctly. You should provide a full description, for instance, with
            <CoreSpan code={true}>{" aria-label: "}</CoreSpan>
          </>
        }
        code={`<IconButton aria-label={notificationsLabel(100)}>
  <CoreBadge color="secondary" variant="dot">
    <CoreIcon />
  </CoreBadge>
</IconButton>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreIcon aria-label={100}>
              <CoreBadge badgeContent={100} color="secondary">
                <CoreIcon />
              </CoreBadge>
            </CoreIcon>
          </CoreStack>
        }
      />

<ComponentProps component={CoreBadge} />

    </>
  );
}
