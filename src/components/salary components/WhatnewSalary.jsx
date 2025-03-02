import Card from "./Card";
function WhatnewSalary() {
  return (
    <div className="whatnew--salary">
      <div className="container">
        <h2>What's New at Glassdoor</h2>
        <div className="cards--container">
          <Card source={"/src/assets/glassdoor-new.jpg"} />
          <Card source={"/src/assets/glassdoor-new1.jpg"} />
          <Card source={"/src/assets/glassdoor-new2.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default WhatnewSalary;
