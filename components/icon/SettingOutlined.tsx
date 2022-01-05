
import { h } from 'vue';
import IconWrapper from './IconWrapper';
import type {IconProps} from './IconWrapper';
import './style';

export default (props?: IconProps) => (
    <IconWrapper {...props} >
        <svg width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m511.701 42.624 14.507.384c5.205.213 10.795.597 16.81 1.11l19.2 1.877 21.633 2.602 11.69 1.622 25.174 3.754 21.76 118.656v.854a362.24 362.24 0 0 1 97.152 56.149l.896-.427 99.328-35.413a21.333 21.333 0 0 1 23.893 6.827c25.6 32.426 43.904 58.026 54.784 76.8l2.56 4.65 5.76 11.136 6.485 13.654 7.254 16.256 8.021 18.773 8.79 21.248a21.333 21.333 0 0 1-5.974 24.32l-80.213 68.053-.854.512a365.44 365.44 0 0 1 0 111.915l.854.512 80.298 68.31a21.333 21.333 0 0 1 5.974 24.106l-9.814 24.15c-11.05 26.495-20.821 47.06-29.269 61.695a234.795 234.795 0 0 1-5.888 9.6l-7.68 11.52-9.515 13.398-11.306 15.36-20.395 26.666a21.333 21.333 0 0 1-24.021 6.998l-99.072-35.499-.854-.427a362.24 362.24 0 0 1-97.194 56.15v.768l-18.987 103.722a21.333 21.333 0 0 1-17.877 17.28l-13.27 1.878-24.405 3.157c-3.84.427-7.552.853-11.136 1.195l-20.181 1.792a354.133 354.133 0 0 1-24.918 1.024l-11.221-.299-13.824-.939-16.384-1.493-18.987-2.133-21.546-2.731-11.734-1.579a21.333 21.333 0 0 1-18.048-17.322l-18.773-103.552-.085-.896a362.283 362.283 0 0 1-96.768-56.022l-.854.512-99.2 35.499a21.333 21.333 0 0 1-23.893-6.827c-5.717-7.168-11.093-14.037-16.043-20.565l-13.781-18.56a451.328 451.328 0 0 1-24.96-37.632c-5.547-9.557-11.605-21.675-18.304-36.352l-8.235-18.773-8.832-21.291-9.301-23.68 91.904-78.165.81-.427a365.44 365.44 0 0 1 0-112.213l-.853-.427L60.8 377.429l9.387-23.637 4.437-10.923 8.533-20.053c8.235-18.773 15.702-33.92 22.315-45.44 2.219-3.84 4.736-7.936 7.595-12.373l9.386-13.995a625.831 625.831 0 0 1 11.222-15.701l13.098-17.408 14.934-19.115 8.106-10.155 113.664 40.534.896.469a362.283 362.283 0 0 1 96.726-55.979l.042-1.024 21.59-118.656A531.03 531.03 0 0 1 511.7 42.624zm0 64c-12.8 0-25.642.512-38.442 1.579l-15.659 1.621-12.672 69.803-1.493 38.528-39.254 15.189a297.941 297.941 0 0 0-69.12 38.016l-10.496 8.107-33.493 27.008-34.048-18.816-66.219-23.638-9.258 12.843a463.787 463.787 0 0 0-10.667 16.043l-9.984 16.469a454.264 454.264 0 0 0-17.835 34.133l-6.4 14.336 51.926 44.032L224 420.053l-7.125 45.654a301.44 301.44 0 0 0-1.963 77.226l1.963 15.318 6.869 44.245-34.432 18.944-52.608 44.715 6.485 14.506c2.731 5.803 5.59 11.52 8.534 17.238l9.301 16.853a468.92 468.92 0 0 0 20.608 32.512l9.216 12.715 65.92-23.595 34.005-19.115 33.792 27.264c20.566 16.64 43.264 30.422 67.414 41.088l12.245 5.035 39.04 15.104 1.579 38.144 12.757 70.144 6.059.725c10.666 1.11 21.333 1.878 32 2.219l16.042.299c12.843 0 25.686-.555 38.486-1.622l15.701-1.664 12.587-68.778.128-38.699 40.832-15.787a297.941 297.941 0 0 0 69.546-38.101l10.496-8.107 32.726-26.453 34.261 18.005 66.645 23.851 3.67-4.864a426.863 426.863 0 0 0 17.92-26.624l8.277-13.739a454.264 454.264 0 0 0 17.835-34.133l6.442-14.464-53.632-45.61-33.066-19.926 6.57-42.41a301.44 301.44 0 0 0 1.963-77.1l-1.963-15.274-6.485-41.813 32.725-20.395 53.931-45.696-2.347-5.632a463.787 463.787 0 0 0-14.08-28.8l-7.765-14.037a463.787 463.787 0 0 0-20.65-32.512l-9.26-12.8-67.242 23.936-34.005 17.664-32.512-26.24a298.624 298.624 0 0 0-67.712-41.174l-12.288-5.077-40.832-15.744-.128-38.827-12.587-68.778-15.701-1.664c-6.4-.512-12.8-.939-19.2-1.195l-19.286-.427zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"/></svg>
    </IconWrapper>
);
