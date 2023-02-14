import styled, { css } from '../../utils/styledWrapper.js';
import { LinkProps } from './types';

export const LinkStyle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  ${(props: LinkProps) =>
    props.fadeVisited &&
    css`
      :visited {
        color: ${({ theme }) => theme.colors.primaryVisited};
      }
    `}
`;
