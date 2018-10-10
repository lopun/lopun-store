import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import { Layout, Input } from "antd";
const { Content } = Layout;

export default ({ data, searchTerm, updateSearchTerm }) => (
  <>
    <Head>
      <title>Home | Lopun Store</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === "" ? "Search" : `Searching by : ${searchTerm}`}</h4>
      }
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/home" text="Home" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        placeholder="Search by name"
        onChange={updateSearchTerm}
        value={searchTerm}
      />
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          marginTop: "50px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "100%"
        }}
      >
        {data &&
          data.products &&
          data.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.detail}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </div>
    </Content>
  </>
);
