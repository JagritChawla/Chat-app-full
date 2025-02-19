import axios from 'axios';

const AuthPage = ({onAuth}) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const value = e.target[0].value;
      axios.post(
        "http://localhost:3001/authenticate",
        { username : value}
      )
      .then( r => onAuth({...r.data , secret: value}))
      
      .catch(err => console.log(err));
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;