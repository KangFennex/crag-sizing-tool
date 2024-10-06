/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { sizeNosilifeWomen, sizeNosilifeMen } from "../assets/SizingData"

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

const SizingSelect = ({ gender, handleSizeSelectionWithState, selectedSize }) => {

    return (
        <div>
            {gender === "men" && (
                renderSizeButtons(sizeNosilifeMen, handleSizeSelectionWithState, selectedSize)
            )}
            {gender === "women" && (
                renderSizeButtons(sizeNosilifeWomen, handleSizeSelectionWithState, selectedSize)
            )}
        </div>
    )
}

const SizeButtons = ({ gender, region, handleSizeSelection, selectedTab }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelectionWithState = (s) => {
        setSelectedSize(s);
        handleSizeSelection(s);
    };
    
    return (
        <div className={`buttons-container ${(selectedTab === 0) && gender === "women" ? "expandedTab1" : ""}`}>
            <SizingSelect
            gender={gender}
            region={region}
            handleSizeSelectionWithState={handleSizeSelectionWithState}
            selectedSize={selectedSize}
            />
        </div>
    )
}

export default SizeButtons