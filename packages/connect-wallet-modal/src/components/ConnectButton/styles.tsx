import styled, { css } from '@reef-knot/ui-react/styled-wrapper';
import { Button } from '@reef-knot/ui-react';

export const ConnectButtonStyle = styled(Button).attrs({
  variant: 'ghost',
  square: true,
})`
  ${({ theme: { fontSizesMap, colors } }) => css`
    box-sizing: content-box;
    text-align: center;
    font-weight: 400;
    font-size: ${fontSizesMap.xxs}px;
    padding: 0;
    margin: 0;
    background: ${colors.background};
  `}
`;

export const ConnectButtonContentStyle = styled.span`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
    color: ${colors.text};
  `}
`;

export const ConnectButtonTitleStyle = styled.div`
  ${({ theme: { colors } }) => css`
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    color: ${colors.text};
    line-height: 20px;
  `}
`;

export const ConnectButtonIconStyle = styled.span`
  display: flex;
  margin-bottom: 8px;

  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
