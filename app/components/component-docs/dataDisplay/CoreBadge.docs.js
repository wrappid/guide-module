/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  CoreStack,
  CoreTypographyBody1,
  CoreIcon,
  CoreBadge,
  CoreBox,
  __IconTypes,
  CoreButton,
  CoreClasses,
  CoreFormControlLabel,
  CoreSwitch,
  CoreIconButton
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function CoreBadgeDocs() {
  const [countZero, setCountZero] = React.useState(0);
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(true);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  
  const rectangle = <CoreBox
    component="span"
    height={40}
    width={40}
    styleClasses={[CoreClasses.BG.BG_PRIMARY]}/>;
  const circle = (
    <CoreBox
      component="span"
      height={40}
      width={40}
      styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE]} />
  );

  return (
    <>
      <ComponentDocs 
        component={CoreBadge}
        description={
          <CoreTypographyBody1>
            CoreBadge generates a small badge to the top-right of its children.
          </CoreTypographyBody1>
        }
        samples={
          <>
            <CodeSample
              title={"Basic badge"}
              description={<>
                <CoreTypographyBody1>
              Examples of badges containing text, using primary and secondary
            colors. The badge is applied to its children.
                </CoreTypographyBody1>
              </>
              }
              code={`<CoreBadge badgeContent={4} color="primary">
  <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} color="primary" icon="mail" />
</CoreBadge>`}
              expandedCode={`import {
  CoreIcon,
  CoreBadge,
  CoreBox,
  __IconTypes
} from "@wrappid/core";

export default function SimpleBadge() {
  return(
    <CoreBox>
      <CoreBadge badgeContent={4} color="primary">
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox>
                  <CoreBadge badgeContent={4} color="primary">
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
                  </CoreBadge>
                </CoreBox>
              }
            />
            
            <CodeSample
              title={"Color"}
              description={
                <>
            Use the <CodeBlock>color</CodeBlock> prop to apply theme palette to the component.
                </>
              }
              code={`<CoreBadge badgeContent={4} color="secondary">
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    icon="mail"
  />
</CoreBadge>

<CoreBadge badgeContent={4} color="success">
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    icon="mail"
  />
</CoreBadge>`}
              expandedCode={`import {
  CoreStack,
  CoreIcon,
  CoreBadge,
  __IconTypes
} from "@wrappid/core";

export default function ColorBadge() {   
  return() 
    <CoreStack spacing={2} direction="row">
      <CoreBadge badgeContent={4} color="secondary">
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>

      <CoreBadge badgeContent={4} color="success">
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack spacing={2} direction="row">
                  <CoreBadge badgeContent={4} color="secondary">
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
                  </CoreBadge>

                  <CoreBadge badgeContent={4} color="success">
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
                  </CoreBadge>
                </CoreStack>
              }
            />

            <CodeSample title="Customization (NOT IMPLEMENTED AS OF NOW)" />

            <CodeSample
              title="Badge visibility " 
              description={
                <CoreTypographyBody1>
                  The visibility of badges can be controlled using the <CodeBlock>invisible</CodeBlock> prop.
                </CoreTypographyBody1>
              }
              code={"NA"}
              expandedCode={`import React from "react";

import {
  CoreIcon,
  CoreBadge,
  CoreBox,
  __IconTypes,
  CoreButton,
  CoreClasses,
  CoreFormControlLabel,
  CoreSwitch
} from "@wrappid/core";

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <CoreBox>

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreBadge color="secondary" badgeContent={count}>
          <CoreIcon icon="mail" />
        </CoreBadge>

        <CoreBox
          styleClasses={[CoreClasses.PADDING.PL3]}
        >

          <CoreButton
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <CoreIcon fontSize="small" icon="remove" />
          </CoreButton>

          <CoreButton
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <CoreIcon fontSize="small" icon="add" />
          </CoreButton>
        </CoreBox>
      </CoreBox>
    
      <CoreBox styleClasses={[
        CoreClasses.PADDING.PT2,
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.WIDTH.W_100
      ]}>
        <CoreBadge color="secondary" variant="dot" invisible={invisible}>
          <CoreIcon icon="mail" />
        </CoreBadge>

        <CoreFormControlLabel
          styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY, CoreClasses.PADDING.PL3]}
          control={<CoreSwitch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </CoreBox>
    </CoreBox>
    );
}`}
              renderElement={
                <>
                  <CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
                      <CoreBadge color="secondary" badgeContent={count}>
                        <CoreIcon icon="mail" />
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PL3]} >

                        <CoreButton
                          aria-label="reduce"
                          onClick={() => {
                            setCount(Math.max(count - 1, 0));
                          }}
                        >
                          <CoreIcon fontSize="small" icon="remove" />
                        </CoreButton>

                        <CoreButton
                          aria-label="increase"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          <CoreIcon fontSize="small" icon="add" />
                        </CoreButton>
                      </CoreBox>
                    </CoreBox>
                  
                    <CoreBox styleClasses={[
                      CoreClasses.PADDING.PT2,
                      CoreClasses.DISPLAY.FLEX,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                      CoreClasses.WIDTH.W_100
                    ]}>
                      <CoreBadge color="secondary" variant="dot" invisible={invisible}>
                        <CoreIcon icon="mail" />
                      </CoreBadge>

                      <CoreFormControlLabel
                        styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY, CoreClasses.PADDING.PL3]}
                        control={<CoreSwitch checked={!invisible} onChange={handleBadgeVisibility} />}
                        label="Show Badge"
                      />
                    </CoreBox>
                  </CoreBox>
                </>
              }
            />

            <CodeSample 
              title="Show Zero"
              description="The badge hides automatically when badgeContent is zero. You can override this with the showZero prop." 
              code={"Na"}
              expandedCode={`import React from "react";

import {
  CoreIcon,
  CoreBadge,
  CoreBox,
  CoreButton,
  CoreClasses
} from "@wrappid/core";

export default function ShowZero() {
  const [countZero, setCountZero] = React.useState(0);

  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
      <CoreBadge color="secondary" showZero badgeContent={countZero}>
        <CoreIcon icon="mail" />
      </CoreBadge>

      <CoreBox styleClasses={[CoreClasses.PADDING.PL3]} >

        <CoreButton
          aria-label="reduce"
          onClick={() => {
            setCountZero(Math.max(countZero - 1, 0));
          }}
        >
          <CoreIcon fontSize="small" icon="remove" />
        </CoreButton>

        <CoreButton
          aria-label="increase"
          onClick={() => {
            setCountZero(countZero + 1);
          }}
        >
          <CoreIcon fontSize="small" icon="add" />
        </CoreButton>
      </CoreBox>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
                    <CoreBadge color="secondary" showZero badgeContent={countZero}>
                      <CoreIcon icon="mail" />
                    </CoreBadge>

                    <CoreBox styleClasses={[CoreClasses.PADDING.PL3]} >

                      <CoreButton
                        aria-label="reduce"
                        onClick={() => {
                          setCountZero(Math.max(countZero - 1, 0));
                        }}
                      >
                        <CoreIcon fontSize="small" icon="remove" />
                      </CoreButton>

                      <CoreButton
                        aria-label="increase"
                        onClick={() => {
                          setCountZero(countZero + 1);
                        }}
                      >
                        <CoreIcon fontSize="small" icon="add" />
                      </CoreButton>
                    </CoreBox>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Maximum value"}
              description={
                <>
            Use <CodeBlock>max</CodeBlock> prop to cap the value of the badge content.
                </>
              }
              code={`<CoreBadge color="secondary" badgeContent={99}>
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    icon="mail"
  />
</CoreBadge>

<CoreBadge color="secondary" badgeContent={100}>
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    icon="mail"
  />
</CoreBadge>

<CoreBadge color="secondary" badgeContent={1000} max={999}>
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    icon="mail"
  />
</CoreBadge>`}
              expandedCode={`import {
  CoreStack,
  CoreIcon,
  CoreBadge,
  __IconTypes
} from "@wrappid/core";

export default function BadgeMax() {
 return(
    <CoreStack spacing={2} direction="row">
      <CoreBadge color="secondary" badgeContent={99}>
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>

      <CoreBadge color="secondary" badgeContent={100}>
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>

      <CoreBadge color="secondary" badgeContent={1000} max={999}>
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack spacing={2} direction="row">
                  <CoreBadge color="secondary" badgeContent={99}>
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
                  </CoreBadge>

                  <CoreBadge color="secondary" badgeContent={100}>
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
                  </CoreBadge>

                  <CoreBadge color="secondary" badgeContent={1000} max={999}>
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
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
              code={`<CoreBadge color="secondary" variant="dot">
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    icon="mail"
    />
</CoreBadge>`}
              expandedCode={`import {
  CoreStack,
  CoreIcon,
  CoreBadge,
  __IconTypes
} from "@wrappid/core";

export default function DotBadge() {
  return (
    <CoreStack spacing={2} direction="row">
      <CoreBadge color="secondary" variant="dot">
        <CoreIcon
          type={__IconTypes.MATERIAL_OUTLINED_ICON}
          color="primary"
          fontSize= "medium"
          icon="mail"
        />
      </CoreBadge>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack spacing={2} direction="row">
                  <CoreBadge color="secondary" variant="dot">
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    />
                  </CoreBadge>
                </CoreStack>
              }
            />

            <CodeSample
              title="Badge overlap" 
              description={
                <>
                  <CoreTypographyBody1>
                Use the <CodeBlock>overlap</CodeBlock> prop to place the badge relative to the corner of the wrapped element.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreBadge color="secondary" badgeContent=" ">
  {rectangle}
</CoreBadge>

<CoreBadge color="secondary" badgeContent=" " variant="dot">
  {rectangle}
</CoreBadge>

<CoreBadge color="secondary" overlap="circular" badgeContent=" ">
  {circle}
</CoreBadge>

<CoreBadge
  color="secondary"
  overlap="circular"
  badgeContent=" "
  variant="dot">
  {circle}
</CoreBadge>`}
              expandedCode={`import {
  CoreStack,
  CoreTypographyBody1,
  CoreIcon,
  CoreBadge,
  CoreBox,
  __IconTypes,
  CoreButton,
  CoreClasses,
  CoreFormControlLabel,
  CoreSwitch
} from "@wrappid/core";


const rectangle = <CoreBox
  component="span"
  height={40}
  width={40}
  styleClasses={[CoreClasses.BG.BG_PRIMARY]}/>;

const circle = (
  <CoreBox
    component="span"
    height={40}
    width={40}
    styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.BORDER.BORDER_ROUNDED_CIRCLE]} />
);

export default function BadgeOverlap() {
  return (
     <CoreStack spacing={3} direction="row">
        <CoreBadge color="secondary" badgeContent=" ">
          {rectangle}
        </CoreBadge>

        <CoreBadge color="secondary" badgeContent=" " variant="dot">
          {rectangle}
        </CoreBadge>

        <CoreBadge color="secondary" overlap="circular" badgeContent=" ">
          {circle}
        </CoreBadge>

        <CoreBadge
          color="secondary"
          overlap="circular"
          badgeContent=" "
          variant="dot">
          {circle}
        </CoreBadge>
      </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack spacing={3} direction="row">
                    <CoreBadge color="secondary" badgeContent=" ">
                      {rectangle}
                    </CoreBadge>

                    <CoreBadge color="secondary" badgeContent=" " variant="dot">
                      {rectangle}
                    </CoreBadge>

                    <CoreBadge color="secondary" overlap="circular" badgeContent=" ">
                      {circle}
                    </CoreBadge>

                    <CoreBadge
                      color="secondary"
                      overlap="circular"
                      badgeContent=" "
                      variant="dot">
                      {circle}
                    </CoreBadge>
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title="Badge alignment"
              description={
                <>
            You can use the <CodeBlock >anchorOrigin</CodeBlock>prop to move the badge to any corner of the wrapped element.
                </>
              }
              code={"NA"}
              expandedCode={`import {
  CoreIcon,
  CoreBadge,
  CoreBox,
  __IconTypes,
  CoreStack,
  CoreClasses,
} from "@wrappid/core";

export default function BadgeAlignment() {
   return(
     <CoreStack direction="column" spacing={4}>
        {["Top-Right", "Top-Left", "Bottom-Right", "Bottom-Left"].map((position) => (
          <CoreStack
            key={position}
            direction="row"
            spacing={4}
            styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            <CoreBox width={100}>{position}</CoreBox>

            <CoreBox
              styleClasses={[CoreClasses.PADDING.PR2, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START]}
            >
              {[{ variant: "dot" }, { badgeContent: 1 }, { badgeContent: 100 }, { badgeContent: 1000, max: 999 }].map((badgeProps, badgeIndex) => (
                <CoreBox key={badgeIndex} styleClasses={[CoreClasses.PADDING.PX2]}>
                  <CoreBadge
                    anchorOrigin={{
                      horizontal: position.includes("Left") ? "left" : "right",
                      vertical  : position.includes("Top") ? "top" : "bottom",
                    }}
                    color="secondary"
                    {...badgeProps}
                  >
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize="medium"
                      icon="mail"
                    />
                  </CoreBadge>
                </CoreBox>
              ))}
            </CoreBox>
          </CoreStack>
        ))}
      </CoreStack>
   );
}`}
              renderElement={
                <>
                  <CoreStack direction="column" spacing={4}>
                    {["Top-Right", "Top-Left", "Bottom-Right", "Bottom-Left"].map((position) => (
                      <CoreStack
                        key={position}
                        direction="row"
                        spacing={4}
                        styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
                      >
                        <CoreBox width={100}>{position}</CoreBox>

                        <CoreBox
                          styleClasses={[CoreClasses.PADDING.PR2, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START]}
                        >
                          {[{ variant: "dot" }, { badgeContent: 1 }, { badgeContent: 100 }, { badgeContent: 1000, max: 999 }].map((badgeProps, badgeIndex) => (
                            <CoreBox key={badgeIndex} styleClasses={[CoreClasses.PADDING.PX2]}>
                              <CoreBadge
                                anchorOrigin={{
                                  horizontal: position.includes("Left") ? "left" : "right",
                                  vertical  : position.includes("Top") ? "top" : "bottom",
                                }}
                                color="secondary"
                                {...badgeProps}
                              >
                                <CoreIcon
                                  type={__IconTypes.MATERIAL_OUTLINED_ICON}
                                  color="primary"
                                  fontSize="medium"
                                  icon="mail"
                                />
                              </CoreBadge>
                            </CoreBox>
                          ))}
                        </CoreBox>
                      </CoreStack>
                    ))}
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Accessibility"}
              description={
                <>
            You can&apos;t rely on the content of the badge to be announced
            correctly. You should provide a full description, for instance, with <CodeBlock >aria-label</CodeBlock>
                </>
              }
              code={`<CoreIconButton aria-label={notificationsLabel(100)}>
  <CoreBadge badgeContent={100} color="secondary">
    <CoreIcon
      type={__IconTypes.MATERIAL_OUTLINED_ICON}
      color="primary"
      fontSize= "medium"
      icon="mail"
    /> 
    </CoreBadge>
</CoreIconButton>`}
              expandedCode={`import {
  CoreIcon,
  CoreBadge,
  __IconTypes
} from "@wrappid/core";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return ` + "`${count} " + " notifications`" + `;
}

export default function AccessibleBadges() {
  return (
     <CoreIconButton aria-label={notificationsLabel(100)}>
        <CoreBadge badgeContent={100} color="secondary">
          <CoreIcon
            type={__IconTypes.MATERIAL_OUTLINED_ICON}
            color="primary"
            fontSize= "medium"
            icon="mail"
          />
        </CoreBadge>
      </CoreIconButton>
  );
}`}
              renderElement={
                <CoreIconButton aria-label={notificationsLabel(100)}>
                  <CoreBadge badgeContent={100} color="secondary">
                    <CoreIcon
                      type={__IconTypes.MATERIAL_OUTLINED_ICON}
                      color="primary"
                      fontSize= "medium"
                      icon="mail"
                    /> 
                  </CoreBadge>
                </CoreIconButton>
              }
            />
          </>
        }
      />
    </>
  );
}
