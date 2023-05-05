import { useDispatch, useSelector } from 'react-redux';
import { increment, testValue } from '@/services/state/shared/shared.slice';

export default function Home() {
    const test = useSelector(testValue);
    const dispatch = useDispatch();

  return (
    <main>
      <div className='min-h-screen bg-primary-main text-main'>
          <h1 className='font-9'>{ test }</h1>
          <button onClick={() => dispatch(increment(3))} >press me</button>
      </div>
    </main>
  );
}
