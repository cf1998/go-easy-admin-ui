import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DASHBOARD: AppRouteRecordRaw = {
    path: '/system',
    name: 'system',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: '系统管理',
        requiresAuth: true,
        icon: 'icon-settings',
        order: 2,
    },
    children: [
        {
            path: 'user',
            name: 'user',
            component: () => import('@/views/system/user/index.vue'),
            meta: {
                locale: '用户管理',
                requiresAuth: true,
                roles: ['*'],
            },
        },{
            path: 'role',
            name: 'role',
            component: () => import('@/views/system/role/index.vue'),
            meta: {
                locale: '角色管理',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'menu',
            name: 'menu',
            component: () => import('@/views/system/menu/index.vue'),
            meta: {
                locale: '菜单管理',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'apis',
            name: 'apis',
            component: () => import('@/views/system/apis/index.vue'),
            meta: {
                locale: '接口管理',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'test',
            name: 'test',
            component: () => import('@/views/system/test/index.vue'),
            meta: {
                locale: 'test',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default DASHBOARD;