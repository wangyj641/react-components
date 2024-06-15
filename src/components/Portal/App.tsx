import { useEffect, useRef } from 'react';
import Portal from './lib/Portal';

export default function PortalApp() {
  const containerRef = useRef<HTMLElement>(null);

  const content = <div className="btn">
    <button>button</button>
  </div>;

  useEffect(() => {
    console.log(containerRef);
  }, []);

  return <Portal attach={document.body} ref={containerRef}>
    {content}
  </Portal>
}
