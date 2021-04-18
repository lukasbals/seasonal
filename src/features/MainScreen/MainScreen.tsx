import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import GreenBadge from '../../assets/GreenBadge';
import Logo from '../../assets/Logo';
import YellowBadge from '../../assets/YellowBadge';
import BadgeContainer from '../../components/BadgeContainer';
import BottomDrawer from '../../components/BottomDrawer';
import Button from '../../components/Button';
import Header from '../../components/Header';
import MonthSelect from '../../components/MonthSelect';
import { Heading1, SubHeading } from '../../components/Typography';
import Wrapper from '../../components/Wrapper';
import { MainScreenContainer } from './styled';

export const MainScreen: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

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

        <BadgeContainer
          top={window.innerHeight / 2 + 150}
          left={-10}
          rotate={-13}
          badge={<GreenBadge />}
        />
        <BadgeContainer
          top={window.innerHeight / 4}
          right={0}
          rotate={13}
          badge={<YellowBadge />}
        />
      </Wrapper>
      <BottomDrawer expanded={expanded} onChange={setExpanded}>
        <MonthSelect
          onSelect={(month: string) => {
            console.log('select', month);
          }}
        />
      </BottomDrawer>
    </>
  );
};
