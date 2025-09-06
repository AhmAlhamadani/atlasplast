import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";

const Brands = () => {
  return (
    <div>
      {/************* Breadcrumb section start here **************/}
      <Breadcrumb
        title="Brands"
        breadcrumb={[{ name: "Home", href: "/" }, { name: "Brands" }]}
      />

      {/************* brands section start here **************/}
      <section className="section-gap">
        <Container>
          <h1>Brands</h1>
        </Container>
      </section>
    </div>
  );
};

export default Brands;

