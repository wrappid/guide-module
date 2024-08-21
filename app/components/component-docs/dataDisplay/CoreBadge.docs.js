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
  CoreSwitch
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
  <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON} color="primary" >
    mail
  </CoreIcon>
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
        >
          mail
        </CoreIcon>
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
            Use the <CodeBlock>color</CodeBlock> prop to apply theme palette to the component.
                </>
              }
              code={`<CoreBadge badgeContent={4} color="secondary">
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
  );
}`}
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
          <CoreIcon>mail</CoreIcon>
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
            <CoreIcon fontSize="small" >remove</CoreIcon>
          </CoreButton>

          <CoreButton
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <CoreIcon fontSize="small" >add</CoreIcon>
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
          <CoreIcon>mail</CoreIcon>
        </CoreBadge>

        <CoreFormControlLabel
          styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY, CoreClasses.PADDING.PL3]}
          control={<CoreSwitch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </CoreBox>
    </CoreBox>
    );
}`
              }
              renderElement={
                <>
                  <CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
                      <CoreBadge color="secondary" badgeContent={count}>
                        <CoreIcon>mail</CoreIcon>
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
                          <CoreIcon fontSize="small" >remove</CoreIcon>
                        </CoreButton>

                        <CoreButton
                          aria-label="increase"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          <CoreIcon fontSize="small" >add</CoreIcon>
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
                        <CoreIcon>mail</CoreIcon>
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
  );
}`}
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
              code={`<CoreBadge color="secondary" variant="dot">
  <CoreIcon
    type={__IconTypes.MATERIAL_OUTLINED_ICON}
    color="primary"
    fontSize= "medium"
    >
    mail
  </CoreIcon>
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
        >
          mail
        </CoreIcon>
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
                    >
                mail
                    </CoreIcon>
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
              code={""}
              expandedCode={""}
              renderElement={
                <>
                  <CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>

                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "right",
                          vertical  : "top",
                        }}
                        color="secondary"
                        variant="dot">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        >
                         mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PX4]} >
                        <CoreBadge
                          badgeContent={1}
                          color="secondary"
                          anchorOrigin={{
                            horizontal: "right",
                            vertical  : "top",
                          }}
                        >
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                       mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>

                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "right",
                          vertical  : "top",
                        }}
                        badgeContent={100}
                        color="secondary">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        > 
                          mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PL4]} >
                        <CoreBadge
                          anchorOrigin={{
                            horizontal: "right",
                            vertical  : "top",
                          }}
                          color="secondary"
                          badgeContent={1000}
                          max={999}>
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                        mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>
                    </CoreBox>

                    <CoreBox styleClasses={[
                      CoreClasses.PADDING.PT3,
                      CoreClasses.DISPLAY.FLEX,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                      CoreClasses.WIDTH.W_100
                    ]}>
                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "left",
                          vertical  : "top",
                        }}
                        color="secondary"
                        variant="dot">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        >
                         mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PX4]} >
                        <CoreBadge
                          badgeContent={1}
                          color="secondary"
                          anchorOrigin={{
                            horizontal: "left",
                            vertical  : "top",
                          }}
                        >
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                       mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>

                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "left",
                          vertical  : "top",
                        }}
                        badgeContent={100}
                        color="secondary">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        > 
                          mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PL4]} >
                        <CoreBadge
                          anchorOrigin={{
                            horizontal: "left",
                            vertical  : "top",
                          }}
                          color="secondary"
                          badgeContent={1000}
                          max={999}>
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                        mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>
                    </CoreBox>

                    <CoreBox styleClasses={[
                      CoreClasses.PADDING.PT3,
                      CoreClasses.DISPLAY.FLEX,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                      CoreClasses.WIDTH.W_100
                    ]}>
                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "left",
                          vertical  : "bottom",
                        }}
                        color="secondary"
                        variant="dot">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        >
                         mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PX4]} >
                        <CoreBadge
                          badgeContent={1}
                          color="secondary"
                          anchorOrigin={{
                            horizontal: "left",
                            vertical  : "bottom",
                          }}
                        >
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                       mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>

                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "left",
                          vertical  : "bottom",
                        }}
                        badgeContent={100}
                        color="secondary">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        > 
                          mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PL4]} >
                        <CoreBadge
                          anchorOrigin={{
                            horizontal: "left",
                            vertical  : "bottom",
                          }}
                          color="secondary"
                          badgeContent={1000}
                          max={999}>
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                        mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>
                    </CoreBox>

                    <CoreBox styleClasses={[
                      CoreClasses.PADDING.PT3,
                      CoreClasses.DISPLAY.FLEX,
                      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                      CoreClasses.WIDTH.W_100
                    ]}>
                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "right",
                          vertical  : "bottom",
                        }}
                        color="secondary"
                        variant="dot">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        >
                         mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PX4]} >
                        <CoreBadge
                          badgeContent={1}
                          color="secondary"
                          anchorOrigin={{
                            horizontal: "right",
                            vertical  : "bottom",
                          }}
                        >
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                       mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>

                      <CoreBadge
                        anchorOrigin={{
                          horizontal: "right",
                          vertical  : "bottom",
                        }}
                        badgeContent={100}
                        color="secondary">
                        <CoreIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          color="primary"
                          fontSize= "medium"
                        > 
                          mail
                        </CoreIcon>
                      </CoreBadge>

                      <CoreBox styleClasses={[CoreClasses.PADDING.PL4]} >
                        <CoreBadge
                          anchorOrigin={{
                            horizontal: "right",
                            vertical  : "bottom",
                          }}
                          color="secondary"
                          badgeContent={1000}
                          max={999}>
                          <CoreIcon
                            type={__IconTypes.MATERIAL_OUTLINED_ICON}
                            color="primary"
                            fontSize= "medium"
                          >
                        mail
                          </CoreIcon>
                        </CoreBadge>
                      </CoreBox>
                    </CoreBox>
                  </CoreBox>
                    
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
              code={`<CoreBadge color="secondary" variant="dot">
    <CoreIcon icon="mail" />
  </CoreBadge>`}
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
  );
}`}
              renderElement={
                <CoreIcon aria-label={notificationsLabel(100)}>
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
              }
            />
          </>
        }
      />
    </>
  );
}
