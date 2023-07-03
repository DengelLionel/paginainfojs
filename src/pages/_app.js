import 'tailwindcss/tailwind.css'
import Contextpaginaifno from '@/context/contextpaginaifno'
import { Noto_Sans } from '@next/font/google'
import '@/css/global.css'
const noto_sans = Noto_Sans({
    style: ['normal'],
    weight: ['400', '700'],
    variable: '--font-notosans',
    subsets: ['latin'],
})
const App = ({ Component, pageProps }) => (
    <main className={`${noto_sans}`}>
        <Contextpaginaifno>
            <Component {...pageProps} />
        </Contextpaginaifno>
    </main>
)

export default App
