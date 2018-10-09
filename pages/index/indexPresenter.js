import Head from "next/head";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Layout } from "antd";
const { Content } = Layout;

export default () => (
  <>
    <Head>
      <title>Home | Lopun Store</title>
    </Head>
    <Header
      centerColumn={<h4>Lopun Store</h4>}
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
      }
      leftColumn={<Button href="/search" text="Search" btnIcon={"search"} />}
    />
    <Content style={{ padding: "0 50px" }}>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          width: "100%"
        }}
      >
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"Men"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"Women"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"Shoes"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"Suits"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"Dresses"}
        />
      </div>
    </Content>
  </>
);
