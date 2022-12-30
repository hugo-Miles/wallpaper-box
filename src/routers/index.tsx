import { lazy, Suspense } from 'react'
import { DesktopOutlined, SettingOutlined } from '@ant-design/icons'
import Container from '@/layout'
import { Navigate } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'

// 路由懒加载
// const Dashboard = lazy(() => import('@/pages/dashboard'))
const List = lazy(() => import('@/pages/List'))
const WallPaperPage = lazy(() => import('@/pages/WallPaper'))
const Setting = lazy(() => import('@/pages/Setting'))
const Page404 = lazy(() => import('@/pages/ErrorPage/Page404'))
const Page401 = lazy(() => import('@/pages/ErrorPage/Page401'))

// 路由懒加载的loading
const withSuspense = (Component: JSX.Element) => <Suspense fallback={<div>loading...</div>}>{Component}</Suspense>

// 菜单路由
export const menuRoutes = [
  {
    path: '/list',
    title: '壁纸列表',
    icon: <DesktopOutlined />,
    element: withSuspense(<List />),
  },
  {
    path: '/setting',
    title: '设置',
    icon: <SettingOutlined />,
    element: withSuspense(<Setting />),
  },
  // {
  //   path: '/dashboard',
  //   title: '仪表盘',
  //   element: <Dashboard />,
  // },
]

// 路由配置
export const routes = [
  {
    path: '/',
    element: <Navigate to='/list' />,
  },
  {
    path: '/',
    element: <Container />,
    children: menuRoutes,
  },
  {
    path: '/wallPaper',
    element: withSuspense(<WallPaperPage />),
  },
  {
    path: '/401',
    element: <Page401 />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]