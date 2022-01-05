
import { h } from 'vue';
import IconWrapper from './IconWrapper';
import type {IconProps} from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props} >
        <svg width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M290.773 906.41a21.333 21.333 0 0 1-21.333 21.334h-21.333a21.333 21.333 0 0 1-21.334-21.333V117.589a21.333 21.333 0 0 1 21.334-21.333h21.333a21.333 21.333 0 0 1 21.333 21.333v788.822zm502.102-66.047-12.928 16.981a21.333 21.333 0 0 1-29.867 4.053L313.045 528.811a21.333 21.333 0 0 1 0-33.92l436.95-332.587a21.333 21.333 0 0 1 29.866 4.053l12.971 16.982a21.333 21.333 0 0 1-1.237 27.306l-2.816 2.56-392.363 298.667 392.363 298.581a21.333 21.333 0 0 1 4.053 29.867z"/></svg>
    </IconWrapper>
);
