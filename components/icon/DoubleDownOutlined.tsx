
import { h } from 'vue';
import IconWrapper from './IconWrapper';
import type {IconProps} from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props} >
        <svg width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M209.493 481.707 512 784.213l302.507-302.506a21.333 21.333 0 0 1 30.208 0l15.061 15.061a21.333 21.333 0 0 1 0 30.165L527.104 859.648a21.333 21.333 0 0 1-30.208 0l-332.63-332.715a21.333 21.333 0 0 1 0-30.165l15.062-15.104a21.333 21.333 0 0 1 30.165 0zm0-317.526L512 466.688l302.507-302.507a21.333 21.333 0 0 1 30.208 0l15.061 15.104a21.333 21.333 0 0 1 0 30.166L527.104 542.165a21.333 21.333 0 0 1-30.208 0l-332.63-332.714a21.333 21.333 0 0 1 0-30.166l15.062-15.104a21.333 21.333 0 0 1 30.165 0z"/></svg>
    </IconWrapper>
);
