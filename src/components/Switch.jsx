/* eslint-disable react/prop-types */
import "./Styles.scss";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";
import { GiEuropeanFlag, GiUnionJack } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { PiPantsBold } from "react-icons/pi";
import { TbMoodKid } from "react-icons/tb";
import { FaPersonRunning } from "react-icons/fa6";

const iconMap = {
    women: GrRestroomWomen,
    men: GrRestroomMen,
    EU: GiEuropeanFlag,
    UK: GiUnionJack,
    trousers: PiPantsBold,
    shirt: IoShirt,
    adult: FaPersonRunning,
    child: TbMoodKid,
};

const ToggleSwitch = ({ isChecked, handleToggle, icon1, icon2 }) => {

    const Icon1 = iconMap[icon1];
    const Icon2 = iconMap[icon2];

    return (
        <div className="icon-toggle-container">
            {Icon1 && <Icon1 size={25} color={isChecked ? "" : "darkturquoise"} />} 
            <div className="toggle-container">
                <label className="switch">
                    <input
                        type="checkbox"
                        id="checkbox"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <span className="slider"></span>
                </label>
            </div>
            {Icon1 && <Icon2 size={25} color={isChecked ? "darkturquoise" : ""}/>} 
        </div>
    );
};

export default ToggleSwitch;