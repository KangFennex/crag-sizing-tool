/* eslint-disable react/prop-types */
import SizeButtonsStandard from './SizeButtonsStandard'
import SizeTableStandard from './SizeTableStandard'

function WorkbookSizing({ gender, size, region, kid, garment, handleSizeSelection }) {
  return (
    <div>
      <section className='buttons'>
      <SizeButtonsStandard
        gender={gender}
        region={region}
        kid={kid}
        garment={garment}
        handleSizeSelection={handleSizeSelection}
      />
      </section>
      <section>
      <SizeTableStandard
        gender={gender}
        region={region}
        kid={kid}
        garment={garment}
        size={size}
      />
      </section>
    </div>
  )
}

export default WorkbookSizing
