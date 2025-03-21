
const Input = ({handleChange, value, title, name, color}) => {
  return (
    <>
      <label  onChange={handleChange} className="sidebar-label-container">
        <input onChange={handleChange} value={value} name = {name} type="radio" />
        <span onChange={handleChange} className="checkmark"></span>{title}
      </label>
    </>
  )
}

export default Input