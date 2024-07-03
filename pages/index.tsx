import Head from 'next/head';
import Container from '../components/container';
import '../styles/index.scss';

function App() {
  return (
    <div className="body-faucet">
      <Head>
        <title>BitEigen Testnet Faucet</title>
      </Head>
      <Container />
    </div>
  );
}

export default App;
