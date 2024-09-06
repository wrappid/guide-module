
import React from "react";

import {
  CoreBox, CoreClasses, CoreIcon, CoreRating, CoreSpan, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const labels = {
  0.5: "Terrible",
  1  : "Very Bad",
  1.5: "Bad",
  2  : "Fairly Bad",
  2.5: "Average",
  3  : "Good",
  3.5: "Very Good",
  4  : "Excellent",
  4.5: "Outstanding",
  5  : "Exceptional",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const customIcons = {
  1: {
    icon : <CoreIcon icon="sentiment_very_dissatisfied" color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon : <CoreIcon icon="sentiment_dissatisfied" color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon : <CoreIcon icon="sentiment_satisfied" color="warning" />,
    label: "Neutral",
  },
  4: {
    icon : <CoreIcon icon="sentiment_satisfied_alt" color="success" />,
    label: "Satisfied",
  },
  5: {
    icon : <CoreIcon icon="sentiment_very_satisfied" color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;

  // return <span {...other}>{customIcons[value].icon}</span>;
  return <CoreSpan {...other}>{customIcons[value].icon}</CoreSpan>;
  
  // return <CoreStack {...other}>{customIcons[value].icon}</CoreStack>;

}

export default function CoreRatingDocs() {
  const [basicValue, setBasicValue] = React.useState(2);
  const [valueFeedback, setValueFeedback] = React.useState(2);
  const [hoverFeedback, setHoverFeedback] = React.useState(-1);

  return (
    <>
      <ComponentDocs 
        component={CoreRating}
        description="CoreRatings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own."
        samples={
          <>
            <CodeSample
              title={"Basic"}
              description={"Here are some examples demonstrating the basic usage of the rating component."}
              code={`<CoreBox>
  <CoreTypographyBody1>Controlled </CoreTypographyBody1>

  <CoreRating
    name="simple-controlled"
    value={basicValue}
    onChange={(event, newValue) => {
      setBasicValue(newValue);
    }}
  />

  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>Read only </CoreTypographyBody1>

  <CoreRating name="read-only" value={basicValue} readOnly />

  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>Disabled </CoreTypographyBody1>

  <CoreRating name="disabled" value={basicValue} disabled />

  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>No rating given </CoreTypographyBody1>

  <CoreRating name="no-value" value={null} />

</CoreBox> `}
              expandedCode={`
import React from "react";

import { CoreBox, CoreClasses, CoreRating, CoreTypographyBody1 } from "@wrappid/core";

export default function CoreRatingDocs() {
  const [basicValue, setBasicValue] = React.useState(2);

  return (
    <CoreBox>
      <CoreTypographyBody1>Controlled </CoreTypographyBody1>

      <CoreRating
        name="simple-controlled"
        value={basicValue}
        onChange={(event, newValue) => {
          setBasicValue(newValue);
        }}
      />

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>Read only </CoreTypographyBody1>

      <CoreRating name="read-only" value={basicValue} readOnly />

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>Disabled </CoreTypographyBody1>

      <CoreRating name="disabled" value={basicValue} disabled />

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>No rating given </CoreTypographyBody1>

      <CoreRating name="no-value" value={null} />

    </CoreBox>       
  );
}`}
              renderElement={
                <CoreBox>
                  <CoreTypographyBody1>Controlled </CoreTypographyBody1>

                  <CoreRating
                    name="simple-controlled"
                    value={basicValue}
                    onChange={(event, newValue) => {
                      setBasicValue(newValue);
                    }}
                  />

                  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>Read only </CoreTypographyBody1>

                  <CoreRating name="read-only" value={basicValue} readOnly />

                  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>Disabled </CoreTypographyBody1>

                  <CoreRating name="disabled" value={basicValue} disabled />

                  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MT3]}>No rating given </CoreTypographyBody1>

                  <CoreRating name="no-value" value={null} />

                </CoreBox> 
              }
            />

            <CodeSample 
              title={"Rating precision"}
              description={"The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed."}
              code={`<CoreStack spacing={1}>
  <CoreTypographyBody1>Controlled</CoreTypographyBody1>

  <CoreRating name="half-rating" defaultValue={2.5} precision={0.5} />

  <CoreTypographyBody1>Read only</CoreTypographyBody1>
              
  <CoreRating
    name="half-rating-read"
    defaultValue={2.5}
    precision={0.5}
    readOnly
  />
</CoreStack>`}
              expandedCode={`import { CoreRating, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

export default function CoreRatingDocs() {
  return ( 
    <CoreStack spacing={1}>
      <CoreTypographyBody1>Controlled</CoreTypographyBody1>

      <CoreRating name="half-rating" defaultValue={2.5} precision={0.5} />

      <CoreTypographyBody1>Read only</CoreTypographyBody1>
                  
      <CoreRating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </CoreStack>
  );
}
`}
              renderElement={
                <CoreStack spacing={1}>
                  <CoreTypographyBody1>Controlled</CoreTypographyBody1>

                  <CoreRating name="half-rating" defaultValue={2.5} precision={0.5} />

                  <CoreTypographyBody1>Read only</CoreTypographyBody1>
                  
                  <CoreRating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </CoreStack>
              }
            />

            <CodeSample 
              title={"Hover feedback"}
              description={"You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop.0.5 Stars, Useless"}
              code={`<CoreBox width={200} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.DISPLAY.FLEX]}>
  <CoreRating
    name="hover-feedback"
    value={valueFeedback}
    precision={0.5}
    getLabelText={getLabelText}
    onChange={(event, newValue) => {
      setValueFeedback(newValue);
    }}
    onChangeActive={(event, newHover) => {
      setHoverFeedback(newHover);
    }}
    emptyIcon={<CoreIcon
    icon="star"
    styleClasses={[CoreClasses.OPACITY.OPACITY_50]}
    fontSize="inherit" />}
  />

  {valueFeedback !== null && (
    <CoreBox styleClasses={[CoreClasses.MARGIN.ML1]}>{labels[hoverFeedback !== -1 ? hoverFeedback : valueFeedback]}</CoreBox>
  )}
</CoreBox>`}
              expandedCode={`
import React from "react";

import { CoreBox, CoreClasses, CoreIcon, CoreRating } from "@wrappid/core";

const labels = {
  0.5: "Terrible",
  1  : "Very Bad",
  1.5: "Bad",
  2  : "Fairly Bad",
  2.5: "Average",
  3  : "Good",
  3.5: "Very Good",
  4  : "Excellent",
  4.5: "Outstanding",
  5  : "Exceptional",
};

function getLabelText(value) {
  return \`\${value} Star$\{value !== 1 ? "s" : ""}, \${labels[value]}\`;
}

export default function CoreRatingDocs() {
  const [valueFeedback, setValueFeedback] = React.useState(2);
  const [hoverFeedback, setHoverFeedback] = React.useState(-1);

  return ( 
    <CoreBox width={200} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.DISPLAY.FLEX]}>
      <CoreRating
        name="hover-feedback"
        value={valueFeedback}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValueFeedback(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHoverFeedback(newHover);
        }}
        emptyIcon={<CoreIcon
        icon="star"
        styleClasses={[CoreClasses.OPACITY.OPACITY_50]}
        fontSize="inherit" />}
      />

      {valueFeedback !== null && (
        <CoreBox styleClasses={[CoreClasses.MARGIN.ML1]}>{labels[hoverFeedback !== -1 ? hoverFeedback : valueFeedback]}</CoreBox>
      )}
    </CoreBox>   
  );
}`}
              renderElement={
                <CoreBox width={200} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.DISPLAY.FLEX]}>
                  <CoreRating
                    name="hover-feedback"
                    value={valueFeedback}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                      setValueFeedback(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHoverFeedback(newHover);
                    }}
                    emptyIcon={<CoreIcon
                      icon="star"
                      styleClasses={[CoreClasses.OPACITY.OPACITY_50]}
                      fontSize="inherit" />}
                  />

                  {valueFeedback !== null && (
                    <CoreBox styleClasses={[CoreClasses.MARGIN.ML1]}>{labels[hoverFeedback !== -1 ? hoverFeedback : valueFeedback]}</CoreBox>
                  )}
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Sizes"}
              description={"For larger or smaller ratings use the size prop."}
              code={`<CoreStack spacing={1}>
  <CoreRating name="size-small" defaultValue={2} size="small" />

  <CoreRating name="size-medium" defaultValue={2} />

  <CoreRating name="size-large" defaultValue={2} size="large" />
</CoreStack>`}
              expandedCode={`
import { CoreRating, CoreStack } from "@wrappid/core";

export default function CoreRatingDocs() {
  return ( 
    <CoreStack spacing={1}>
      <CoreRating name="size-small" defaultValue={2} size="small" />

      <CoreRating name="size-medium" defaultValue={2} />

      <CoreRating name="size-large" defaultValue={2} size="large" />
    </CoreStack>
  );
}
`}
              renderElement={
                <CoreStack spacing={1}>
                  <CoreRating name="size-small" defaultValue={2} size="small" />

                  <CoreRating name="size-medium" defaultValue={2} />

                  <CoreRating name="size-large" defaultValue={2} size="large" />
                </CoreStack>
              }
            />

            <CodeSample 
              title={"Customization"}
              description={"Here are some examples of customizing the component."}
              code={`<CoreBox>
  <CoreTypographyBody1 component="legend">Custom icon and color</CoreTypographyBody1>

  <CoreRating
    name="customized-color"
    defaultValue={2}
    getLabelText={(value) => \`\${value} Heart\${value !== 1 ? "s" : ""}\`}
    precision={0.5}
    icon={<CoreIcon icon="favorite" fontSize="inherit" color="secondary"/>}
    emptyIcon={<CoreIcon icon="favorite_border" fontSize="inherit" />}
  />

  <CoreTypographyBody1 component="legend" styleClasses={[CoreClasses.MARGIN.MT3]}>10 stars</CoreTypographyBody1>

  <CoreRating name="customized-10" defaultValue={2} max={10} />
</CoreBox>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreIcon, CoreRating, CoreTypographyBody1 } from "@wrappid/core";

export default function CoreRatingDocs() {
  return ( 
    <CoreBox>
      <CoreTypographyBody1 component="legend">Custom icon and color</CoreTypographyBody1>

      <CoreRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => \`\${value} Heart\${value !== 1 ? "s" : ""}\`}
        precision={0.5}
        icon={<CoreIcon icon="favorite" fontSize="inherit" color="secondary"/>}
        emptyIcon={<CoreIcon icon="favorite_border" fontSize="inherit" />}
      />

      <CoreTypographyBody1 component="legend" styleClasses={[CoreClasses.MARGIN.MT3]}>10 stars</CoreTypographyBody1>

      <CoreRating name="customized-10" defaultValue={2} max={10} />
    </CoreBox>
  );
}
`}
              renderElement={
                <CoreBox>
                  <CoreTypographyBody1 component="legend">Custom icon and color</CoreTypographyBody1>

                  <CoreRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
                    precision={0.5}
                    icon={<CoreIcon icon="favorite" fontSize="inherit" color="secondary"/>}
                    emptyIcon={<CoreIcon icon="favorite_border" fontSize="inherit" />}
                  />

                  <CoreTypographyBody1 component="legend" styleClasses={[CoreClasses.MARGIN.MT3]}>10 stars</CoreTypographyBody1>

                  <CoreRating name="customized-10" defaultValue={2} max={10} />
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Radio group(Not_Working)"}
              description={"If we use <CoreSpan> in place of <span> that is not working"}
              renderElement={
                <CoreRating
                  name="highlight-selected-only"
                  defaultValue={2}
                  IconContainerComponent={IconContainer}
                  getLabelText={(value) => customIcons[value].label}
                  highlightSelectedOnly
                />
              }
            />
          </>
        }
      />
    </>
  );
}
