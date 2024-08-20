/* eslint-disable no-undef */
import React from "react";

import {
  CoreH4,
  CoreStack,
  CoreCircularProgress,
  CoreTypographyBody1,
  CoreBox,
  CoreClasses,
  CoreTypographyOverline
  // CoreCircularProgressWithLabel
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

function CircularProgressWithLabel(props) {
  return (
    <CoreBox styleClasses={[CoreClasses.POSITION.POSITION_RELATIVE, CoreClasses.DISPLAY.INLINE_FLEX]}>
      <CoreCircularProgress
        variant="determinate"
        value={`${Math.round(props.value)}`}
      />

      <CoreBox styleClasses={[
        CoreClasses.POSITION.TOP_50,
        CoreClasses.POSITION.BOTTOM_0,
        CoreClasses.POSITION.START_0,
        CoreClasses.POSITION.END_0,
        CoreClasses.POSITION.POSITION_ABSOLUTE,
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
      ]}>
        <CoreTypographyOverline styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_MEDIUM, CoreClasses.COLOR.TEXT_PRIMARY]}>
          {`${Math.round(props.value)}%`}
        </CoreTypographyOverline>
      </CoreBox>
    </CoreBox>
  
  );
}

export default function CoreCircularProgressDocs() {
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <CoreH4>CoreCircularProgress</CoreH4>

      <CoreTypographyBody1>
          CoreCircularProgress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
          1.Determinate indicators display how long an operation will take.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
          2.Indeterminate indicators visualize an unspecified wait time.
      </CoreTypographyBody1>

      <CodeImport name="CoreCircularProgress" />

      <CodeSample
        title={"Circular indeterminate"}
        description={<>
          <CoreTypographyBody1>Indeterminate indicators visualize an unspecified wait time</CoreTypographyBody1>
        </>}
        code={"<CoreCircularProgress />"}
        renderElement={<CoreCircularProgress />}
      />

      <CodeSample
        title={"Circular Color"}
        description={<>
          <CoreTypographyBody1>
             CoreCircularProgress with <CodeBlock>color</CodeBlock> props.
          </CoreTypographyBody1>
        </>}
        code={`<CoreCircularProgress color="secondary" />
<CoreCircularProgress color="success" />
<CoreCircularProgress color="inherit" />`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreCircularProgress color="secondary" />

            <CoreCircularProgress color="success" />

            <CoreCircularProgress color="inherit" />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Circular determinate"}
        description={<>
          <CoreTypographyBody1>
        Determinate indicators display how long an operation will take.
          </CoreTypographyBody1>
        </>}
        code={`<CoreCircularProgress variant="determinate" value={25} />
<CoreCircularProgress variant="determinate" value={50} />
<CoreCircularProgress variant="determinate" value={75} />
<CoreCircularProgress variant="determinate" value={100} />
<CoreCircularProgress variant="determinate" value={progress} />`}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreCircularProgress variant="determinate" value={25} />

            <CoreCircularProgress variant="determinate" value={50} />

            <CoreCircularProgress variant="determinate" value={75} />

            <CoreCircularProgress variant="determinate" value={100} />

            <CoreCircularProgress variant="determinate" value={progress} />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Interactive integration(Not Working)"}
        description={<>
          <CoreTypographyBody1>
          </CoreTypographyBody1>
        </>}
        code={" "}
        renderElement={
          <>
         
          </>
        }
      />

      <CodeSample
        title={"Circular with label"}
        description={
          <>
            <CoreTypographyBody1>
            CoreCircularProgress Label indicate users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
            </CoreTypographyBody1>
          </>
        }
        code={`function CircularProgressWithLabel(props) {
  return (
    <CoreBox styleClasses={[CoreClasses.POSITION.POSITION_RELATIVE, CoreClasses.DISPLAY.INLINE_FLEX]}>
      <CoreCircularProgress
        variant="determinate"
        value={` + "`${Math.round(props.value)}" + `}
      />

      <CoreBox styleClasses={[
        CoreClasses.POSITION.TOP_50,
        CoreClasses.POSITION.BOTTOM_0,
        CoreClasses.POSITION.START_0,
        CoreClasses.POSITION.END_0,
        CoreClasses.POSITION.POSITION_ABSOLUTE,
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
      ]}>
        <CoreTypographyOverline styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_MEDIUM, CoreClasses.COLOR.TEXT_PRIMARY]} >
          {` + "`${Math.round(props.value)}%`" + `}
        </CoreTypographyOverline>
      </CoreBox>
    </CoreBox>
  );
}

<CircularProgressWithLabel value={progress} />`}
        renderElement={
          <>
            <CircularProgressWithLabel value={progress} />
          </>
        }
      />

      <ComponentProps component={CoreCircularProgress} />
    </>
  );
}
