import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper.component';

const Section1Styled = styled.div`background-color: red;`;

export default function Section1() {
  return (
    <Section1Styled>
      <Wrapper>
        <h1>Section 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat blanditiis adipisci eaque animi repellat
          atque assumenda corporis quidem nostrum ea, nulla qui cupiditate suscipit, quisquam voluptas mollitia ex iusto
          voluptates.
        </p>
      </Wrapper>
    </Section1Styled>
  );
}
