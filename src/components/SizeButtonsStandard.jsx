/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { sizeKid, sizeKidEu, sizeWomenTops, sizeWomenTopsEu, sizeWomenBottoms, sizeWomenBottomsEu, sizeMenTops, sizeMenTopsEu, sizeMenBottoms, sizeMenBottomsEu } from "../assets/SizingData";

const renderSizeButtons = (sizes, handleSizeSelectionWithState, selectedSize) => {
    return sizes.map((sizeEl, i) => (
        <Button
            key={i}
            size="sm"
            className="bg-white hover:bg-green-100 font-semibold border rounded"
            onClick={() => handleSizeSelectionWithState(sizeEl)}
            isDisabled={selectedSize === sizeEl}
        >{sizeEl}</Button>
    ))
}

const SizingSelect = ({ gender, region, kid, garment, handleSizeSelectionWithState, selectedSize }) => {

    return (
        <div>
            {kid && (
                renderSizeButtons(region ? sizeKid : sizeKidEu, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "women" && garment && (
                renderSizeButtons(region ? sizeWomenTopsEu : sizeWomenTops, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "women" && !garment && (
                renderSizeButtons(region ? sizeWomenBottoms : sizeWomenBottomsEu, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "men" && garment && (
                renderSizeButtons(region ? sizeMenTopsEu : sizeMenTops, handleSizeSelectionWithState, selectedSize)
            )}
            {!kid && gender === "men" && !garment && (
                renderSizeButtons(region ? sizeMenBottomsEu : sizeMenBottoms, handleSizeSelectionWithState, selectedSize)
            )}
        </div>
    )
}

const SizeButtonsStandard = ({ gender, region, kid, garment, handleSizeSelection, selectedTab }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelectionWithState = (s) => {
        setSelectedSize(s);
        handleSizeSelection(s);
    };
    
    return (
        <div className={`buttons-container ${selectedTab === 1 ? "selectedTab2" : ""}`}>
            <SizingSelect
            kid={kid}
            garment={garment}
            gender={gender}
            region={region}
            handleSizeSelectionWithState={handleSizeSelectionWithState}
            selectedSize={selectedSize}
            />
        </div>
    )
}

export default SizeButtonsStandard
