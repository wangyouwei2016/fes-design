
import { h } from 'vue';
import IconWrapper from './IconWrapper';
import type {IconProps} from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props} >
        <svg width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M522.752 74.581a21.333 21.333 0 0 1 7.68 7.68L676.907 333.74l284.416 61.61a21.333 21.333 0 0 1 11.392 35.03L778.795 647.38l29.354 289.536a21.333 21.333 0 0 1-29.866 21.675L512 841.259 245.717 958.592a21.333 21.333 0 0 1-29.866-21.675l29.354-289.536L51.285 430.38a21.333 21.333 0 0 1 11.392-35.03l284.416-61.61L493.568 82.26a21.333 21.333 0 0 1 29.184-7.68zm113.067 315.734L512 177.792 388.224 390.315l-240.427 52.053L311.68 625.792l-24.79 244.693L512 771.328l225.067 99.157-24.747-244.693 163.84-183.424-240.384-52.053z"/></svg>
    </IconWrapper>
);
