import { CoreTimer } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreTimerDocs() {
  const handleTimerButtonAction = () => {
    // eslint-disable-next-line no-console
    console.log("Clicked CoreTimer!");
  };

  const CORE_COMPONENT = CoreTimer;
  const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT.name);

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`The ${CORE_COMPONENT_NAME} component is used to display a countdown timer with a button that enables after timer reaches zero. This component is ideal for use in forms, quizzes, or any other UI elements where a countdown timer is required.`}
      samples={
        <>
          <CodeSample
            title={"Simple CoreTimer"}
            description={`Below is a simple example of a ${CORE_COMPONENT_NAME} component with a 5 second countdown timer.`}
            code={`<CoreTimer 
  seconds={5}
  action={handleTimerButtonAction}
  actionLabel="Click Me"
  timerLabel="Time remaining: "
/>`}
            expandedCode={`import { CoreTimer } from "@wrappid/core";

const handleTimerButtonAction = () => {
  console.log("Clicked CoreTimer!");
};

export default function SampleCoreTimer() {
  return (
    <>
      <CoreTimer 
        seconds={5}
        action={handleTimerButtonAction}
        actionLabel="Click Me"
        timerLabel="Time remaining: "
      />
    </>
  );
}`}
            renderElement={<>
              <CoreTimer 
                seconds={5}
                action={handleTimerButtonAction}
                actionLabel="Click Me"
                timerLabel="Time remaining: "
              />
            </>}
          />

          <CodeSample
            title={`Manual Triggered ${CORE_COMPONENT_NAME}`}
            description={`Below is an example of a ${CORE_COMPONENT_NAME} component with a 10 second countdown timer and a custom action button.`}
            code={`<CoreTimer 
  seconds={5}
  action={handleTimerButtonAction}
  timerLabel="Time remaining: "
  startOnButtonPress={true}
/>`}
            expandedCode={`import { CoreTimer } from "@wrappid/core";

const handleTimerButtonAction = () => {
  console.log("Clicked CoreTimer!");
};

export default function ManualTriggeredCoreTimer() {
  return (
    <>
      <CoreTimer 
        seconds={5}
        action={handleTimerButtonAction}
        actionLabel="Start Countdown"
        timerLabel="Time remaining: "
        startOnButtonPress={true}
      />
    </>
  );
}`}
            renderElement={<>
              <CoreTimer 
                seconds={5}
                action={handleTimerButtonAction}
                actionLabel="Start Countdown"
                timerLabel="Time remaining: "
                startOnButtonPress={true}
              />
            </>}
          />
        </>
      }/>
  );
}
