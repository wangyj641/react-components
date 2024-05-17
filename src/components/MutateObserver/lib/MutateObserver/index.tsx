import React, { useLayoutEffect } from 'react';
import useMutateObserver from './useMutateObserver';

interface MutationObserverProps {
  options?: MutationObserverInit;
  onMutate?: (mutations: MutationRecord[], observer: MutationObserver) => void;
  children: React.ReactElement;
}

const MutateObserver: React.FC<MutationObserverProps> = props => {
  const {
    options,
    onMutate = () => { },
    children,
  } = props;

  const elementRef = React.useRef<HTMLElement>(null);

  const [target, setTarget] = React.useState<HTMLElement>();

  useMutateObserver(target!, onMutate, options);

  useLayoutEffect(() => {
    setTarget(elementRef.current!);
  }, []);

  if (!children) {
    return null;
  }

  return React.cloneElement(children, { ref: elementRef });
}

export default MutateObserver;
