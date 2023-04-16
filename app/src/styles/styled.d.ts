import 'styled-components';
import { COLORS, FONTS } from './theme';

const theme = {
    COLORS,
    FONTS
}

declare module 'styled-components' {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType { }
}