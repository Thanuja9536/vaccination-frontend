import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <h2>Choose an Option</h2>

      <nav>
                    <Link to="/admin-login">
                        Admin Login
                </Link>
                |
                    <Link to="/user-registration">
                        User SignUp
                    </Link>
                 |
                    <Link to="/user-login">
                        User SignIn
                    </Link>
          </nav>
        </div>
    );
}

export default Home;