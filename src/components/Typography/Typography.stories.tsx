import React from 'react';
import { Meta } from '@storybook/react';
import { Heading1, SubHeading } from '.';

export default {
  title: 'Typography',
} as Meta;

export const heading1: React.FC = () => <Heading1>Heading 1</Heading1>;
export const subHeading: React.FC = () => <SubHeading>Sub heading</SubHeading>;
