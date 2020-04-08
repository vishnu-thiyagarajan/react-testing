import { useCounter } from './useCounter'
import { act, renderHook } from '@testing-library/react-hooks';

describe("increment", () => {
    it("incremnets by 1 count", () => {
        const { result } = renderHook(useCounter)
        act(()=>{
            result.current.incr()
        })
        expect(result.current.Count).toBe(1)
    })
})
