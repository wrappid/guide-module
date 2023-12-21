import {
  CoreH4,
  CoreTypographyBody1,
  CoreRating,
  CoreBox,
  CoreIcon,
  CoreTypographyCaption,
  CoreClasses
} from "@wrappid/core";
import React from "react";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";


// labels for hover Feedback Section
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

// getLabelText for hover Feedback Section
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

// StyledRating for the Customization Section
// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#ff6d75",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#ff3d47",
//   },
// });

// // StyledRating1 for the Radio Section
// const StyledRating1 = styled(Rating)(({ theme }) => ({
//   "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
//     color: theme.palette.action.disabled,
//   },
// }));

// customIcons for Radio Section
const customIcons = {
  1: {
    icon: <CoreIcon icon="sentiment_very_dissatisfied" color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <CoreIcon icon="sentiment_dissatisfied" color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <CoreIcon icon="sentiment_satisfied" color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <CoreIcon icon="sentiment_satisfied_alt" color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <CoreIcon icon="sentiment_very_satisfied" color="success" />,
    label: "Very Satisfied",
  },
};

// IconContainer for Radio Section
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

// IconContainer.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// Default export function
export default function CoreRatingDocs() {
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <CoreH4>CoreRating</CoreH4>

      <CoreTypographyBody1>
        Ratings provide insight regarding others' opinions and experiences, and
        can allow the user to submit a rating of their own.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic Rating"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographyBody1>Controlled </CoreTypographyBody1>
        <CoreRating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
       
        <CoreTypographyBody1>Read only </CoreTypographyBody1>
        <CoreRating name="read-only" value={value} readOnly />
        
        <CoreTypographyBody1>Disabled </CoreTypographyBody1>
        <CoreRating name="disabled" value={value} disabled />

        <CoreTypographyBody1>No rating given </CoreTypographyBody1>
        <CoreRating name="no-value" value={null} />`}
        renderElement={
          <>
            <CoreTypographyBody1>Controlled </CoreTypographyBody1>
            <CoreRating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <CoreTypographyBody1>Read only </CoreTypographyBody1>
            <CoreRating name="read-only" value={value} readOnly />

            <CoreTypographyBody1>Disabled </CoreTypographyBody1>
          <CoreRating name="disabled" value={value} disabled />

            <CoreTypographyBody1>No rating given </CoreTypographyBody1>
            <CoreRating name="no-value" value={null} />
          </>
        }
      />

      <CodeSample
        title={"Rating precision"}
        description={
          "The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed."
        }
        code={`<CoreRating name="half-rating" defaultValue={2.5} precision={0.5} />
        <CoreRating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />`}
        renderElement={
          <>
            <CoreRating name="half-rating" defaultValue={2.5} precision={0.5} />
            <CoreRating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </>
        }
      />

      <CodeSample
        title={"Hover feedback"}
        description={
          "You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop."
        }
        code={`<CoreRating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={
            <CoreIcon icon="star" style={{ opacity: 0.55 }} fontSize="inherit" />
          }
        />
        {value !== null && (
          <CoreBox sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</CoreBox>
        )}`}
        renderElement={
          <>
            <CoreRating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <CoreIcon icon="star" style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <CoreBox sx={{ ml: 2 }}>
                {labels[hover !== -1 ? hover : value]}
              </CoreBox>
            )}
          </>
        }
      />

      <CodeSample
        title={"Sizes"}
        description={"For larger or smaller ratings use the size prop."}
        code={`<CoreRating name="size-small" defaultValue={2} size="small" />
        <CoreRating name="size-medium" defaultValue={2} />
        <CoreRating name="size-large" defaultValue={2} size="large" />`}
        renderElement={
          <>
            <CoreRating name="size-small" defaultValue={2} size="small" />
            <CoreRating name="size-medium" defaultValue={2} />
            <CoreRating name="size-large" defaultValue={2} size="large" />
          </>
        }
      />

      <CodeSample
        title={"Customization"}
        description={"Here are some examples of customizing the component."}
        code={`<CoreTypographyBody1 component="legend">
        Custom icon and color
      </CoreTypographyBody1>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) =>
          \`\${value} Heart\${value !== 1 ? "s" : ""}\`
        }
        precision={0.5}
        icon={<CoreIcon icon="favorite" />}
        emptyIcon={<CoreIcon icon="favorite_border" />}
      />
      <CoreTypographyBody1 component="legend">
        10 stars
      </CoreTypographyBody1>
      <CoreRating name="customized-10" defaultValue={2} max={10} />`}
        renderElement={
          <>
           <CoreTypographyCaption
              key={1}
              component="p"
              styleClasses={[CoreClasses.COLOR.TEXT_WARNING_LIGHT]}
            >
              Can not used mui styled function & Rating component directly in our application. Issue available here: https://github.com/wrappid/guide-module/issues/5
            </CoreTypographyCaption>
            <CoreTypographyBody1 component="legend">
              Custom icon and color
            </CoreTypographyBody1>
            {/* <StyledRating
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={0.5}
              icon={<CoreIcon icon="favorite" />}
              emptyIcon={<CoreIcon icon="favorite_border" />}
            /> */}
            <CoreTypographyBody1 component="legend">
              10 stars
            </CoreTypographyBody1>
            <CoreRating name="customized-10" defaultValue={2} max={10} />
          </>
        }
      />

      <CodeSample
        title={"Radio group"}
        description={
          "The rating is implemented with a radio group, set highlightSelectedOnly to restore the natural behavior."
        }
        code={`<StyledRating
          name="highlight-selected-only"
          defaultValue={2}
          IconContainerComponent={IconContainer}
          getLabelText={(value) => customIcons[value].label}
          highlightSelectedOnly
        />`}
        renderElement={
          <>
            {/* <StyledRating
              name="highlight-selected-only"
              defaultValue={2}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
            /> */}
          </>
        }
      />

      <ComponentProps component={CoreRating} />
    </>
  );
}
