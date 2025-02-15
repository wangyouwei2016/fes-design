import { getPackageJsonVersion } from '../../../../scripts/utils.mjs';

const currentVersion = getPackageJsonVersion();

export default {
    zh: [
        {
            text: '文档',
            activeMatch: `/guide/`,
            link: '/zh/guide/quick-start',
        },
        {
            text: '组件',
            activeMatch: `/components/`,
            link: '/zh/components/button',
        },
        {
            text: `v${currentVersion}`,
            items: [
                {
                    text: '更新日志',
                    link: 'https://github.com/WeBankFinTech/fes-design/blob/main/CHANGELOG.md',
                },
                {
                    text: 'New issue',
                    link: 'https://github.com/WeBankFinTech/fes-design/issues/new/choose',
                },
            ],
        },
        {
            text: '生态',
            items: [
                {
                    text: 'Fes.js',
                    link: 'https://fesjs.mumblefe.cn/',
                },
            ],
        },
    ],
};
