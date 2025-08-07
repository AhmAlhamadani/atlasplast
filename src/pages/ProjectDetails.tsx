import Breadcrumb from "../components/common/Breadcrumb";
import ProjectDetailsInfo from "../components/sections/projectDetails/ProjectDetailsInfo";
const ProjectDetails = () => {
 

  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Project Details"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Project Details" }]}
      />

      {/************* project details section start here **************/}
      <ProjectDetailsInfo/>
    </div>
  );
};

export default ProjectDetails;
