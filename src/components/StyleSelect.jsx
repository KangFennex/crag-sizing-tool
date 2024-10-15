/* eslint-disable react/prop-types */
import "./Styles.scss";
import ToggleSwitch from "./Switch";

function StyleSelect({ selectedTab, gender, garment, kid, region, handleSetGender, handleSetRegion, handleSetGarment, handleSetKid }) {
    return (
        (selectedTab === 0 || selectedTab === 1) && (
            <section className='switches'>
                <ToggleSwitch
                    isChecked={gender === "women"}
                    handleToggle={handleSetGender}
                    icon1="men"
                    icon2="women"
                    disabled={kid}
                />
                <ToggleSwitch
                    isChecked={region}
                    handleToggle={handleSetRegion}
                    icon1="EU"
                    icon2="UK"
                />
                {(selectedTab === 1) && (
                    <>
                        <ToggleSwitch
                            isChecked={garment}
                            handleToggle={handleSetGarment}
                            icon1="trousers"
                            icon2="shirt"
                            disabled={kid}
                        />
                        <ToggleSwitch
                            isChecked={kid}
                            handleToggle={handleSetKid}
                            icon1="adult"
                            icon2="child"
                        />
                    </>
                )}
            </section>
        )
    )
}

export default StyleSelect
