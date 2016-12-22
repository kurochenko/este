/* @flow */
import type { State } from '../../common/types';
import * as themes from '../app/themes';
import compose from 'ramda/src/compose';
import React from 'react';
import { Box, Button, Heading } from '../app/components';
import { connect } from 'react-redux';
import { setTheme } from '../../common/themes/actions';

type SwitchThemeProps = {
  currentTheme: string,
  setTheme: typeof setTheme,
};

const themesNames = [
  'defaultTheme',
  ...Object
    .keys(themes)
    .filter(key => key !== 'defaultTheme')
    .sort(),
];

const SwitchTheme = ({ currentTheme, setTheme }: SwitchThemeProps) => (
  <Box marginBottom={1.5}>
    <Heading marginBottom={0.5}>
      Switch Theme
    </Heading>
    <Box marginHorizontal={-0.25}>
      {themesNames.map(themeName => (
        <Button
          disabled={themeName === currentTheme}
          key={themeName}
          marginHorizontal={0.25}
          onClick={() => setTheme(themeName)}
        >
          {themeName.replace('Theme', '')}
        </Button>
      ))}
    </Box>
  </Box>
);

export default compose(
  connect(
    (state: State) => ({
      currentTheme: state.themes.currentTheme || 'defaultTheme',
    }),
    { setTheme },
  ),
)(SwitchTheme);