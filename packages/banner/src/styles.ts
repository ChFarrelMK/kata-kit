import { css } from 'styled-components';
import { variables } from '@kata-kit/theme';

const BannerBase = () => css`
  display: flex;
  align-items: center;
  min-height: 38px;
  font-size: ${variables.fontSizes.deka};
  line-height: ${variables.lineHeights.deka};
  padding: 8px;
  border-radius: 4px;
`;

export default BannerBase;
