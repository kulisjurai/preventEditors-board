import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          Sve o bh planinama, planinarskoj opremi, hrani i ljekovitom bilju{" "}
        </span>
      </div>
      <img
        className="headerImg"
        src="https://images6.alphacoders.com/959/thumb-1920-959645.jpg"
        alt=""
      />
    </div>
  );
}
