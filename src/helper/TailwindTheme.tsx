/* eslint-disable  @typescript-eslint/no-explicit-any */

import resolveConfig from 'tailwindcss/resolveConfig';
import myConfig from '../../tailwind.config';

const tailwindConfig = resolveConfig(myConfig) as any;

const tailwind_colors = tailwindConfig.theme!.colors;

export const TailwindColors = {
  black_10: tailwind_colors['black_10'],
  blue_10: tailwind_colors['blue_10'],
  white_10: tailwind_colors['white_10'],
  yellow_10: tailwind_colors['yellow_10'],
};
