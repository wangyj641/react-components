import { create } from "./lib/Zustand/index.tsx";

function logMiddleware(func) {
  return function (set, get, store) {

    function newSet(...args) {
      console.log('调用了 set：', get());
      return set(...args)
    }

    return func(newSet, get, store)
  }
}

const useXxxStore = create(logMiddleware((set) => ({
  aaa: '',
  bbb: '',
  updateAaa: (value) => set(() => ({ aaa: value })),
  updateBbb: (value) => set(() => ({ bbb: value })),
})))

export default function App() {
  const updateAaa = useXxxStore((state) => state.updateAaa)
  const aaa = useXxxStore((state) => state.aaa)

  useXxxStore.subscribe((state) => {
    //console.log(useXxxStore.getState());
    console.log(state);
  })

  return (
    <div>
      <input
        onChange={(e) => updateAaa(e.currentTarget.value)}
        value={aaa}
      />
      <Bbb></Bbb>
    </div>
  )
}

function Bbb() {
  return <div>
    <Ccc></Ccc>
  </div>
}

function Ccc() {
  const aaa = useXxxStore((state) => state.aaa)
  return <p>hello, {aaa}</p>
}
