import {
  CoreBox, CoreChip, CoreClasses, CoreStack, CoreTypographyBody2, CoreTypographySubtitle2 
} from "@wrappid/core";

export default function ComponentProps(props) {
  const { component } = props;

  return (
    <>
      {
        component?.validProps && component?.validProps?.map(eachProp => {
          return (
            <CoreBox key={`${eachProp}`} styleClasses={[CoreClasses.MARGIN.MT1]}>
              <CoreChip
                label={<CoreTypographySubtitle2>{eachProp?.name}</CoreTypographySubtitle2>}
                size="small"
              />

              <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MT1]}>
                {eachProp?.description}
              </CoreTypographyBody2>

              {eachProp?.types?.map(eachType => {
                return (
                      
                  <>
                    {JSON.stringify(eachType)}

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

                      <CoreChip label={eachType?.type?.name} size="small" />
                    </CoreStack>

                    <CoreTypographySubtitle2>
                      {"Valid Values: "}

                      {
                        eachType?.validValues?.join(" | ")
                      }
                    </CoreTypographySubtitle2>

                    {eachType?.default && (
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

                        <CoreChip label={eachType?.default} size="small" />
                      </CoreStack>
                    )}
                  </>
                );
              })}
            </CoreBox>
          );
        })
      }
    </>
  );
}