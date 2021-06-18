import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import GreenBadge from '../../assets/GreenBadge';
import YellowBadge from '../../assets/YellowBadge';
import BadgeContainer from '../../components/BadgeContainer';
import Button from '../../components/Button';
import { Heading2, Text } from '../../components/Typography';
import {
  desktopAboutBadgePosition,
  mobileBadgePosition,
} from '../../constants/badgePositions';
import { largeBreakpoint } from '../../constants/designTokens';
import FoodStore from '../../FoodStore';
import RegionSelect from '../RegionSelect';
import { AboutContainer, RegionSelectContainer } from './styled';

interface AboutProps {
  foodStore: FoodStore;
}

export const About: React.FC<AboutProps> = observer(
  ({ foodStore }: AboutProps) => {
    const { formatMessage } = useIntl();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if (window.innerWidth < largeBreakpoint) {
        setIsMobile(true);
      }
    }, []);

    const badgePosition = isMobile
      ? mobileBadgePosition
      : desktopAboutBadgePosition;

    return (
      <AboutContainer>
        <Heading2>
          <FormattedMessage id="about.heading" />
        </Heading2>
        <Text>
          <FormattedMessage id="about.text" />
        </Text>
        <Button
          label={formatMessage({ id: 'about.feedback' })}
          type="link"
          onClick={() => {
            window.location.href = 'mailto:tobiassutterluety@gmail.com';
          }}
        />

        <BadgeContainer badge={<GreenBadge />} {...badgePosition.green} />
        <BadgeContainer badge={<YellowBadge />} {...badgePosition.yellow} />

        <RegionSelectContainer>
          <RegionSelect foodStore={foodStore} />
        </RegionSelectContainer>
      </AboutContainer>
    );
  }
);
