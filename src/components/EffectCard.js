import React from "react";
import "react-responsive-modal/styles.css";

import { Link } from "react-router-dom";

const EffectCard = ({ data }) => {
  // console.log(data);
  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);
  return (
    <>
      {/* <Tilt className="Tilt cursor-pointer" options={{ max: 15 }}> */}
      {/* <Link to={{pathname:`/project/${data.id}`,
      state: {
             
      }} 
      
      > */}
      <Link
        className="disabled-link"
        to={{
          pathname: `/project/${data.id}`,
          state: {
            id: data.id,
            name: data.name,
            img: data.img,
            icon: data.icons,
            gitLink: data.gitLink,
            link: data.link,
          },
        }}
      >
        <div
          className="card-area"
          // onClick={onOpenModal}
          // onClose={onCloseModal}
          // label="Label (optional)"
        >
          <h1>{data.name}</h1>
          {/* <img alt="sad" className="img-card" src={data.img} /> */}
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown ...
          </p>
          <br></br>
          <p>See More </p>
        </div>
        {/* </Tilt> */}
        {/* <div className="modal-div">
          <Modal open={open} onClose={onCloseModal} center>
            <div className="modal">
              <h2>{data.name}</h2>
            </div>
          </Modal>
        </div> */}
      </Link>
    </>
  );
};

export default EffectCard;
