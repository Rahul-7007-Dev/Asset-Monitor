// src/components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const theme = "light";
  const language = "eng";

  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
  ];

  function handleLogin() {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>💰 Asset Tracker</div>

      <div style={styles.links}>
        <NavLink to="/" end style={navLinkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/add-entry" style={navLinkStyle}>
          Add Entry
        </NavLink>
        <NavLink to="/history" style={navLinkStyle}>
          History
        </NavLink>
      </div>

      <div style={styles.actions}>
        {/* Theme toggle */}
        <button
          style={styles.iconBtn}
          //   onClick={onThemeToggle}
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Language dropdown */}
        <div style={{ position: "relative" }}>
          <button
            style={styles.iconBtn}
            onClick={() => setLangOpen((p) => !p)}
            title="Change language"
          >
            🌐 {language.toUpperCase()}
          </button>
          {langOpen && (
            <div style={styles.dropdown}>
              {languages.map((l) => (
                <button
                  key={l.code}
                  style={{
                    ...styles.dropdownItem,
                    fontWeight: language === l.code ? 600 : 400,
                  }}
                  onClick={() => {
                    // onLanguageChange(l.code);
                    setLangOpen(false);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Login */}
        <button style={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </nav>
  );
}

function navLinkStyle({ isActive }) {
  return {
    color: isActive ? "#fff" : "#e0f2fe",
    backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
    padding: "6px 14px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: isActive ? 600 : 400,
    fontSize: "14px",
    transition: "background 0.2s",
  };
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    height: "56px",
    backgroundColor: "#0ea5e9",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  brand: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "18px",
    letterSpacing: "0.3px",
  },
  links: {
    display: "flex",
    gap: "4px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  iconBtn: {
    background: "rgba(255,255,255,0.15)",
    border: "none",
    borderRadius: "6px",
    color: "#fff",
    padding: "6px 10px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "36px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    overflow: "hidden",
    minWidth: "130px",
    zIndex: 200,
  },
  dropdownItem: {
    display: "block",
    width: "100%",
    padding: "10px 16px",
    border: "none",
    background: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
    color: "#1e293b",
  },
  loginBtn: {
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.4)",
    borderRadius: "6px",
    color: "#fff",
    padding: "6px 14px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
  },
};

export default Navbar;
