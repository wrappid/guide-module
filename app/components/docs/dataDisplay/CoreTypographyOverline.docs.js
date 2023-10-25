import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyOverline,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyOverlineDocs() {
  return (
    <>
      <CoreH4>{"CoreTypographyOverline"}</CoreH4>

      <CoreTypographyOverline>COMPONENT_DESCRIPTION</CoreTypographyOverline>

      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographyOverline>
    Basic CoreTypographyOverline . Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyOverline>`}
        renderElement={
          <>
            <CoreTypographyOverline>
              Basic CoreTypographyOverline . Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyOverline>
          </>
        }
      />

      <CodeSample
        title={"Limit Characters"}
        description={
          'This is paragraph with Limit Characters. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographyOverline limitChars="100">
    CoreTypographyOverline with Limit Characters. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyOverline>`}
        renderElement={
          <CoreTypographyOverline limitChars="100">
            CoreTypographyOverline with Limit Characters. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyOverline>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"Text field with differnt Alignment."}
        code={`<CoreTypographyOverline align="left">
    CoreTypographyOverline with alignment left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyOverline>
<CoreTypographyOverline align="center">
    CoreTypographyOverline with alignment center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyOverline>
<CoreTypographyOverline align="right">
    CoreTypographyOverline with alignment right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyOverline>
<CoreTypographyOverline align="justify">
    CoreTypographyOverline with alignment justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyOverline>
<CoreTypographyOverline align="inherit">
    CoreTypographyOverline with alignment inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyOverline>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyOverline align="left">
              CoreTypographyOverline with alignment left. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyOverline>

            <CoreTypographyOverline align="center">
              CoreTypographyOverline with alignment center. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyOverline>

            <CoreTypographyOverline align="right">
              CoreTypographyOverline with alignment right. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyOverline>

            <CoreTypographyOverline align="justify">
              CoreTypographyOverline with alignment justify. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyOverline>

            <CoreTypographyOverline align="inherit">
              CoreTypographyOverline with alignment inherit. Fusce mattis
              egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies
              quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyOverline>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Gutter Bottom "}
        description={"The text fields will have a bottom margin."}
        code={`<CoreTypographyOverline gutterBottom={true}>
    CoreTypographyOverline with bottom margin. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyOverline>`}
        renderElement={
          <CoreTypographyOverline gutterBottom={true}>
            CoreTypographyOverline with bottom margin. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyOverline>
        }
      />

      <CodeSample
        title={"No Wrap "}
        description={"This is paragraph with noWrap. "}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreTypographyOverline noWrap={false}>
      CoreTypographyOverline with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyOverline>

  <CoreTypographyOverline noWrap={true}>
      CoreTypographyOverline with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyOverline>
</CoreBox>
`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreTypographyOverline noWrap={false}>
              CoreTypographyOverline with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyOverline>

            <CoreTypographyOverline noWrap={true}>
              CoreTypographyOverline with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyOverline>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Hide SeeMore"}
        description={
          "hideSeemorre props only working with Hide SeeMore. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographyOverline limitChars={100} hideSeeMore={true}>
    CoreTypographyOverline with hide SeeMore. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyOverline>`}
        renderElement={
          <CoreTypographyOverline limitChars={100} hideSeeMore={true}>
            CoreTypographyOverline with Hide SeeMore. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyOverline>
        }
      />

      <ComponentProps component={CoreTypographyOverline} />
    </>
  );
}
