import { useState } from 'react';

export const useCounter = () => {
  const [Count, setCount] = useState(0)
  const incr = () => setCount(Count + 1)
  const dcr = () => setCount(Count - 1)
  return {Count, incr, dcr}
}
