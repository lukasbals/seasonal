import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Burger from '../../assets/Burger';
import Close from '../../assets/Close';
import GreenBadge from '../../assets/GreenBadge';
import Info from '../../assets/Info';
import Logo from '../../assets/Logo';
import YellowBadge from '../../assets/YellowBadge';
import BadgeContainer from '../../components/BadgeContainer';
import BottomDrawer from '../../components/BottomDrawer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import SideDrawer from '../../components/SideDrawer';
import { Heading1, SubHeading } from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import {
  desktopMainScreenBadgePosition,
  mobileBadgePosition,
} from '../../constants/badgePositions';
import { largeBreakpoint } from '../../constants/designTokens';
import { LOCAL_STORAGE_DRAWER_EXPANDED_STATE } from '../../constants/localStorageKeys';
import FoodStore from '../../FoodStore';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from '../../utils/localStorage';
import About from '../About';
import GridScreen from '../GridScreen';
import RegionSelect from '../RegionSelect';
import { FixedContainer, MainScreenContainer } from './styled';

const foodStore = new FoodStore();
const initialDrawerState =
  getItemFromLocalStorage(LOCAL_STORAGE_DRAWER_EXPANDED_STATE) === 'true'
    ? true
    : false;

export const MainScreen: React.FC = () => {
  const [calendarExpanded, setCalendarExpanded] = useState<boolean>();
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const setExpandedState = (state: boolean): void => {
    setCalendarExpanded(state);
    saveItemInLocalStorage(
      LOCAL_STORAGE_DRAWER_EXPANDED_STATE,
      state ? 'true' : 'false'
    );
  };

  useEffect(() => {
    if (window.innerWidth < largeBreakpoint) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    setCalendarExpanded(initialDrawerState);
  }, []);

  const badgePosition = isMobile
    ? mobileBadgePosition
    : desktopMainScreenBadgePosition;

  return (
    <>
      <FixedContainer>
        <Wrapper>
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
      </FixedContainer>

      {/* Wait until the calendarExpanded state is set */}
      {calendarExpanded !== undefined && (
        <BottomDrawer expanded={calendarExpanded} onChange={setExpandedState}>
          <GridScreen foodStore={foodStore} />
        </BottomDrawer>
      )}

      <FixedContainer>
        <Wrapper>
          <Header
            heading={
              <Logo
                onClick={() => {
                  if (calendarExpanded) {
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
                onClick={() => setAboutExpanded(true)}
              />
            }
            right={<RegionSelect foodStore={foodStore} />}
            expanded={calendarExpanded}
            mobileIcon={<Burger />}
            onMobileIconClick={() => setAboutExpanded(true)}
          />
        </Wrapper>
      </FixedContainer>

      <SideDrawer expanded={aboutExpanded} onChange={setAboutExpanded}>
        <>
          {isMobile && (
            <Header
              heading={<Logo onClick={() => setAboutExpanded(false)} />}
              mobileIcon={<Close />}
              onMobileIconClick={() => setAboutExpanded(false)}
              expanded={calendarExpanded}
            />
          )}
          <About foodStore={foodStore} />
        </>
      </SideDrawer>
    </>
  );
};
