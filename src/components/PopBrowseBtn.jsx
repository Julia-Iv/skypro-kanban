import PopBrowseBtnBrowse from "./PopBrowseBtnBrowse";
import PopBrowseBtnExit from "./PopBrowseBtnEdit";

const PopBrowseBtn = ( { onClose }) => {

    return (
      <div>
                <PopBrowseBtnBrowse  onClose={onClose}/>
                <PopBrowseBtnExit />
                </div>
    )
}

export default PopBrowseBtn