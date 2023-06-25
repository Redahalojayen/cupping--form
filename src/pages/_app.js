import '../styles/globals.css'
import Layout from '../../Components/Layout'
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (<Layout>
<Component {...pageProps} /> 
  </Layout>)
}
