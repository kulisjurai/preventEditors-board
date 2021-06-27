import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">PREPORUKE</span>
        <img
          src="https://w2.kibuba.com/productpics/8281_2_hiking-shoes-scarpa-rebel-lite-gtx_1280x1024-md.jpg"
          alt=""
        />
        <p>
          Revolucionarna tehnologija iz Italije: Vibram. Razvio je 1937. godine
          planinar Vitale Bramani, poslije nesreće u kojoj je smrtno stradalo
          šest penjača, jer su nosili neprikladnu obuću. Vibram je napravljen od
          različitih gumenih materijala koje karakteriziraju fleksibilnost,
          nepropusnost, tvrdoča, a zajedno jamče optimalno prijanjanje.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">PRATITE NAS</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
