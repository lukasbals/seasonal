import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import GreenBadge from '../../assets/GreenBadge';
import Logo from '../../assets/Logo';
import YellowBadge from '../../assets/YellowBadge';
import BadgeContainer from '../../components/BadgeContainer';
import BottomDrawer from '../../components/BottomDrawer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Heading1, SubHeading } from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import { largeBreakpoint } from '../../constants/designTokens';
import FoodStore from '../../FoodStore';
import GridScreen from '../GridScreen';
import { MainScreenContainer } from './styled';

const desktopBadgePosition = {
  yellow: { top: window.innerHeight / 4, right: 0, rotate: 13 },
  green: { top: window.innerHeight / 2 + 150, left: -10, rotate: -13 },
};

const mobileBadgePosition = {
  yellow: { top: 0, left: -32, rotate: -27 },
  green: { right: -32, bottom: -110, rotate: -13 },
};

const foodStore = new FoodStore();

export const MainScreen: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const badgePosition =
    window.innerWidth < largeBreakpoint
      ? mobileBadgePosition
      : desktopBadgePosition;

  return (
    <>
      <Wrapper>
        <Header
          heading={
            <Logo
              onClick={() => {
                if (expanded) {
                  setExpanded(false);
                } else {
                  window.location.reload();
                }
              }}
            />
          }
          left={<Button label="Learn more" size="small" />}
          expanded={expanded}
        />
        <MainScreenContainer>
          <Heading1>
            <FormattedMessage id="mainScreen.heading" />
          </Heading1>
          <SubHeading>
            <FormattedMessage id="mainScreen.subHeading" />
          </SubHeading>
          <Button
            label={<FormattedMessage id="mainScreen.button" />}
            onClick={() => setExpanded(true)}
          />
        </MainScreenContainer>
        <BadgeContainer badge={<GreenBadge />} {...badgePosition.green} />
        <BadgeContainer badge={<YellowBadge />} {...badgePosition.yellow} />
      </Wrapper>

      <BottomDrawer expanded={expanded} onChange={setExpanded}>
        <GridScreen foodStore={foodStore} />
      </BottomDrawer>
    </>
  );
};
