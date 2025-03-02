function DiscoverSalary() {
  return (
    <main className="discover--salary container">
      <div className="discover--salary__LS">
        <h1>Even the Score</h1>
        <p>
          Whether you’re starting a job search or ready for a promotion, use
          Glassdoor to uncover what other professionals like you are getting
          paid – so you can negotiate with confidence.
        </p>
        <button>Discover Salaries</button>
      </div>
      <div className="discover--salary__RS">
        <img src="/src/assets/SalaryDiagram.jpg" alt="Salary Diagram" />
      </div>
    </main>
  );
}

export default DiscoverSalary;
