
import { h } from 'vue';
import IconWrapper from './IconWrapper';
import type {IconProps} from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props} >
        <svg width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M733.227 117.59a21.333 21.333 0 0 1 21.333-21.334h21.333a21.333 21.333 0 0 1 21.334 21.333v788.822a21.333 21.333 0 0 1-21.334 21.333H754.56a21.333 21.333 0 0 1-21.333-21.333V117.589zm-502.102 66.047 12.928-16.981a21.333 21.333 0 0 1 29.867-4.053l436.992 332.586a21.333 21.333 0 0 1 0 33.92l-436.95 332.587a21.333 21.333 0 0 1-29.866-4.053l-12.97-16.982a21.333 21.333 0 0 1 1.237-27.306l2.816-2.56L627.54 512.128 235.18 213.547a21.333 21.333 0 0 1-4.054-29.867z"/></svg>
    </IconWrapper>
);
