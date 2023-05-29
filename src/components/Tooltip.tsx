import { FC, ReactNode, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const [textIsShown, setTextIsShown] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setTextIsShown(true);
  };

  const handleMouseLeave = () => {
    setTextIsShown(false);
  };

  return (
    <div className="tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <CSSTransition
        nodeRef={nodeRef}
        in={textIsShown}
        timeout={150}
        classNames="text"
        unmountOnExit>
        <div ref={nodeRef} className="text">
          {text}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Tooltip;
