import 'tailwindcss/tailwind.css'
import Contextpaginaifno from '@/context/contextpaginaifno'
const App = ({ Component, pageProps }) => (
    <Contextpaginaifno>
        <Component {...pageProps} />
    </Contextpaginaifno>
)

export default App
