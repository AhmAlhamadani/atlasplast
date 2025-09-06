import Breadcrumb from "../components/common/Breadcrumb";
import FaqStyle2 from "../components/sections/faq/FaqStyle2";
import ProjectStyle3 from "../components/sections/project/ProjectStyle3";

const Project = () => {
  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Project"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Project" }]}
      />

      {/************* project section start here **************/}
       <ProjectStyle3/>

    </div>
  );
};

export default Project;
