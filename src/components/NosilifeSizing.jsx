/* eslint-disable react/prop-types */
import "./Styles.scss";
import SizeButtonsNosilife from './SizeButtonsNosilife';
import SizeTableNosilife from './SizeTableNosilife';

function NosilifeSizing({ gender, region, size, handleSizeSelection}) {
  return (
    <div>
      <section className="buttons">
        <SizeButtonsNosilife 
        size={size}
        gender={gender}
        region={region}
        handleSizeSelection={handleSizeSelection}/>
      </section>
      <section>
        <SizeTableNosilife 
        size={size}
        gender={gender}
        />
      </section>
    </div>
  )
}

export default NosilifeSizing
