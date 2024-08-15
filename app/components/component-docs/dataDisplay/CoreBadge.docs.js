import {
  CoreClasses,
  CoreStack,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  CoreBadge,
  CoreBox,
  __IconTypes
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
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
        code={`<CoreBox>
<CoreBadge badgeContent={4} color="primary">
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
    >
      mail
    </CoreIcon>
  </CoreBadge>
</CoreBox>`}
        renderElement={
          <CoreBox>
            <CoreBadge badgeContent={4} color="primary">

              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Color"}
        description={
          <>
            Use <CodeBlock>color</CodeBlock> prop to apply theme palette to component.
          </>
        }
        code={`<CoreStack spacing={2} direction="row">
  <CoreBadge badgeContent={4} color="secondary">
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
    >
      mail
    </CoreIcon>
  </CoreBadge>

  <CoreBadge badgeContent={4} color="success">
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
    >
      mail
    </CoreIcon>
  </CoreBadge>
</CoreStack>
        `}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge badgeContent={4} color="secondary">
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>

            <CoreBadge badgeContent={4} color="success">
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample title="Customization (NOT IMPLEMENTED)" />

      <CodeSample title="Badge visibility (NOT IMPLEMENTED)" />
    
      <CodeSample
        title={"Maximum value"}
        description={
          <>
            You can use the{" "}

            <CodeBlock>max</CodeBlock> prop to cap the value of
            the badge content.
          </>
        }
        code={`<CoreStack spacing={2} direction="row">
  <CoreBadge color="secondary" badgeContent={99}>
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
    >
      mail
    </CoreIcon>
  </CoreBadge>

  <CoreBadge color="secondary" badgeContent={100}>
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
    >
      mail
    </CoreIcon>
  </CoreBadge>

  <CoreBadge color="secondary" badgeContent={1000} max={999}>
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
    >
      mail
    </CoreIcon>
  </CoreBadge>
</CoreStack>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge color="secondary" badgeContent={99}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>

            <CoreBadge color="secondary" badgeContent={100}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>

            <CoreBadge color="secondary" badgeContent={1000} max={999}>
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Dot badge"}
        description={
          <>
            The <CodeBlock>dot</CodeBlock>{" "}
            prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.
          </>
        }
        code={`<CoreStack spacing={2} direction="row">
  <CoreBadge color="secondary" variant="dot">
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
    >
      mail
    </CoreIcon>
  </CoreBadge>
</CoreStack>`}
        renderElement={
          <CoreStack spacing={2} direction="row">
            <CoreBadge color="secondary" variant="dot">
              <CoreIcon
                type={__IconTypes.MATERIAL_OUTLINED_ICON}
                color="primary"
                fontSize= "medium"
              >
                mail
              </CoreIcon>
            </CoreBadge>
          </CoreStack>
        }
      />

      <CodeSample
        title="Badge alignment(NOT IMPLEMENTED)"
        description={
          <>
            You can use the <CodeBlock >anchorOrigin</CodeBlock>prop to move the badge to any corner of the wrapped element.
          </>
        }
        code={`
        `}
        renderElement={""}
      />

      <CodeSample
        title={"Accessibility"}
        description={
          <>
            You can&apos;t rely on the content of the badge to be announced
            correctly. You should provide a full description, for instance, with <CodeBlock >aria-label</CodeBlock>
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
                <CoreIcon
                  type={__IconTypes.MATERIAL_OUTLINED_ICON}
                  color="primary"
                  fontSize= "medium"
                > 
                mail
                </CoreIcon>
              </CoreBadge>
            </CoreIcon>
          </CoreStack>
        }
      />

      <ComponentProps component={CoreBadge} />

    </>
  );
}
