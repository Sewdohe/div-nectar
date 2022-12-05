import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";
import synthwave from "prism-react-renderer/themes/synthwave84";
import React from "react";
import { Card, Col, Row, Text } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";

interface Props {
  children: JSX.Element[];
}

export const components = {
  pre: (props: {
    children: { props: { className: string; children: string } };
  }) => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    const language =
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : "";

    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        theme={synthwave}
        // @ts-ignore
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Card style={style} css={{ maxWidth: "80%", margin: "2rem auto" }}>
            <Card.Header
              css={{
                position: "absolute",
                zIndex: 1,
                top: 5,
                textAlign: "center",
              }}
            >
              <Row>
                <Text transform="uppercase" color="secondary">
                  {language}
                </Text>
              </Row>
            </Card.Header>
            <Card.Body>
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            </Card.Body>
          </Card>
        )}
      </Highlight>
    );
  },
  h1: ({ children }: Props) => {
    const theme = useTheme()
    return (
      <Text color={theme.theme?.colors.pink500.value} h1>
        {children}
      </Text>
    );
  },
  h2: ({ children }: Props) => <Text h2>{children}</Text>,
  h3: ({ children }: Props) => <Text h3>{children}</Text>,
  h4: ({ children }: Props) => <Text h4>{children}</Text>,
  h5: ({ children }: Props) => <Text h5>{children}</Text>,
  h6: ({ children }: Props) => <Text h6>{children}</Text>,
  p: ({ children }: Props) => <Text size={"$lg"}>{children}</Text>,
};
