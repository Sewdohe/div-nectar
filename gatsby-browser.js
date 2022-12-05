import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { NextUIProvider } from '@nextui-org/react';
import { Toolbar } from './src/components/Toolbar'
import {darkTheme} from './src/styles/nextTheme'
import { components } from './src/components/mdxComponents'

export const wrapRootElement = ({ element }) => {
  return (
  <NextUIProvider theme={darkTheme}>
    <Toolbar />
    <MDXProvider components={components}>{element}</MDXProvider>;
  </NextUIProvider>
  )
};