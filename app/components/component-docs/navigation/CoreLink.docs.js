import {
  CoreBox,
  CoreClasses,
  CoreLink
} from "@wrappid/core";
  
import ComponentDocs from "./../ComponentDocs";
import CodeSample from "../../CodeSample";
const preventDefault = (event) => event.preventDefault();

const CORE_COMPONENT = CoreLink;
const CORE_COMPONENT_NAME = CORE_COMPONENT.name;

export default function CoreLinkDocs() {
  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`The ${CORE_COMPONENT_NAME} component allows you to easily customize anchor elements with your theme colors and typography styles.`}
      basicSampleProps={{ children: "Link", href: "#" }}
      samples={
        <>
          <CodeSample
            title={`${CORE_COMPONENT_NAME} variants`}
            description={"The CoreLink component is built on top of the CoreTypography* component, meaning that you can use its props."}
            code={`<CoreLink href="#" variant="body1" styleClasses={[CoreClasses.MARGIN.ML2]}>
  Link
</CoreLink>

<CoreLink href="#" color="inherit" styleClasses={[CoreClasses.MARGIN.ML2]}>
  {"color="inherit"}
</CoreLink>

<CoreLink href="#" variant="body2" styleClasses={[CoreClasses.MARGIN.ML2]}>
  {"variant=body2"}
</CoreLink>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreLink } from "@wrappid/core";

const preventDefault = (event) => event.preventDefault();

export default function VariantsCoreLink() {
  return (
    <CoreBox
      styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}
      onClick={preventDefault}
    >
      <CoreLink href="#" variant="body1" styleClasses={[CoreClasses.MARGIN.ML2]}>Link</CoreLink>

      <CoreLink href="#" color="inherit" styleClasses={[CoreClasses.MARGIN.ML2]}>
        {"color=inherit"}
      </CoreLink>

      <CoreLink href="#" variant="body2" styleClasses={[CoreClasses.MARGIN.ML2]}>
        {"variant=body2"}
      </CoreLink>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox
                styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}
                onClick={preventDefault}
              >
                <CoreLink href="#" variant="body1" styleClasses={[CoreClasses.MARGIN.ML2]}>Link</CoreLink>

                <CoreLink href="#" color="inherit" styleClasses={[CoreClasses.MARGIN.ML2]}>
                  {"color=\"inherit\""}
                </CoreLink>

                <CoreLink href="#" variant="body2" styleClasses={[CoreClasses.MARGIN.ML2]}>
                  {"variant=\"body2\""}
                </CoreLink>
              </CoreBox>
            }
          />

          <CodeSample
            title={`Underline ${CORE_COMPONENT_NAME}`}
            description={"The underline prop can be used to set the underline behavior. The default is none."}
            code={`<CoreLink href="#" styleClasses={[CoreClasses.MARGIN.ML2]}>
  default underline
</CoreLink>
<CoreLink href="#" underline="none" styleClasses={[CoreClasses.MARGIN.ML2]}>
  {"underline=none"}
</CoreLink>

<CoreLink href="#" underline="hover" styleClasses={[CoreClasses.MARGIN.ML2]}>
  {"underline=hover"}
</CoreLink>

<CoreLink href="#" underline="always" styleClasses={[CoreClasses.MARGIN.ML2]}>
  {"underline=always"}
</CoreLink>`}
            expandedCode={`import { CoreBox, CoreClasses, CoreLink } from "@wrappid/core";

const preventDefault = (event) => event.preventDefault();

export default function UnderlineCoreLink() {
  return (
    <CoreBox
      styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
      onClick={preventDefault}
    >
      <CoreLink href="#" styleClasses={[CoreClasses.MARGIN.ML2]}>
      default underline
      </CoreLink>

      <CoreLink href="#" underline="none" styleClasses={[CoreClasses.MARGIN.ML2]}>
        {"underline=none"}
      </CoreLink>

      <CoreLink href="#" underline="hover" styleClasses={[CoreClasses.MARGIN.ML2]}>
        {"underline=hover"}
      </CoreLink>

      <CoreLink href="#" underline="always" styleClasses={[CoreClasses.MARGIN.ML2]}>
        {"underline=always"}
      </CoreLink>
    </CoreBox>
  );
}`}
            renderElement={<>
              <CoreBox
                styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                onClick={preventDefault}
              >
                <CoreLink href="#" styleClasses={[CoreClasses.MARGIN.ML2]}>
                  default underline
                </CoreLink>

                <CoreLink href="#" underline="none" styleClasses={[CoreClasses.MARGIN.ML2]}>
                  {"underline=\"none\""}
                </CoreLink>

                <CoreLink href="#" underline="hover" styleClasses={[CoreClasses.MARGIN.ML2]}>
                  {"underline=\"hover\""}
                </CoreLink>

                <CoreLink href="#" underline="always" styleClasses={[CoreClasses.MARGIN.ML2]}>
                  {"underline=\"always\""}
                </CoreLink>
              </CoreBox>
            </>}
          />
        </>
      }/>
  );
}