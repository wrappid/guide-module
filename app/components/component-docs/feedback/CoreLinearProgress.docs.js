import * as React from "react";

import {
  CoreLinearProgress,
  CoreBox,
  CoreClasses,
  CoreStack
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreLinearProgressDocs() {
  const [determinateProgress, setDeterminateProgress] = React.useState(0);
  const [bufferProgress, setBufferProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDeterminateProgress((oldDeterminateProgress) => {
        if (oldDeterminateProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;

        return Math.min(oldDeterminateProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const progressRef = React.useRef(() => {});

  React.useEffect(() => {
    progressRef.current = () => {
      if (bufferProgress > 100) {
        setBufferProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;

        setBufferProgress(bufferProgress + diff);
        setBuffer(bufferProgress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <ComponentDocs 
        component={CoreLinearProgress}
        description="CoreLinearProgress indicator is a horizontal bar that visually shows the progress of a task, filling from left to right as the task nears completion. It's commonly used to indicate the status of processes like uploads or installations."
        samples={
          <>
            <CodeSample 
              title={"Linear indeterminate"}
              description={"linear indeterminate indicator continuously shows ongoing activity without specific progress."}
              code={"<CoreLinearProgress />"}
              expandedCode={`import {
  CoreLinearProgress,
  CoreBox,
  CoreClasses
} from "@wrappid/core";

export default function CoreLinearProgressDocs() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreLinearProgress />
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                    <CoreLinearProgress />
                  </CoreBox>
                </>
              }
            />

            <CodeSample 
              title={"Linear color"}
              description={"To customize the color of the Linear Progress bar, pass color props to adjust its appearance."}
              code={`<CoreLinearProgress color="secondary" />

<CoreLinearProgress color="success" />

<CoreLinearProgress color="inherit" />`}
              expandedCode={`import {
  CoreLinearProgress,
  CoreClasses,
  CoreStack
} from "@wrappid/core";

export default function CoreLinearProgressDocs() {
  return (
    <CoreStack spacing={2} styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreLinearProgress color="secondary" />

      <CoreLinearProgress color="success" />

      <CoreLinearProgress color="inherit" />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack spacing={2} styleClasses={[CoreClasses.WIDTH.W_100]}>
                    <CoreLinearProgress color="secondary" />

                    <CoreLinearProgress color="success" />

                    <CoreLinearProgress color="inherit" />
                  </CoreStack>

                </>
              }
            />

            <CodeSample 
              title={"Linear determinate"}
              description={"linear determinate indicator shows exact task progress by filling proportionally from left to right."}
              code={"<CoreLinearProgress variant=\"determinate\" value={progress}/>"}
              expandedCode={`import * as React from "react";

import {
  CoreLinearProgress,
  CoreBox,
  CoreClasses
} from "@wrappid/core";

export default function CoreLinearProgressDocs() {
  const [determinateProgress, setDeterminateProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDeterminateProgress((oldDeterminateProgress) => {
        if (oldDeterminateProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;

        return Math.min(oldDeterminateProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreLinearProgress variant="determinate" value={determinateProgress}/>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                    <CoreLinearProgress variant="determinate" value={determinateProgress}/>
                  </CoreBox>
                </>
              }
            />

            <CodeSample 
              title={"Linear buffer"}
              description={"linear determinate indicator shows exact task progress by filling proportionally from left to right."}
              code={"<CoreLinearProgress variant=\"buffer\" value={bufferProgress} valueBuffer={buffer}/>"}
              expandedCode={`import * as React from "react";

import {
  CoreLinearProgress,
  CoreBox,
  CoreClasses
} from "@wrappid/core";

export default function CoreLinearProgressDocs() {
  const [bufferProgress, setBufferProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});

  React.useEffect(() => {
    progressRef.current = () => {
      if (bufferProgress > 100) {
        setBufferProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;

        setBufferProgress(bufferProgress + diff);
        setBuffer(bufferProgress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreLinearProgress variant="buffer" value={bufferProgress} valueBuffer={buffer}/>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                    <CoreLinearProgress variant="buffer" value={bufferProgress} valueBuffer={buffer}/>
                  </CoreBox>
                </>
              }
            />

            <CodeSample 
              title={"Linear with label(NOT IMPLEMENTED)"}
              description={""}
            />
          </>
        }
      />
    </>
  );
}
