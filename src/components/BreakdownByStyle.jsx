/* eslint-disable react/prop-types */
import "./BreakdownByStyle.scss";
import styles from "../assets/styles";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useState } from 'react';
import { MdRefresh } from 'react-icons/md';


const StylesDropdown = ({ styleOptions, handleSelect }) => {

    const onInputChange = (value) => {
        const selectedId = styleOptions.find((style) => style.value === value)
        handleSelect(selectedId?.id);
    }

    const onSelectionChange = (id) => {
        handleSelect(id)
    }

    return (
        <>
            <Autocomplete
                label="Select a style"
                className="max-w-xs"
                color="success"
                defaultItems={styleOptions}
                onSelectionChange={onSelectionChange}
            >
                {styleOptions.map((style) => (
                    <AutocompleteItem
                        key={style.id}
                        value={style.value}
                    >
                        {style.name}
                    </AutocompleteItem>
                ))}
            </Autocomplete>

            <Autocomplete
                label="Style"
                placeholder="Search style"
                color="success"
                className="max-w-xs"
                defaultItems={styleOptions}
                onInputChange={onInputChange}
            >
                {styleOptions.map((item) => <AutocompleteItem key={item.value}>{item.name}</AutocompleteItem>)}
            </Autocomplete>

        </>
    )
}

function BreakdownByStyle() {
    const [selectedStyle, setSelectedStyle] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleRefresh = () => {
        setSelectedStyle('');
    }

    const handleSelect = (selectedId) => {
        const selectedStyle = styles.find((style) => style.id === selectedId)
        setSelectedStyle(selectedStyle || null);
    };

    return (
        <div className={`size-table-container-tab3 ${selectedStyle ? "expanded" : ""}`}>
            <div>
                <section>
                    <div>
                        <MdRefresh
                            size={30}
                            color="darkturquoise"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => handleRefresh()}
                            style={{
                                transition: "all 0.5s ease",
                                transform: isHovered ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)",
                            }}
                            className="breakdown-refresh"
                        />
                        <div className='style-select'>
                            <StylesDropdown styleOptions={styles} handleSelect={handleSelect} />
                        </div>
                        {selectedStyle && (
                            <div>
                                <table className="size-table-container-tab3__table">
                                    <thead>
                                        <tr className="first-row">
                                            <th scope="col">Feature</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Product</th>
                                            <td>{selectedStyle.productDescription}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">General Size</th>
                                            <td>{selectedStyle.generalSizeDescription}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">UK Size</th>
                                            <td>{selectedStyle.ukSizeDescription}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">EU Size</th>
                                            <td>{selectedStyle.euSizeDescription}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">DEU Size</th>
                                            <td>{selectedStyle.germanSizeDescription}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">FR Size</th>
                                            <td>{selectedStyle.frenchSizeDescription}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">USA Size</th>
                                            <td>{selectedStyle.usaSizeDescription}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default BreakdownByStyle
