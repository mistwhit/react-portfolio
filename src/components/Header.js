import React from 'react';

function Header() {
  const message = 'Hello world! I am a Header!';

  return (
    <div className="container">
      <h2>{message}</h2>
    </div>
  );
}

export default Header;