import React from 'react';
import { styled } from "@mui/system";
import Tabs from "@mui/base/Tabs";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import Tab, { tabClasses } from "@mui/base/Tab";
import Homepage from './Homepage';

const StyledTab = styled(Tab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #212121;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    color: #84ffff;
    outline: 3px solid e3f2fd;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: eceff1;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  border-radius: 12px;
  opacity: 0.6;
  `
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 200px;
  background-color: #e0e0e0 ;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
  `
);

function Menu() {
  return (
    <Tabs defaultValue={0}>
    <StyledTabsList>
      <StyledTab value={0}>Home</StyledTab>
      <StyledTab value={1}>Classifieds</StyledTab>
      <StyledTab value={2}>Contact</StyledTab>
    </StyledTabsList>
    <StyledTabPanel value={0}>
        <Homepage/>
    </StyledTabPanel>
    <StyledTabPanel value={1}>Classifieds page</StyledTabPanel>
    <StyledTabPanel value={2}>Contact page</StyledTabPanel>
  </Tabs>
  )
}

export default Menu;