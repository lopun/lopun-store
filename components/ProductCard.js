import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

const Text = ({ text }) => <span style={{ color: "black" }}>{text}</span>;

export default ({ id, name, subtitle, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <Card
        hoverable
        actions={[
          <a>
            <Icon type="eye" theme="outlined" />
          </a>
        ]}
        cover={<img alt="example" src={photoUrl} />}
      >
        <Meta
          title={<Text text={"name"} />}
          description={<Text text={subtitle} />}
        />
      </Card>
    </Link>
  </div>
);
