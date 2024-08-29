import React from "react";

import {
  CoreStack,
  CoreCircularProgress,
  CoreTypographyBody1,
  CoreBox,
  CoreClasses,
  CoreTypographyOverline,
  CoreList,
  CoreListItem
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

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
      <ComponentDocs
        component={CoreCircularProgress}
        description={
          <><CoreTypographyBody1>
            CoreCircularProgress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
          </CoreTypographyBody1>

          <CoreList variant="HTML" listType="DECIMAL">
            <CoreListItem>
            Determinate indicators display how long an operation will take.
            </CoreListItem>

            <CoreListItem>
            Indeterminate indicators visualize an unspecified wait time.
            </CoreListItem>
          </CoreList></>
        }
        samples={
          <>
            <CodeSample
              title={"Circular indeterminate"}
              description={<>
                <CoreTypographyBody1>Indeterminate indicators visualize an unspecified wait time.</CoreTypographyBody1>
              </>}
              code={"<CoreCircularProgress />"}
              expandedCode={`import {CoreCircularProgress} from "@wrappid/core";

export default function CircularIndeterminate() {
  return (
   <CoreCircularProgress />
  );
}`}
              renderElement={<CoreCircularProgress />}
            />

            <CodeSample
              title={"Circular Color"}
              description={<>
                <CoreTypographyBody1>
             CoreCircularProgress with <CodeBlock>color</CodeBlock> props.
                </CoreTypographyBody1>
              </>}
              code={`<CoreCircularProgress color="primary" />
<CoreCircularProgress color="secondary" />
<CoreCircularProgress color="inherit" />
<CoreCircularProgress color="success" />
<CoreCircularProgress color="info" />
<CoreCircularProgress color="warning" />
<CoreCircularProgress color="error" />`}
              expandedCode={`import { CoreCircularProgress, CoreStack } from "@wrappid/core";

export default function CircularColor() {
  return (
    <CoreStack direction="row" spacing={2}>
      <CoreCircularProgress color="primary" />
      <CoreCircularProgress color="secondary" />
      <CoreCircularProgress color="inherit" />
      <CoreCircularProgress color="success" />
      <CoreCircularProgress color="info" />
      <CoreCircularProgress color="warning" />
      <CoreCircularProgress color="error" />
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack direction="row" spacing={2}>
                  <CoreCircularProgress color="primary" />

                  <CoreCircularProgress color="secondary" />

                  <CoreCircularProgress color="inherit" />

                  <CoreCircularProgress color="success" />

                  <CoreCircularProgress color="info" />

                  <CoreCircularProgress color="warning" />

                  <CoreCircularProgress color="error" />
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
              expandedCode={`import React from "react";

import { CoreCircularProgress, CoreStack } from "@wrappid/core";

export default function CircularDeterminate() {
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
    <CoreStack direction="row" spacing={2}>
      <CoreCircularProgress variant="determinate" value={25} />

      <CoreCircularProgress variant="determinate" value={50} />

      <CoreCircularProgress variant="determinate" value={75} />

      <CoreCircularProgress variant="determinate" value={100} />

      <CoreCircularProgress variant="determinate" value={progress} />
    </CoreStack>
  );
}`}
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
              code={"<CircularProgressWithLabel value={progress} />"}
              expandedCode={`import React from "react";

import { CoreBox, CoreCircularProgress, CoreClasses, CoreTypographyOverline } from "@wrappid/core";

function CircularProgressWithLabel(props) {
  return (
    <CoreBox styleClasses={[CoreClasses.POSITION.POSITION_RELATIVE, CoreClasses.DISPLAY.INLINE_FLEX]}>
      <CoreCircularProgress
        variant="determinate"
        value={` + "`${Math.round(props.value)}`" + `}
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
          {` + "`${Math.round(props.value)}%`" + `}
        </CoreTypographyOverline>
      </CoreBox>
    </CoreBox>
  );
}

export default function CircularWithValueLabel() {
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
    <CircularProgressWithLabel value={progress} />
  );
}`}
              renderElement={
                <>
                  <CircularProgressWithLabel value={progress} />
                </>
              }
            />

            <CodeSample
              title={"Delaying appearance(Not Working)"}
              description={
                <>
                  <CoreTypographyBody1>
                  There are 3 important limits to know around response time. The ripple effect of the ButtonBase component ensures that the user feels that the UI is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep user{"'"}s flow of thought uninterrupted
                  </CoreTypographyBody1>
                </>
              }
              code={"NA"}
              expandedCode={`import React from "react";

import { CoreBox, CoreCircularProgress, CoreClasses, CoreTypographyOverline, CoreButton, CoreFade } from "@wrappid/core";


export default function DelayingAppearance() {
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef(undefined);

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = setTimeout(() => {
      setQuery("success");
    }, 2000);
  };

  return (
     <CoreBox sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
      <CoreBox sx={{ height: 40 }}>
        <CoreFade
          in={loading}
          style={{ transitionDelay: loading ? "800ms" : "0ms" }}
          unmountOnExit
        >
          <CoreCircularProgress />
        </CoreFade>
      </CoreBox>

      <CoreButton onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? "Stop loading" : "Loading"}
      </CoreButton>

      <CoreBox sx={{ height: 40 }}>
        {query === "success" ? (
          <CoreTypographyBody1>Success!</CoreTypographyBody1>
        ) : (
          <CoreFade
            in={query === "progress"}
            style={{ transitionDelay: query === "progress" ? "800ms" : "0ms" }}
            unmountOnExit
          >
            <CoreCircularProgress />
          </CoreFade>
        )}
      </CoreBox>

      <CoreButton onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== "idle" ? "Reset" : "Simulate a load"}
      </CoreButton>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
