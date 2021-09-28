import React, { useState } from "react";
import ParallaxCard from "react-parallax-card";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Card } from "react-bootstrap";

const EffectCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div
        className="card-area"
        onClick={onOpenModal}
        onClose={onCloseModal}
        // label="Label (optional)"
      >
        <h1>{data.name}</h1>
        <h1>{data.name}</h1>
        <h1>{data.name}</h1>
        <h1>{data.name}</h1>
        <p>
          djisahdjsahd jasnd jas hdjas bdkjsab hbd hsabd hjasb hjasbd hjbashj
          dbahj bdjhasb
        </p>
      </div>
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          <h2>{data.name}</h2>
        </Modal>
      </div>
    </>
  );
};

export default EffectCard;
