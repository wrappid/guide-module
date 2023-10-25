import { CoreH4, CoreTypographyBody1, CoreStack } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyBody1Docs() {
  return (
    <>
      <CoreH4>{`CoreTypographyBody1`}</CoreH4>
      <CoreTypographyBody1>COMPONENT_DESCRIPTION</CoreTypographyBody1>
      <CodeSample
        title={"Basic"}
        description={"This is simple paragraph text"}
        code={`<CoreTypographyBody1>
    CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <>
            <CoreTypographyBody1>
              CoreTypographyBody1 with limitChars. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec
              nec convallis ipsum. Donec euismod, ex vel maximus tincidunt,
              lacus libero faucibus nulla, eu scelerisque nisi metus at mi.
              Phasellus luctus in magna id finibus.
            </CoreTypographyBody1>
          </>
        }
      />

      <CodeSample
        title={"limitChars"}
        description={
          'This is paragraph with limitChars. To see full paragraph click on "See more"'
        }
        code={`<CoreTypographyBody1 limitChars="100">
    CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 limitChars="100">
            CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
            euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
            amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
            ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero
            faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus in
            magna id finibus.
          </CoreTypographyBody1>
        }
      />
      <CodeSample
        title={"align"}
        description={"Paragraph with differnt align."}
        code={`<CoreTypographyBody1 align="left">
    CoreTypographyBody1 with align left. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="center">
    CoreTypographyBody1 with align center. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="right">
    CoreTypographyBody1 with align right. Fusce mattis egestas risus,
    in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="justify">
    CoreTypographyBody1 with align justify. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>
<CoreTypographyBody1 align="inherit">
    CoreTypographyBody1 with align inherit. Fusce mattis egestas
    risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
    Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
</CoreTypographyBody1>`}
        renderElement={
          <CoreStack direction="column" spacing={2}>
            <CoreTypographyBody1 align="left">
              CoreTypographyBody1 with align left. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>
            <CoreTypographyBody1 align="center">
              CoreTypographyBody1 with align center. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>
            <CoreTypographyBody1 align="right">
              CoreTypographyBody1 with align right. Fusce mattis egestas risus,
              in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>
            <CoreTypographyBody1 align="justify">
              CoreTypographyBody1 with align justify. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>
            <CoreTypographyBody1 align="inherit">
              CoreTypographyBody1 with align inherit. Fusce mattis egestas
              risus, in euismod odio tincidunt in. Maecenas ut ultricies quam.
              Curabitur sit amet diam a magna rhoncus posuere quis eu sem.
            </CoreTypographyBody1>
          </CoreStack>
        }
      />

      <CodeSample
        title={"gutterBottom"}
        description={"This is paragraph with gutterBottom. "}
        code={`<CoreTypographyBody1 gutterBottom={true}>
    CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 gutterBottom={true}>
            CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
            euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
            amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
            ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero
            faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus in
            magna id finibus.
          </CoreTypographyBody1>
        }
      />

      <CodeSample
        title={"noWrap"}
        description={"This is paragraph with noWrap. "}
        code={`<CoreTypographyBody1 noWrap={false}>
    CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 noWrap={false}>
            CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
            euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
            amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
            ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero
            faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus in
            magna id finibus.
          </CoreTypographyBody1>
        }
      />

      <CodeSample
        title={"hideSeeMore"}
        description={
          "hideSeemorre props only working with limitChars. If hideSeeMore 'true' it will hide See More "
        }
        code={`<CoreTypographyBody1 limitChars={100} hideSeeMore={true}>
    CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
    euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
    amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
    ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus
    nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id
    finibus.
</CoreTypographyBody1>`}
        renderElement={
          <CoreTypographyBody1 limitChars={100} hideSeeMore={true}>
            CoreTypographyBody1 with limitChars. Fusce mattis egestas risus, in
            euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit
            amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis
            ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero
            faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus in
            magna id finibus.
          </CoreTypographyBody1>
        }
      />

      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
