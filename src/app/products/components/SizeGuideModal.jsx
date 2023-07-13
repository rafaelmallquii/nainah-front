import { faker } from "@faker-js/faker";
import { Modal } from "react-overlays";

export default function SizeGuideModal({ isOpenModal, setIsOpenModal }) {
  const renderBackdrop = (props) => (
    <div
      {...props}
      style={{
        ...props.style,
        position: "fixed",
        zIndex: 1040,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        opacity: 0.5
      }}
    />
  );

  return (
    <>
      <Modal
        style={{
          position: "fixed",
          zIndex: 1040,
          top: "0%",
          border: "1px solid #e5e5e5",
          backgroundColor: "white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          marginTop: "300px"
        }}
        className="centered-axis-payment"
        show={isOpenModal}
        renderBackdrop={renderBackdrop}
        onHide={() => setIsOpenModal(false)}
        aria-labelledby="modal-label"
      >
        <img src="/img/size-guide.png" className="scale-[1.5]" alt="" />
      </Modal>
    </>
  );
}
