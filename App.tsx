import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle="default"
        backgroundColor="#0D0D0D"
        translucent
      />
    </>
  );
}
