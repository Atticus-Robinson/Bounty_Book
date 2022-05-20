import React, { useState } from "react";
import styled from "styled-components";

const Section = styled("div")`
  display: flex;
`;

const DropDownContainer = styled("div")``;

const DropDownHeader = styled("div")``;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  paddingleft: 2em;
  background: transparent;
  box-sizing: border-box;
  color: slategray;
  font-size: 1.3rem;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  font-weight: 700;
  margin-bottom: 0.8em;
`;

const options = ["Location", "Price Range"];

const HunterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <nav>
      <Section>
        <DropDownContainer>
          <DropDownHeader className="hunter-title" onClick={toggling}>
            {selectedOption || "Find a Hunter"}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer className="hunter-container">
              <DropDownList>
                {options.map((option) => (
                  <ListItem
                    className="hunter-list-options"
                    onClick={onOptionClicked(option)}
                    key={Math.random()}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Section>
    </nav>
  );
};

export default HunterMenu;
