import * as React from "react";

interface Props {
  html: string;
}

const DangerousHtml = ({ html, ...props }: Props) => {
  function addHost(str: string, host: string) {
    const firstParse = str.replaceAll('src="/uploads', `src=\"${host}/uploads`);
    const secondParse = firstParse.replaceAll(
      'srcset="/uploads',
      'srcset="/uploads'
      //   `srcset=\"${host}/uploads`
    );
    return secondParse;
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: addHost(html, "http://localhost:1337"),
      }}
      {...props}
    />
  );
};

export default DangerousHtml;
