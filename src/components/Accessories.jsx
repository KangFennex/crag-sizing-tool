/* eslint-disable react/prop-types */
import "./Accessories.scss";

const SizingTable = ({ rows }) => {
  return (
    <div className="size-table-container-tab4 ">
      <table className="min-w-full">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b">
              <th scope="row" className="py-2 px-4">{row.label}</th>
              <td className="py-2 px-4">{row.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Accessories = () => {
  const hatSizeAdult = [
    { label: 'Men/Unisex Hat size', size: 'Head (cm)' },
    { label: 'S/M', size: '55-57' },
    { label: 'M/L', size: '58-60' },
  ];

  const hatSizeKids = [
    { label: 'Kid Hat size', size: 'Head (cm)' },
    { label: '3-8 yrs', size: '50-52' },
    { label: '9-13 yrs', size: '53-55' },
  ];

  const gloveSize = [
    { label: 'Glove size', size: 'Hand (cm)' },
    { label: 'S/M', size: '17-18' },
    { label: 'M/L', size: '19-20' },
    { label: 'L/XL', size: '21-22' },
  ];

  return (
    <div className="accessories-tables">
        <SizingTable title="Adult Hat Size" rows={hatSizeAdult} />
        <SizingTable title="Kids Hat Size" rows={hatSizeKids} />
        <SizingTable title="Glove Size" rows={gloveSize} />
    </div>
  );
};

export default Accessories;
