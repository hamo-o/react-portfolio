import thumbnail from '../../public/images/thumbnail.png';

export default function Head() {
  return (
    <head>
      <title>HAM</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="FE 개발자 HAM 이현영입니다." />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="HAM" />
      <meta property="og:description" content="FE 개발자 HAM 이현영입니다." />
      <meta
        property="og:image"
        content="https://www.hamo-o.com/images/thumbnail.png"
      />
      <meta property="og:url" content="https://www.hamo-o.com/" />

      <meta name="twitter:title" content="HAM" />
      <meta name="twitter:description" content="FE 개발자 HAM 이현영입니다." />
      <meta
        name="twitter:image"
        content="https://www.hamo-o.com/images/thumbnail.png"
      />
      <meta name="twitter:domain" content="https://www.hamo-o.com/" />

      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/nats" />
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
      />
      <link href="https://fonts.cdnfonts.com/css/zen-dots" rel="stylesheet" />
    </head>
  );
}
