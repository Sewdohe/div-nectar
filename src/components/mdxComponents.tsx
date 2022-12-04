import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";
import { Navbar, Text } from "@nextui-org/react";


export const components  = {
  pre: (props: { children: { props: { className: string; children: string; }; }; }) => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        // @ts-ignore
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
  h1: ({children}) => <Text  h1>{children}</Text>,
  h2: ({children}) => <Text h2>{children}</Text>,
  h3: ({children}) => <Text h3>{children}</Text>,
  h4: ({children}) => <Text h4>{children}</Text>,
  h5: ({children}) => <Text h5>{children}</Text>,
  h6: ({children}) => <Text h6>{children}</Text>,
  p: ({children}) => <Text size={'$lg'}>{children}</Text>
};