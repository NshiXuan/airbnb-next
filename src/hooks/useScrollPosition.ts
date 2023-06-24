import { useEffect, useState } from 'react'
import { throttle } from 'lodash'

export default function useScrollPosition() {
  // 记录位置
  const [scrollX, setscrollX] = useState(0)
  const [scrollY, setscrollY] = useState(0)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setscrollX(window.scrollX)
      setscrollY(window.scrollY)
    }, 200)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}
