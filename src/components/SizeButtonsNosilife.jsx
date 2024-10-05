/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "@nextui-org/react";

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

    const sizeNosilifeWomen = ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "64", "68", "72", "76", "80", "84", "88", "92", "96", "100", "104"];

    const sizeNosilifeMen = ["23", "24", "25", "26", "27", "28", "29", "30", "46", "48", "50", "52", "54", "56", "58", "60", "90", "94", "98", "102", "106", "110", "114", "118"];  

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

const SizeButtons = ({ gender, region, handleSizeSelection }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelectionWithState = (s) => {
        setSelectedSize(s);
        handleSizeSelection(s);
    };
    
    return (
        <div className="buttons-container">
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