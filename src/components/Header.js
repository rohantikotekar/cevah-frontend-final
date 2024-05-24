import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="logo">
          <div className="icon">
            <div className="icon-child" />
            <div className="icon-item" />
          </div>
          <b className="cevah1">CEVAH</b>
        </div>
        <div className="navigation" />
      </div>
      <div className="login">
        <img className="user-icon1" alt="" src="/user.svg" />
      </div>
    </div>
  );
};

export default Header;
