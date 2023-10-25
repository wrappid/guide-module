import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographySubtitle2,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographySubtitle2Docs() {
  return (
    <>
      <CoreH4>{"CoreTypographySubtitle2"}</CoreH4>

      <CoreTypographySubtitle2>COMPONENT_DESCRIPTION</CoreTypographySubtitle2>

      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographySubtitle2>
    Basic CoreTypographySubtitle2 . Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle2>`}
        renderElement={
          <>
            <CoreTypographySubtitle2>
              Basic CoreTypographySubtitle2 . Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographySubtitle2>
          </>
        }
      />

      <CodeSample
        title={"Limit Characters"}
        description={
          'This is paragraph with Limit Characters. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographySubtitle2 limitChars="100">
    CoreTypographySubtitle2 with Limit Characters. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle2>`}
        renderElement={
          <CoreTypographySubtitle2 limitChars="100">
            CoreTypographySubtitle2 with Limit Characters. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographySubtitle2>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"Text field with differnt Alignment."}
        code={`<CoreTypographySubtitle2 align="left">
    CoreTypographySubtitle2 with alignment left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle2>
<CoreTypographySubtitle2 align="center">
    CoreTypographySubtitle2 with alignment center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle2>
<CoreTypographySubtitle2 align="right">
    CoreTypographySubtitle2 with alignment right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle2>
<CoreTypographySubtitle2 align="justify">
    CoreTypographySubtitle2 with alignment justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle2>
<CoreTypographySubtitle2 align="inherit">
    CoreTypographySubtitle2 with alignment inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographySubtitle2>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographySubtitle2 align="left">
              CoreTypographySubtitle2 with alignment left. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle2>

            <CoreTypographySubtitle2 align="center">
              CoreTypographySubtitle2 with alignment center. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle2>

            <CoreTypographySubtitle2 align="right">
              CoreTypographySubtitle2 with alignment right. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle2>

            <CoreTypographySubtitle2 align="justify">
              CoreTypographySubtitle2 with alignment justify. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle2>

            <CoreTypographySubtitle2 align="inherit">
              CoreTypographySubtitle2 with alignment inherit. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographySubtitle2>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Gutter Bottom "}
        description={"The text fields will have a bottom margin."}
        code={`<CoreTypographySubtitle2 gutterBottom={true}>
    CoreTypographySubtitle2 with bottom margin. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle2>`}
        renderElement={
          <CoreTypographySubtitle2 gutterBottom={true}>
            CoreTypographySubtitle2 with bottom margin. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographySubtitle2>
        }
      />

      <CodeSample
        title={"No Wrap "}
        description={"This is paragraph with noWrap. "}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreTypographySubtitle2 noWrap={false}>
      CoreTypographySubtitle2 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographySubtitle2>

  <CoreTypographySubtitle2 noWrap={true}>
      CoreTypographySubtitle2 with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographySubtitle2>
</CoreBox>
`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreTypographySubtitle2 noWrap={false}>
              CoreTypographySubtitle2 with noWrap. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
              nec convallis ipsum. Donec euismod, ex vel maximus tincidunt,
              lacus libero faucibus nulla, eu scelerisque nisi metus at mi.
              Phasellus luctus in magna id finibus.
            </CoreTypographySubtitle2>

            <CoreTypographySubtitle2 noWrap={true}>
              CoreTypographySubtitle2 with noWrap. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
              nec convallis ipsum. Donec euismod, ex vel maximus tincidunt,
              lacus libero faucibus nulla, eu scelerisque nisi metus at mi.
              Phasellus luctus in magna id finibus.
            </CoreTypographySubtitle2>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Hide SeeMore"}
        description={
          "hideSeemorre props only working with Hide SeeMore. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographySubtitle2 limitChars={100} hideSeeMore={true}>
    CoreTypographySubtitle2 with hide SeeMore. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographySubtitle2>`}
        renderElement={
          <CoreTypographySubtitle2 limitChars={100} hideSeeMore={true}>
            CoreTypographySubtitle2 with Hide SeeMore. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographySubtitle2>
        }
      />

      <ComponentProps component={CoreTypographySubtitle2} />
    </>
  );
}
