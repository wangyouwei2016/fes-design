
import { h } from 'vue';
import IconWrapper from './IconWrapper';
import type {IconProps} from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props} >
        <svg width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M906.667 96A21.333 21.333 0 0 1 928 117.333v789.334A21.333 21.333 0 0 1 906.667 928H117.333A21.333 21.333 0 0 1 96 906.667V117.333A21.333 21.333 0 0 1 117.333 96h789.334zM864 160H160v704h704V160zM405.504 303.275l247.339 191.872a21.333 21.333 0 0 1 0 33.706L405.504 720.725a21.333 21.333 0 0 1-29.952-3.797l-13.056-16.853a21.333 21.333 0 0 1 .939-27.307l2.858-2.603L570.197 512 366.251 353.835a21.333 21.333 0 0 1-5.846-26.667l2.091-3.243 13.056-16.853a21.333 21.333 0 0 1 29.952-3.797z"/></svg>
    </IconWrapper>
);
