import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographySubtitle1,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographySubtitle1Docs() {
  return (
    <>
      <CoreH4>{"CoreTypographySubtitle1"}</CoreH4>

      <CoreTypographySubtitle1>COMPONENT_DESCRIPTION</CoreTypographySubtitle1>

      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographySubtitle1>
    Basic CoreTypographySubtitle1 . Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle1>`}
        renderElement={
          <>
            <CoreTypographySubtitle1>
              Basic CoreTypographySubtitle1 . Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographySubtitle1>
          </>
        }
      />

      <CodeSample
        title={"Limit Characters"}
        description={
          'This is paragraph with Limit Characters. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographySubtitle1 limitChars="100">
    CoreTypographySubtitle1 with Limit Characters. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle1>`}
        renderElement={
          <CoreTypographySubtitle1 limitChars="100">
            CoreTypographySubtitle1 with Limit Characters. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographySubtitle1>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"Text field with differnt Alignment."}
        code={`<CoreTypographySubtitle1 align="left">
    CoreTypographySubtitle1 with alignment left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle1>
<CoreTypographySubtitle1 align="center">
    CoreTypographySubtitle1 with alignment center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle1>
<CoreTypographySubtitle1 align="right">
    CoreTypographySubtitle1 with alignment right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle1>
<CoreTypographySubtitle1 align="justify">
    CoreTypographySubtitle1 with alignment justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle1>
<CoreTypographySubtitle1 align="inherit">
    CoreTypographySubtitle1 with alignment inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle1>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographySubtitle1 align="left">
              CoreTypographySubtitle1 with alignment left. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle1>

            <CoreTypographySubtitle1 align="center">
              CoreTypographySubtitle1 with alignment center. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle1>

            <CoreTypographySubtitle1 align="right">
              CoreTypographySubtitle1 with alignment right. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle1>

            <CoreTypographySubtitle1 align="justify">
              CoreTypographySubtitle1 with alignment justify. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle1>

            <CoreTypographySubtitle1 align="inherit">
              CoreTypographySubtitle1 with alignment inherit. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle1>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Gutter Bottom "}
        description={"The text fields will have a bottom margin."}
        code={`<CoreTypographySubtitle1 gutterBottom={true}>
    CoreTypographySubtitle1 with bottom margin. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle1>`}
        renderElement={
          <CoreTypographySubtitle1 gutterBottom={true}>
            CoreTypographySubtitle1 with bottom margin. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographySubtitle1>
        }
      />

      <CodeSample
        title={"No Wrap "}
        description={"This is paragraph with noWrap. "}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreTypographySubtitle1 noWrap={false}>
      CoreTypographySubtitle1 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographySubtitle1>

  <CoreTypographySubtitle1 noWrap={true}>
      CoreTypographySubtitle1 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographySubtitle1>
</CoreBox>
`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreTypographySubtitle1 noWrap={false}>
              CoreTypographySubtitle1 with noWrap. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
              nec convallis ipsum. Donec euismod, ex vel maximus tincidunt,
              lacus libero faucibus nulla, eu scelerisque nisi metus at mi.
              Phasellus luctus in magna id finibus.
            </CoreTypographySubtitle1>

            <CoreTypographySubtitle1 noWrap={true}>
              CoreTypographySubtitle1 with noWrap. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
              nec convallis ipsum. Donec euismod, ex vel maximus tincidunt,
              lacus libero faucibus nulla, eu scelerisque nisi metus at mi.
              Phasellus luctus in magna id finibus.
            </CoreTypographySubtitle1>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Hide SeeMore"}
        description={
          "hideSeemorre props only working with Hide SeeMore. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographySubtitle1 limitChars={100} hideSeeMore={true}>
    CoreTypographySubtitle1 with hide SeeMore. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle1>`}
        renderElement={
          <CoreTypographySubtitle1 limitChars={100} hideSeeMore={true}>
            CoreTypographySubtitle1 with Hide SeeMore. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographySubtitle1>
        }
      />

      <ComponentProps component={CoreTypographySubtitle1} />
    </>
  );
}
