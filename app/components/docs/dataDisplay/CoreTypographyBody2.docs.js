import { CoreH4, CoreTypographyBody2, CoreTypography } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyBody2Docs() {
  return (
    <>
      <CoreH4>{`CoreTypographyBody2`}</CoreH4>
      <CoreTypographyBody2>COMPONENT_DESCRIPTION</CoreTypographyBody2>
      <CodeSample
        title={"Basic"}
        description={"This is basic CoreTypographyBody2"}
        code={`<CoreTypographyBody2>
    CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio
    tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam
    a magna rhoncus posuere quis eu sem. Donec nec convallis ipsum.
    Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna
    id finibus.
</CoreTypographyBody2>`}
        renderElement={
          <>
            <CoreTypographyBody2>
              CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio
              tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam
              a magna rhoncus posuere quis eu sem. Donec nec convallis ipsum.
              Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
              nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna
              id finibus.
            </CoreTypographyBody2>
          </>
        }
      />

      <CodeSample
        title={"limitChars"}
        description={"This is basic CoreTypographyBody2"}
        code={`<CoreTypographyBody2 limitChars={100}>
    CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio
    tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam
    a magna rhoncus posuere quis eu sem. Donec nec convallis ipsum.
    Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna
    id finibus.
</CoreTypographyBody2>`}
        renderElement={
          <>
            <CoreTypographyBody2 limitChars={100}>
              CoreTypographyBody2. Fusce mattis egestas risus, in euismod odio
              tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam
              a magna rhoncus posuere quis eu sem. Donec nec convallis ipsum.
              Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
              nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna
              id finibus.
            </CoreTypographyBody2>
          </>
        }
      />
      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
