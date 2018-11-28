import React from 'react';
import styled, { css } from 'styled-components';


const List = styled.ul`
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  li {
    background: #ffffff;
    border: solid thin #bbb;
    border-bottom: 0;
    padding: 10px 20px;
    &:last-of-type{
      border-bottom: solid thin #bbb;
    }
  }
`;

export default List;
