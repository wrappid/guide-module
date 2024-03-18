import {
  CoreH4,
  CoreIcon,
  CoreTypographyBody1
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreIconDocs() {
  return (
    <>
      <CoreH4>CoreIcon</CoreH4>

      <CoreTypographyBody1>
        Guidance and suggestions for using icons with Material UI.

      </CoreTypographyBody1>

      <CodeSample
        title={"CoreIcon"}
        description={"CoreIcon is wrappid customized component for using icons built using following icon libraries FONTAWESOME_V5_REGULAR_ICON, FONTAWESOME_V5_SOLID_ICON, MATERIAL_ICON, MATERIAL_OUTLINED_ICON, RXICON_V1_REGULAR_ICON"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreIcon
            type="__IconTypes.MATERIAL_ICON"
            icon="mail"
            color="primary"
            fontSize="large"></CoreIcon>

          <CoreIcon
            type="__IconTypes.MATERIAL_OUTLINED_ICON"
            icon="EmailOutlined"
            baseClassName="material-icons-outlined"
            color="success"></CoreIcon>

          <CoreIcon
            type="__IconTypes.MATERIAL_ICON"
            icon="MailRounded"
            baseClassName="material-icons-rounded"
            color="success"></CoreIcon>

          <CoreIcon type="__IconTypes.FONTAWESOME_V5_REGULAR_ICON" icon="fa-regular fa-envelope" baseClassName="fas"></CoreIcon>

          <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="fa-solid fa-envelope" baseClassName="fas"></CoreIcon>

          <CoreIcon type="__IconTypes.FONTAWESOME_V5_REGULAR_ICON" icon="mail"></CoreIcon>

          <CoreIcon type="__IconTypes.FONTAWESOME_V5_SOLID_ICON" icon="mail"></CoreIcon>
        </>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      <ComponentProps component={CoreIcon} />

    </>
  );
}