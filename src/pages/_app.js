import 'tailwindcss/tailwind.css'
import Contextpaginaifno from '@/context/contextpaginaifno'
/* import { Work_Sans } from '@next/font/google' */
import '@/css/global.css'
/* const noto_sans = Work_Sans({
    style: ['normal'],
    weight: ['300', '400', '700'],
    variable: '--font-notosans',
    subsets: ['latin'],
}) */
const App = ({ Component, pageProps }) => (
    <main>
        <Contextpaginaifno>
            <Component {...pageProps} />
        </Contextpaginaifno>
    </main>
)

export default App
