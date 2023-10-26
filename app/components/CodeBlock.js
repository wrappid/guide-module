import { CoreClasses, CoreSpan } from "@wrappid/core";

function CodeBlock(props) {
  const { children } = props;

  return (
    <CoreSpan styleClasses={[CoreClasses.BG.BG_SECONDARY]} code={true}>{children}</CoreSpan>
  );
}

export default CodeBlock;