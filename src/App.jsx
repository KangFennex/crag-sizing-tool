import './App.scss';
import { create } from "zustand";
import tabs from './assets/tabs';
import fullLogo from "./assets/images/Craghoppers-logo.svg";
import logo from "./assets/images/head-logo-round.png";
import { Divider } from "@nextui-org/divider";
import NosilifeSizing from './components/NosilifeSizing';
import WorkbookSizing from './components/WorkbookSizing';
import Accessories from './components/Accessories';
import StyleSelect from './components/StyleSelect';
import BreakdownByStyle from './components/BreakdownByStyle';

const useStore = create((set) => ({
  selectedTab: 0,
  size: 16,
  kid: false,
  gender: "women",
  garment: false,
  region: false,

  setSelectedTab: (tab) => set({ selectedTab: tab }),
  setSize: (size) => set({ size: size }),
  setKid: (kid) => set({ kid: kid }),
  setGender: (gender) => set({ gender: gender }),
  setGarment: (garment) => set({ garment: garment }),
  setRegion: (region) => set({ region: region })
}));

function App() {
  const selectedTab = useStore((state) => state.selectedTab);
  const size = useStore((state) => state.size);
  const kid = useStore((state) => state.kid);
  const gender = useStore((state) => state.gender);
  const garment = useStore((state) => state.garment);
  const region = useStore((state) => state.region);

  const setSelectedTab = useStore((state) => state.setSelectedTab);
  const setSize = useStore((state) => state.setSize);
  const setKid = useStore((state) => state.setKid);
  const setGender = useStore((state) => state.setGender);
  const setGarment = useStore((state) => state.setGarment);
  const setRegion = useStore((state) => state.setRegion);

  const handleSetSelectedTab = (tab) => {
    if (tab === 0) {
      setKid(false)
      setSelectedTab(tab);
    }
    setSelectedTab(tab);
  }

  const handleSizeSelection = (sizeEl) => {
    setSize(sizeEl)
  }

  const handleSetGender = () => {
    if (gender === "women") {
      setGender("men")
    } else if (gender === "men") {
      setGender("women")
    }
  }

  const handleSetRegion = () => {
    setRegion(!region)
  }

  const handleSetGarment = () => {
    setGarment(!garment);
  }

  const handleSetKid = () => {
    setKid(!kid);
    setGender("men");
    setGarment(false);
  }


  return (
    <div className="form">
      <div className="form__header">
        <div>
          <img
            alt="Craghoppers Logo"
            src={fullLogo}
            width={200}
          />
          <ul className="form__header__tabs">
            {tabs.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => handleSetSelectedTab(index)}
                  className={selectedTab === index ? "selected" : ""}
                >
                  {item.tab}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <section className='card-container'>
        <nav
          className={`card ${gender === "women" ? "expanded" : ""}`}
          >
          <div className="card__header">
            <img
              alt="Craghoppers logo"
              className="card__header__logo"
              src={logo}
            />
            <div>
              <p className="card__title">{tabs[selectedTab].title}</p>
            </div>
          </div>

          <Divider />
          <StyleSelect
            selectedTab={selectedTab}
            gender={gender}
            region={region}
            kid={kid}
            garment={garment}
            handleSetGender={handleSetGender}
            handleSetRegion={handleSetRegion}
            handleSetGarment={handleSetGarment}
            handleSetKid={handleSetKid}
          />
          <div>
            {selectedTab === 0 && (
              <NosilifeSizing
                size={size}
                gender={gender}
                region={region}
                handleSizeSelection={handleSizeSelection}
                selectedTab={selectedTab}
              />
            )}
            {selectedTab === 1 && (
              <WorkbookSizing
                gender={gender}
                region={region}
                kid={kid}
                garment={garment}
                size={size}
                handleSizeSelection={handleSizeSelection}
                selectedTab={selectedTab}
              />
            )}
            {selectedTab === 2 && (
              <BreakdownByStyle />
            )}
            {selectedTab === 3 && (
              <Accessories />
            )}
          </div>
          <Divider />
          <div className="card__footer">
            <a
              href="https://www.craghoppers.com"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit our Craghoppers B2B
            </a>
          </div>
        </nav>
      </section>
    </div>
  )
}

export default App
