import React from "react";
import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>
//         Mon Etat local "count": contient la valeur <b>{count}</b>
//       </p>
//       <button onClick={() => setCount(count + 1)}>
//         Incrémenter la valeur de 1
//       </button>
//       <br />
//       <br />
//       <button onClick={() => setCount(count - 1)}>
//         Décrémenter la valeur de 1
//       </button>
//     </div>
//   );
//  }

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Application</h1>
      {isLoggedIn ? (
        <p>Vous êtes connecté.</p>
      ) : (
        <p>Vous n'êtes pas connecté.</p>
      )}
      <button onClick={handleLogin}>Se connecter</button>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

export default App;
