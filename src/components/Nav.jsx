import { useState } from "react";
import ResponsiveNav from "./ResponsiveNav";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function openNav() {
    if (isNavOpen) {
      setIsNavOpen((prev) => !prev);
    } else {
      setIsNavOpen((prev) => !prev);
    }
  }
  return (
    <>
      <nav className="container">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="36"
            fill="none"
            role="img"
          >
            <path
              fill="#00A264"
              fillRule="evenodd"
              d="M115.399 14.355h4.539c.034 0 .062-.03.062-.067V9.812c-.001-1.094-.363-1.984-1.096-2.606-.674-.572-1.686-.917-3.039-.985-.034-.002-.062.027-.062.063v1.688c0 .033.025.06.056.063 1.187.083 2.09.466 2.09 1.8l-2.55.001c-.034 0-.062.03-.062.067v4.386c0 .036.028.066.062.066Zm-98.18 3.623h-5.504c-.086 0-.141.077-.141.153v2.956c0 .093.07.153.141.153h1.955v2.38c0 1.77-.432 2.72-1.955 2.72-1.272 0-2.175-.771-2.175-3.169V16.26c0-2.296.684-3.372 2.199-3.372 1.366 0 1.923.839 1.923 2.406v.89c0 .093.071.152.142.152h3.384c.086 0 .141-.076.141-.152V15.14c.031-3.718-1.947-5.684-5.527-5.684s-5.912 2.127-5.912 6.6v7.395c0 4.405 2.716 6.32 5.731 6.32 3.376 0 5.731-1.33 5.731-6.252v-5.397a.147.147 0 0 0-.133-.152h-.008.008v.008Zm10.536 7.876h-5.292V9.979c0-.094-.07-.153-.141-.153h-3.33c-.086 0-.14.076-.14.153v19.289c0 .093.07.152.14.152h8.755c.086 0 .141-.076.141-.152v-3.253c0-.093-.07-.153-.141-.153h.008v-.008Zm49.73-9.748c0-4.447 2.284-6.616 5.778-6.616 3.447 0 5.763 2.177 5.747 6.616v7.048c0 4.507-2.143 6.582-5.747 6.582s-5.778-2.033-5.778-6.582v-7.048Zm5.778 10.25c1.46 0 2.065-1.067 2.065-3.337v-6.752c0-2.27-.589-3.371-2.065-3.371s-2.065 1.143-2.065 3.371v6.752c0 2.279.605 3.337 2.065 3.337ZM96.195 9.49c-3.494 0-5.779 2.169-5.779 6.616v7.048c0 4.55 2.175 6.582 5.779 6.582s5.747-2.075 5.747-6.582v-7.048c.016-4.439-2.3-6.616-5.747-6.616ZM98.26 23.02c0 2.27-.605 3.337-2.065 3.337s-2.065-1.059-2.065-3.337v-6.752c0-2.228.589-3.371 2.065-3.371s2.065 1.1 2.065 3.371v6.752ZM65.285 9.82h4.993v.017c3.376 0 5.92 1.855 5.92 6.43v6.718c0 4.532-2.481 6.43-5.96 6.43h-4.953c-.071 0-.142-.06-.142-.153V9.99c0-.085.055-.17.142-.17Zm4.797 16.028c1.507 0 2.45-1.034 2.45-3.448l.007.008v-5.887c0-2.44-.989-3.423-2.489-3.423h-1.374v12.75h1.406ZM47.078 9.456h-.055c-3.439 0-5.252 2.118-5.252 5.295 0 3.307 2.136 4.846 3.898 6.115l.341.247.409.297.001.001.001.001c1.244.9 2.204 1.594 2.204 3.123 0 1.28-.785 1.788-1.696 1.813-1.005.025-1.735-.805-1.735-1.847v-1.686a.191.191 0 0 0-.189-.194h-3.219c-.11 0-.188.084-.188.195v1.71c0 3.38 1.9 5.253 5.245 5.253 3.344 0 5.37-1.915 5.37-5.278 0-3.502-2.074-5.015-3.881-6.335l-.06-.044a42.858 42.858 0 0 0-.596-.428c-1.238-.88-2.388-1.697-2.388-2.969 0-1.262.8-1.855 1.727-1.855.998 0 1.704.771 1.704 1.788v1.49c0 .11.087.195.189.195h3.219c.11 0 .188-.084.188-.194V14.7c.008-3.32-1.994-5.227-5.237-5.244Zm11.563 0h.055c3.243.017 5.237 1.923 5.237 5.244v1.449c0 .11-.078.194-.188.194h-3.22a.191.191 0 0 1-.188-.194v-1.491c0-1.017-.706-1.788-1.704-1.788-.926 0-1.727.593-1.727 1.855 0 1.271 1.15 2.089 2.388 2.969.198.14.398.283.596.428l.06.044c1.808 1.32 3.881 2.833 3.881 6.335 0 3.363-2.026 5.278-5.37 5.278-3.345 0-5.245-1.872-5.245-5.252v-1.712c0-.11.079-.194.188-.194h3.22c.102 0 .188.084.188.195V24.5c0 1.042.73 1.872 1.735 1.847.91-.025 1.696-.534 1.696-1.813 0-1.53-.96-2.223-2.203-3.123-.134-.097-.272-.196-.411-.3l-.338-.244-.003-.002c-1.763-1.269-3.9-2.808-3.9-6.115 0-3.177 1.815-5.295 5.253-5.295Zm55.47 6.398v-1.618c0-2.465-1.9-4.405-4.083-4.405h-6.485c-.078 0-.141.068-.141.152v19.273c0 .084.063.152.141.152h3.172c.086 0 .141-.076.141-.152v-8.023h1.555c1.445 0 1.9.576 1.9 2.042v5.964c0 .093.071.152.141.152h3.274a.153.153 0 0 0 .149-.152v-5.854c0-2-.51-3.279-1.813-3.804 1.311-.576 2.049-1.728 2.049-3.727Zm-3.549.678c0 .804-.597 1.448-1.335 1.448h-2.41v-4.896h2.41c.738 0 1.335.644 1.335 1.44v2.008Zm-77.1-6.701h3.377c.063 0 .125.05.141.127l4.381 19.247c.04.11-.04.212-.141.212h-3.235c-.055 0-.126-.051-.141-.128l-.691-3.447h-4.036l-.69 3.447a.148.148 0 0 1-.142.127H29.05c-.094 0-.165-.101-.141-.211L33.32 9.958a.14.14 0 0 1 .142-.127Zm1.642 6.116-1.335 6.659h2.7l-1.334-6.659-.016.093-.015-.093ZM4.6 9.827H.062c-.034 0-.062.03-.062.066v4.385c0 .037.028.067.062.067h2.55c0 1.335-.903 1.718-2.09 1.801a.061.061 0 0 0-.056.063v1.689c0 .035.029.064.062.062 1.353-.068 2.365-.413 3.039-.985.733-.622 1.095-1.512 1.096-2.606V9.893c0-.037-.028-.067-.062-.067Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <ul>
          <li>
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/companies">Companies</a>
          </li>
          <li>
            <a href="salaries">Salaries</a>
          </li>
        </ul>
        <div className="loginSide">
          <a href="/jobs">
            <i className="uil uil-search"></i>
          </a>
          <i className="uil uil-bell"></i>
          <i className="uil uil-user-circle"></i>

          <div className={`respo-nav `} onClick={() => openNav()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <hr />
      <ResponsiveNav isOpen={isNavOpen} />
    </>
  );
};

export default Nav;
