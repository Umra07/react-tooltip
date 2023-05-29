import './App.css';
import Tooltip from './components/Tooltip';
import { ReactComponent as HomeIcon } from './assets/home.svg';
import { ReactComponent as ChatIcon } from './assets/chat.svg';
import { ReactComponent as MailIcon } from './assets/mail.svg';
import { ReactComponent as FileIcon } from './assets/file.svg';

function App() {
  return (
    <div className="app">
      <Tooltip text="Home">
        <HomeIcon className="icon" width="24px" height="24px" fill="blueviolet" />
      </Tooltip>
      <Tooltip text="Chat">
        <ChatIcon className="icon" width="24px" height="24px" fill="blueviolet" />
      </Tooltip>
      <Tooltip text="Mail">
        <MailIcon className="icon" width="24px" height="24px" fill="blueviolet" />
      </Tooltip>
      <Tooltip text="File">
        <FileIcon className="icon" width="24px" height="24px" fill="blueviolet" />
      </Tooltip>
    </div>
  );
}

export default App;
