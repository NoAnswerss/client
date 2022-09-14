import './App.css';


function App() {
  return (
    <div className="App">
      <img src="https://groupomania.stephane-chimy.com/static/media/icon.500ae8c5.png" alt="world shaped logo red" className="background"></img>
      <nav className="navbar">
        <div className="wrapper">
        </div>
        <div className="nav_header">LOGIN</div>
        </nav>
        <form action="action_page.php" method="post">
        <div className="login_container">
          <div className="user">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required value=""></input>
        </div>
        <div className="password_container">
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>
        </div>
        <button type="submit" >Login</button>
        <button type="button" class="cancelbtn">Cancel</button>
        </div>
        </form>
    </div>
  );
}

export default App;
