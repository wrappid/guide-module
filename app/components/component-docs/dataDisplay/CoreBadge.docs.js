import {
  CoreClasses,
  CoreStack,
  CoreSpan,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  CoreBadge,
  CoreBox
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreBadgeDocs() {
  return (
    <>
      <CoreH4
        styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreBadge
      </CoreH4>

      <CoreTypographyBody1>
        Badge generates a small badge to the top-right of its child(ren).
      </CoreTypographyBody1>

      <CodeImport name="CoreBadge" />

      <CodeSample
        title={"Basic badge"}
        description={
          "Examples of badges containing text, using primary and secondary\
            colors. The badge is applied to its children."
        }
        code={`
<CoreBadge badgeContent={4} color="primary">
  <CoreIcon color="action" icon="mail" />
</CoreBadge>`}
        renderElement={
          <CoreBox>
            <CoreBadge badgeContent={4} color="primary">
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" color="action" icon="mail" />
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
        code={`
<CoreBadge badgeContent={4} color="secondary">
  <CoreIcon color="action" icon="mail" />
</CoreBadge>
<CoreBadge badgeContent={4} color="success">
  <CoreIcon color="action" icon="mail" />
</CoreBadge>
        `}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge badgeContent={4} color="secondary">
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" color="action" icon="mail" />
            </CoreBadge>

            <CoreBadge badgeContent={4} color="success">
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" color="action" icon="mail" />
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
        code={`
<CoreBadge color="secondary" badgeContent={99}>
    <CoreIcon icon="mail" />
</CoreBadge>
<CoreBadge color="secondary" badgeContent={100}>
    <CoreIcon icon="mail" />
</CoreBadge>
<CoreBadge color="secondary" badgeContent={1000} max={999}>
    <CoreIcon icon="mail" />
</CoreBadge>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge color="secondary" badgeContent={99}>
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail" />
            </CoreBadge>

            <CoreBadge color="secondary" badgeContent={100}>
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail" />
            </CoreBadge>

            <CoreBadge color="secondary" badgeContent={1000} max={999}>
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail" />
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
            prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.
          </>
        }
        code={`
<CoreBadge color="secondary" variant="dot">
    <CoreIcon icon="mail" />
</CoreBadge>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge color="secondary" variant="dot">
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail" />
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
        code={`
<CoreBadge
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
    }}
>
  <CoreIcon icon="mail" />
</CoreBadge>
        `}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge
              anchorOrigin={{
                horizontal: "right",
                vertical  : "top",
              }}
            >
              <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail" />
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Accessibility"}
        description={
          <>
            You can&apos;t rely on the content of the badge to be announced
            correctly. You should provide a full description, for instance, with
            <CoreSpan code={true}>{" aria-label: "}</CoreSpan>
          </>
        }
        code={`
<IconButton aria-label={notificationsLabel(100)}>
  <CoreBadge color="secondary" variant="dot">
    <CoreIcon icon="mail" />
  </CoreBadge>
</IconButton>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreIcon aria-label={100}>
              <CoreBadge badgeContent={100} color="secondary">
                <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail" />
              </CoreBadge>
            </CoreIcon>
          </CoreStack>
        }
      />

      <ComponentProps component={CoreBadge} />

    </>
  );
}
