import Popover from "./lib/Popover";

export default function PopoverApp() {
  const popoverContent = <div>
    This is a popover
    <button onClick={() => { alert(1) }}>close</button>
  </div>;

  return <Popover
    content={popoverContent}
    placement='right'
    trigger='hover'
    style={{ margin: '200px' }}
  >
    <button>click here</button>
  </Popover>
}
