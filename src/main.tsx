import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import { Theme } from '@radix-ui/themes'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import '@radix-ui/themes/styles.css'
import './main.css'
import { Category } from './page/category/index.tsx'
import { Nokia } from './page/nokia/index.tsx'
import { PicColor } from './page/picColor/index.tsx'
import { Toast } from './component/Toast.tsx'
import { ToastProvider } from './hooks'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Theme>
			<ToastProvider>
				<Router>
					<Routes>
						<Route path="home" element={<Home />}>
							<Route path="category" element={<Category />} />
							<Route path="nokia" element={<Nokia />} />
							<Route path="picColor" element={<PicColor />} />
						</Route>
					</Routes>
				</Router>
				<Toast />
			</ToastProvider>
		</Theme>
	</React.StrictMode>
)
