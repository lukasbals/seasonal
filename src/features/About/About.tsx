import React from 'react';
import { FormattedMessage } from 'react-intl';
import GreenBadge from '../../assets/GreenBadge';
import YellowBadge from '../../assets/YellowBadge';
import BadgeContainer from '../../components/BadgeContainer';
import Button from '../../components/Button';
import { Heading2, Text } from '../../components/Typography';
import { AboutContainer } from './styled';

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <Heading2>
        <FormattedMessage id="about.heading" />
      </Heading2>
      <Text>
        <FormattedMessage id="about.text" />
      </Text>
      <Button
        label={<FormattedMessage id="about.feedback" />}
        type="link"
        onClick={() => {
          window.location.href = 'mailto:tobiassutterluety@gmail.com';
        }}
      />

      <BadgeContainer
        badge={<GreenBadge />}
        bottom={-118 - 165}
        right={0}
        rotate={-13}
      />
      <BadgeContainer
        badge={<YellowBadge />}
        bottom={-165 - 165}
        left={0}
        rotate={13}
      />
    </AboutContainer>
  );
};
