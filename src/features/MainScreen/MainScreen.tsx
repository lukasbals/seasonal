import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import GreenBadge from '../../assets/GreenBadge';
import Info from '../../assets/Info';
import Logo from '../../assets/Logo';
import YellowBadge from '../../assets/YellowBadge';
import BadgeContainer from '../../components/BadgeContainer';
import BottomDrawer from '../../components/BottomDrawer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Heading1, SubHeading } from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import { largeBreakpoint } from '../../constants/designTokens';
import { LOCAL_STORAGE_DRAWER_EXPANDED_STATE } from '../../constants/localStorageKeys';
import FoodStore from '../../FoodStore';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from '../../utils/localStorage';
import GridScreen from '../GridScreen';
import { MainScreenContainer } from './styled';

const desktopBadgePosition = {
  yellow: { top: window.innerHeight / 4, right: 0, rotate: 13 },
  green: { top: window.innerHeight / 2 + 150, left: -10, rotate: -13 },
};

const mobileBadgePosition = {
  yellow: { top: 0, left: -32, rotate: -27 },
  green: { right: -32, bottom: 48, rotate: -13 },
};

const foodStore = new FoodStore();
const initialDrawerState =
  getItemFromLocalStorage(LOCAL_STORAGE_DRAWER_EXPANDED_STATE) === 'true'
    ? true
    : false;

export const MainScreen: React.FC = () => {
  const [expanded, setExpanded] = useState(initialDrawerState);

  const setExpandedState = (state: boolean): void => {
    setExpanded(state);
    saveItemInLocalStorage(
      LOCAL_STORAGE_DRAWER_EXPANDED_STATE,
      state ? 'true' : 'false'
    );
  };

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
                  setExpandedState(false);
                } else {
                  window.location.reload();
                }
              }}
            />
          }
          left={
            <Button
              label={<FormattedMessage id="mainScreen.about" />}
              size="small"
              icon={<Info />}
            />
          }
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
            onClick={() => setExpandedState(true)}
          />
        </MainScreenContainer>
        <BadgeContainer badge={<GreenBadge />} {...badgePosition.green} />
        <BadgeContainer badge={<YellowBadge />} {...badgePosition.yellow} />
      </Wrapper>

      <BottomDrawer expanded={expanded} onChange={setExpandedState}>
        <GridScreen foodStore={foodStore} />
      </BottomDrawer>
    </>
  );
};
