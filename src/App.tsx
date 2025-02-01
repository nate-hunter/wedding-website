import { GinkoIcon } from '@/components/Icons';

import './App.css';

export default function App() {
  return (
    <>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', columnGap: '21px' }}>
          <GinkoIcon />
          <h1>Nate + Lisa Wedding</h1>
          <GinkoIcon />
        </div>

        <h3 className='font-color-secondary'>June 14, 2025</h3>
      </div>
    </>
  );
}
