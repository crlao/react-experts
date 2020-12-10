import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', `/react-experts${href}`);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={`/react-experts${href}`} className={className}>{children}</a>
  );
};

export default Link;
