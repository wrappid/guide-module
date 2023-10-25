import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody2,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyBody2Docs() {
  return (
    <>
      <CoreH4>{"CoreTypographyBody2"}</CoreH4>

      <CoreTypographyBody2>COMPONENT_DESCRIPTION</CoreTypographyBody2>

      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographyBody2>
    Basic CoreTypographyBody2 . Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody2>`}
        renderElement={
          <>
            <CoreTypographyBody2>
              Basic CoreTypographyBody2 . Fusce mattis egestas risus, in euismod
              odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet
              diam a magna rhoncus posuere quis eu sem. Donec nec convallis
              ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero
              faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus
              in magna id finibus.
            </CoreTypographyBody2>
          </>
        }
      />

      <CodeSample
        title={"Limit Characters"}
        description={
          'This is paragraph with Limit Characters. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographyBody2 limitChars="100">
    CoreTypographyBody2 with Limit Characters. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody2>`}
        renderElement={
          <CoreTypographyBody2 limitChars="100">
            CoreTypographyBody2 with Limit Characters. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyBody2>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"Text field with differnt Alignment."}
        code={`<CoreTypographyBody2 align="left">
    CoreTypographyBody2 with alignment left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody2>
<CoreTypographyBody2 align="center">
    CoreTypographyBody2 with alignment center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody2>
<CoreTypographyBody2 align="right">
    CoreTypographyBody2 with alignment right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody2>
<CoreTypographyBody2 align="justify">
    CoreTypographyBody2 with alignment justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody2>
<CoreTypographyBody2 align="inherit">
    CoreTypographyBody2 with alignment inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody2>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyBody2 align="left">
              CoreTypographyBody2 with alignment left. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody2>

            <CoreTypographyBody2 align="center">
              CoreTypographyBody2 with alignment center. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody2>

            <CoreTypographyBody2 align="right">
              CoreTypographyBody2 with alignment right. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody2>

            <CoreTypographyBody2 align="justify">
              CoreTypographyBody2 with alignment justify. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody2>

            <CoreTypographyBody2 align="inherit">
              CoreTypographyBody2 with alignment inherit. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody2>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Gutter Bottom "}
        description={"The text fields will have a bottom margin."}
        code={`<CoreTypographyBody2 gutterBottom={true}>
    CoreTypographyBody2 with bottom margin. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody2>`}
        renderElement={
          <CoreTypographyBody2 gutterBottom={true}>
            CoreTypographyBody2 with bottom margin. Fusce mattis egestas risus,
            in euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
            sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
            convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyBody2>
        }
      />

      <CodeSample
        title={"No Wrap "}
        description={"This is paragraph with noWrap. "}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreTypographyBody2 noWrap={false}>
      CoreTypographyBody2 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyBody2>

  <CoreTypographyBody2 noWrap={true}>
      CoreTypographyBody2 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyBody2>
</CoreBox>
`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreTypographyBody2 noWrap={false}>
              CoreTypographyBody2 with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyBody2>

            <CoreTypographyBody2 noWrap={true}>
              CoreTypographyBody2 with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyBody2>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Hide SeeMore"}
        description={
          "hideSeemorre props only working with Hide SeeMore. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographyBody2 limitChars={100} hideSeeMore={true}>
    CoreTypographyBody2 with hide SeeMore. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody2>`}
        renderElement={
          <CoreTypographyBody2 limitChars={100} hideSeeMore={true}>
            CoreTypographyBody2 with Hide SeeMore. Fusce mattis egestas risus,
            in euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
            sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
            convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyBody2>
        }
      />

      <ComponentProps component={CoreTypographyBody2} />
    </>
  );
}
