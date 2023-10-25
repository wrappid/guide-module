import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyCaption,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyCaptionDocs() {
  return (
    <>
      <CoreH4>{"CoreTypographyCaption"}</CoreH4>

      <CoreTypographyCaption>COMPONENT_DESCRIPTION</CoreTypographyCaption>

      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographyCaption>
    Basic CoreTypographyCaption . Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyCaption>`}
        renderElement={
          <>
            <CoreTypographyCaption>
              Basic CoreTypographyCaption . Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyCaption>
          </>
        }
      />

      <CodeSample
        title={"Limit Characters"}
        description={
          'This is paragraph with Limit Characters. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographyCaption limitChars="100">
    CoreTypographyCaption with Limit Characters. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyCaption>`}
        renderElement={
          <CoreTypographyCaption limitChars="100">
            CoreTypographyCaption with Limit Characters. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyCaption>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"Text field with differnt Alignment."}
        code={`<CoreTypographyCaption align="left">
    CoreTypographyCaption with alignment left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyCaption>
<CoreTypographyCaption align="center">
    CoreTypographyCaption with alignment center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyCaption>
<CoreTypographyCaption align="right">
    CoreTypographyCaption with alignment right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyCaption>
<CoreTypographyCaption align="justify">
    CoreTypographyCaption with alignment justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyCaption>
<CoreTypographyCaption align="inherit">
    CoreTypographyCaption with alignment inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyCaption>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyCaption align="left">
              CoreTypographyCaption with alignment left. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyCaption>

            <CoreTypographyCaption align="center">
              CoreTypographyCaption with alignment center. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyCaption>

            <CoreTypographyCaption align="right">
              CoreTypographyCaption with alignment right. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyCaption>

            <CoreTypographyCaption align="justify">
              CoreTypographyCaption with alignment justify. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyCaption>

            <CoreTypographyCaption align="inherit">
              CoreTypographyCaption with alignment inherit. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyCaption>
          </CoreStack>
        }
      />

      <CodeSample
        title={"Gutter Bottom "}
        description={"The text fields will have a bottom margin."}
        code={`<CoreTypographyCaption gutterBottom={true}>
    CoreTypographyCaption with bottom margin. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyCaption>`}
        renderElement={
          <CoreTypographyCaption gutterBottom={true}>
            CoreTypographyCaption with bottom margin. Fusce mattis egestas
            risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
            Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
            nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyCaption>
        }
      />

      <CodeSample
        title={"No Wrap "}
        description={"This is paragraph with noWrap. "}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreTypographyCaption noWrap={false}>
      CoreTypographyCaption with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyCaption>

  <CoreTypographyCaption noWrap={true}>
      CoreTypographyCaption with noWrap. Fusce mattis egestas risus, in
      euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
      sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
      convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
      libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
      luctus in magna id finibus.
  </CoreTypographyCaption>
</CoreBox>
`}
        renderElement={
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
            <CoreTypographyCaption noWrap={false}>
              CoreTypographyCaption with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyCaption>

            <CoreTypographyCaption noWrap={true}>
              CoreTypographyCaption with noWrap. Fusce mattis egestas risus, in
              euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
              sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
              convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
              libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
              luctus in magna id finibus.
            </CoreTypographyCaption>
          </CoreBox>
        }
      />

      <CodeSample
        title={"Hide SeeMore"}
        description={
          "hideSeemorre props only working with Hide SeeMore. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographyCaption limitChars={100} hideSeeMore={true}>
    CoreTypographyCaption with hide SeeMore. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyCaption>`}
        renderElement={
          <CoreTypographyCaption limitChars={100} hideSeeMore={true}>
            CoreTypographyCaption with Hide SeeMore. Fusce mattis egestas risus,
            in euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur
            sit amet diam a magna rhoncus posuere quis eu sem. Donec nec
            convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus
            libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus
            luctus in magna id finibus.
          </CoreTypographyCaption>
        }
      />

      <ComponentProps component={CoreTypographyCaption} />
    </>
  );
}
