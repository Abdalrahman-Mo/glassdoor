function HeaderSalary() {
  return (
    <>
      <header className="salary">
        <div className="search--container">
          <h1>Are you paid fairly? Find Out.</h1>
          <div className="search--container__choices">
            <a href="#">Jobs</a>
            <a href="#">Companies</a>
            <a href="#">Salaries</a>
            <a href="#">Interviews</a>
          </div>
          <div className="search--container__searchBar">
            <input type="text" />
            <input type="text" />
            <i className="uil uil-search"></i>
          </div>
        </div>
        <div className="best--ledComps">
          What are the Best-Led Companies of 2024? <a href="#">View Winners</a>
        </div>
      </header>
    </>
  );
}

export default HeaderSalary;
