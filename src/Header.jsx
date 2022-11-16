import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        Where To Next?
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          {localStorage.jwt === undefined ? (
            <>
              <li class="nav-item">
                <a class="nav-link" href="/signup">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>
            </>
          ) : (
            <>
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  All Trips
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/trips/new">
                  Add New Trip
                </a>
              </li>
              <li class="nav-item">
                <LogoutLink />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
