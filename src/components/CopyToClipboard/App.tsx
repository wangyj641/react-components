import CopyToClipboard from './lib/CopyToClipboard';

export default function CopyToClipboardApp() {

  return <CopyToClipboard text={'This is a text to be copied!'} onCopy={() => {
    console.log('done')
  }}>
    <div onClick={() => alert('there is already a onclick event')}>COPY</div>
  </CopyToClipboard>
}
