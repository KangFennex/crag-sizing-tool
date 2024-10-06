/* eslint-disable react/prop-types */
import SizeButtonsStandard from './SizeButtonsStandard'
import SizeTableStandard from './SizeTableStandard'

function WorkbookSizing({ gender, size, region, kid, garment, handleSizeSelection, selectedTab }) {
  return (
    <div>
      <section className='buttons'>
      <SizeButtonsStandard
        gender={gender}
        region={region}
        kid={kid}
        garment={garment}
        handleSizeSelection={handleSizeSelection}
        selectedTab={selectedTab}
      />
      </section>
      <section>
      <SizeTableStandard
        gender={gender}
        region={region}
        kid={kid}
        garment={garment}
        size={size}
        selectedTab={selectedTab}
      />
      </section>
    </div>
  )
}

export default WorkbookSizing
