import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import { Theme } from '@radix-ui/themes'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import '@radix-ui/themes/styles.css'
import './main.css'
import { Toast } from './components/Toast.tsx'
import { ToastProvider } from './hooks'
import {
	Category,
	Nokia,
	PicColor,
	WaterMark,
	Blur,
	Mosaic,
} from '@/pages/home'

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
							<Route path="watermark" element={<WaterMark />} />
							<Route path="blur" element={<Blur />} />
							<Route path="mosaic" element={<Mosaic />} />
						</Route>
						<Route path="*" element={<Navigate to="home/category" replace />} />
					</Routes>
				</Router>
				<Toast />
			</ToastProvider>
		</Theme>
	</React.StrictMode>
)
