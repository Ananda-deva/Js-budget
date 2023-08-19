import { Home } from '@/components/sreence/home/home.component'
import { AboutUs } from '@/components/sreence/about-us/about-us.component'
import { Auth } from '@/components/sreence/auth/auth.component'

export const ROUTES = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/auth',
		component: Auth
	},
	{
		path: '/about-us',
		component: AboutUs
	}
]
