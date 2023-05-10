import "./styles.css";

export default function App() {
  return (
    <div className="App sticky-top">
        <nav className="navbar navbar-expand-sm bg-dark ">
            <div className="container-fluid">
    <Logo ></Logo>
    </div>
                </nav>
        
    
      </div>
  );
}


export function Logo() {
  return (
    <img style={{width: '200px' }}
      src="brand/phoenixwhite.webp"
      alt="Horizon logo"
    />
  )
}
