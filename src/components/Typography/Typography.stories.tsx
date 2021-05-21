import React from 'react';
import { Meta } from '@storybook/react';
import { Heading1, Heading2, SubHeading, Text } from '.';

export default {
  title: 'Typography',
} as Meta;

export const heading1: React.FC = () => <Heading1>Heading 1</Heading1>;
export const heading2: React.FC = () => <Heading2>Heading 2</Heading2>;
export const subHeading: React.FC = () => <SubHeading>Sub heading</SubHeading>;
export const text: React.FC = () => <Text>Text</Text>;
