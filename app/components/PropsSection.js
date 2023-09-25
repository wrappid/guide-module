import {
  CoreChip,
  CoreTypographySubtitle2,
  CoreTypographyBody2,
  CoreStack,
  CoreClasses,
  CoreBox,
  CoreDivider
} from "@wrappid/core";

export default function PropsSection({
  propName,
  subtitle,
  types,
  defaultProp,
  defaultType,
}) {
  return (
    <>
      <CoreBox styleClasses={[CoreClasses.MARGIN.MT1]}>
        <CoreChip
          label={<CoreTypographySubtitle2>{propName}</CoreTypographySubtitle2>}
          size="small"
        />

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT1]}>
          {subtitle}
        </CoreTypographyBody2>

        <CoreStack
          direction="row"
          spacing={1}
          styleClasses={[CoreClasses.MARGIN.MT1]}
        >
          <CoreTypographyBody2
            styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
          >
            Type:
          </CoreTypographyBody2>

          <CoreChip label={types} size="small" />
        </CoreStack>

        {defaultProp === true && (
          <CoreStack
            direction="row"
            spacing={1}
            styleClasses={[CoreClasses.MARGIN.MT1]}
          >
            <CoreTypographyBody2
              styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
            >
              Default:
            </CoreTypographyBody2>

            <CoreChip label={defaultType} size="small" />
          </CoreStack>
        )}
      </CoreBox>

      <CoreDivider />
    </>
  );
}
