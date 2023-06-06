import ModalVertical from "../core/Modal";

export default function Cart({ isOpenModal, setIsOpenModal }) {
  return (
    <>
      <ModalVertical
        right
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        bgDark={false}
      >
        <div className="w-screen px-[12px] relative h-full ">
          <div className="flex items-center justify-between p-[15px]">
            <span className="text-[24px] font-semibold text-cpink-200">
              Cart(2)
            </span>

            <button onClick={() => setIsOpenModal(false)}>
              <img src="/icons/close.svg" alt="Close Icon" />
            </button>
          </div>

          <div className="bg-[#989898] h-[1px]" />

          <section className="absolute bottom-10 w-full left-0 px-[12px] flex flex-col items-center">
            <div className="bg-[#989898] h-[1px] w-full" />

            <span className="text-[24px] my-4">Total: US$ 93.98</span>

            <div className="gap-[14px] flex flex-col w-full ">
              <button className="bg-cpink-100 text-white text-[20px] h-[45px]">
                CHECKOUT
              </button>
              <button className="border-cgray-300  text-[20px] h-[45px] font-semibold border-[1px]">
                TO CART
              </button>
            </div>
          </section>
        </div>
      </ModalVertical>
    </>
  );
}
