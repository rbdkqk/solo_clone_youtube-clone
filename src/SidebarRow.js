import React from 'react'
import "./SidebarRow.css"

function SidebarRow({ selected, Icon, title }) {  // 상위 컴포넌트에서 제공한 title 매개변수를 받아서,
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  )
}

export default SidebarRow
