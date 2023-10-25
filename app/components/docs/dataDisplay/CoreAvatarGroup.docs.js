import {
  CoreAvatar,
  CoreAlert,
  CoreClasses,
  CoreStack,
  CoreSpan,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  // CoreAvatarGroup
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreAvatarGroupDocs() {
  return (
    <>
      <CoreH4
        styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
      >
        CoreAvatarGroup
      </CoreH4>

      <CoreTypographyBody1>
        AvatarGroup renders its children as a stack.
      </CoreTypographyBody1>

      <CoreAlert severity="error">
        Grouped Error: CoreAvatarGroup is Not Implemented
      </CoreAlert>
      <CodeSample
        title="Grouped (NOT_IMPLEMENTED)"
        description="AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars."
        code={`
          <CoreAvatarGroup max={4}>
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <CoreAvatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </CoreAvatarGroup>
        `}
        renderElement={<></>}
      />
      <CoreAlert severity="error">
        Total avatars Error: CoreAvatarGroup is Not Implemented
      </CoreAlert>
      <CodeSample
        title="Total avatars (NOT_IMPLEMENTED)"
        description="If you need to control the total number of avatars not shown, you can use the total prop."
        code={`
          <CoreAvatarGroup total={24}>
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </CoreAvatarGroup>
        `}
        renderElement={<></>}
      />

      <CoreAlert severity="error">
        Custom surplus Error: CoreAvatarGroup is Not Implemented
      </CoreAlert>
      <CodeSample
        title="Custom surplus (NOT_IMPLEMENTED)"
        description="Set the renderSurplus prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the max prop, and should return a React.ReactNode.
The renderSurplus prop is useful when you need to render the surplus based on the data sent from the server."
        code={`
          <CoreAvatarGroup 
            renderSurplus={(surplus) => <>+{surplus.toString()[0]}k</>}
            total={4250}>
            <CoreAvatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <CoreAvatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <CoreAvatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <CoreAvatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </CoreAvatarGroup>
        `}
        renderElement={<></>}
      />

      {/* <ComponentProps component={CoreAvatarGroup} /> */}
    </>
  );
}
