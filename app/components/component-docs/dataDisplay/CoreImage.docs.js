import { CoreImage } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreImage;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreImageDocs() {

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} is a component that displays an image.`}
      samples={
        <>
          <CodeSample
            title={`Sample ${CORE_COMPONENT_NAME}`}
            description={`Below is a sample of how to use the ${CORE_COMPONENT_NAME} component.`}
            code={`<CoreImage
  width={200}
  height={200}
  alt="Phoenicopterus ruber"
  src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" 
/>`}
            expandedCode={`import { CoreImage } from "@wrappid/core";

export default function SampleCoreImage() {
  return (
    <>
      <CoreImage
        width={200}
        height={200}
        alt="Phoenicopterus ruber"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
      />
    </>
  );
}`}
            renderElement={<>
              <CoreImage
                width={200}
                height={200}
                alt="Phoenicopterus ruber"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
              />
            </>}
          />

          <CodeSample
            title={`Alt Text ${CORE_COMPONENT_NAME}`}
            description={"With alt text set, the image will have alternative text. For demonstration purposes, the image source(src) has been removed."}
            code={`<CoreImage
  width={200}
  height={200}
  alt="Phoenicopterus ruber"
/>`}
            expandedCode={`import { CoreImage } from "@wrappid/core";

export default function AltTextCoreImage() {
  return (
    <>
      <CoreImage
        width={200}
        height={200}
        alt="Phoenicopterus ruber"
      />
    </>
  );
}`}
            renderElement={<>
              <CoreImage
                width={200}
                height={200}
                alt="Phoenicopterus ruber"
              />
            </>}
          />
        </>
      }
    />
  );
}
