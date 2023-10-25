import {
  CoreH4,
  CoreTypographyBody1,
  CoreStack,
  CoreBox,
  CoreClasses,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyBody1Docs() {
  return (
    <>
      <CoreH4>{"CoreTypographyBody1"}</CoreH4>

      <CoreTypographyBody1>COMPONENT_DESCRIPTION</CoreTypographyBody1>

      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographyBody1>
    Basic CoreTypographyBody1 . Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <>
            <CoreTypographyBody1>
              Basic CoreTypographyBody1 . Fusce mattis egestas risus, in euismod
              odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet
              diam a magna rhoncus posuere quis eu sem. Donec nec convallis
              ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero
              faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus
              in magna id finibus.
            </CoreTypographyBody1>
          </>
        }
      />

      <CodeSample
        title={"Limit Characters"}
        description={
          'This is paragraph with Limit Characters. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographyBody1 limitChars="100">
    CoreTypographyBody1 with Limit Characters. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 limitChars="100">
            CoreTypographyBody1 with Limit Characters. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyBody1>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"Text field with differnt Alignment."}
        code={`<CoreTypographyBody1 align="left">
    CoreTypographyBody1 with alignment left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="center">
    CoreTypographyBody1 with alignment center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="right">
    CoreTypographyBody1 with alignment right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="justify">
    CoreTypographyBody1 with alignment justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="inherit">
    CoreTypographyBody1 with alignment inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyBody1 align="left">
              CoreTypographyBody1 with alignment left. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>

            <CoreTypographyBody1 align="center">
              CoreTypographyBody1 with alignment center. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>

            <CoreTypographyBody1 align="right">
              CoreTypographyBody1 with alignment right. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>

            <CoreTypographyBody1 align="justify">
              CoreTypographyBody1 with alignment justify. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>

            <CoreTypographyBody1 align="inherit">
              CoreTypographyBody1 with alignment inherit. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The text fields will have a bottom margin."}
        code={`<CoreTypographyBody1 gutterBottom={true}>
    CoreTypographyBody1 with bottom margin. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 gutterBottom={true}>
            CoreTypographyBody1 with bottom margin. Fusce mattis egestas risus,
            in euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
            sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
            convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyBody1>
        }
      />

      <CodeSample
        title={"No Wrap"}
        description={"This is paragraph with noWrap. "}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreTypographyBody1 noWrap={false}>
      CoreTypographyBody1 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyBody1>

  <CoreTypographyBody1 noWrap={true}>
      CoreTypographyBody1 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyBody1>
</CoreBox>
`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreTypographyBody1 noWrap={false}>
              CoreTypographyBody1 with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyBody1>

            <CoreTypographyBody1 noWrap={true}>
              CoreTypographyBody1 with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyBody1>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Hide SeeMore"}
        description={
          "hideSeemorre props only working with Hide SeeMore. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographyBody1 limitChars={100} hideSeeMore={true}>
    CoreTypographyBody1 with hide SeeMore. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 limitChars={100} hideSeeMore={true}>
            CoreTypographyBody1 with Hide SeeMore. Fusce mattis egestas risus,
            in euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
            sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
            convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyBody1>
        }
      />

      <ComponentProps component={CoreTypographyBody1} />
    </>
  );
}
