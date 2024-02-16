export const ModalTerm = ({ show, onClose }) => {
  const modalClassName = show ? "" : "hidden";

  return (
    <div>
      <div
        id="modal-terms"
        className={`relative z-10 ${modalClassName}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Terms And Conditions
                    </h3>
                    <div className="mt-2 text-sm text-gray-500 text-center">
                      <p className="text-gray-600">
                        เงื่อนไขการใช้บริการ Terms and Conditions
                      </p>
                      <br />
                      <p>
                        กรุณาศึกษาเงื่อนไขการใช้บริการและนโยบายความเป็นส่วนตัวอย่างรอบคอบก่อนใช้งานเว็บไซต์บริการของ
                        DOGGO การใช้บริการของ DOGGO
                        ไม่ว่าส่วนหนึ่งส่วนใดและหรือการสมัครสมาชิกเท่ากับผู้ใช้บริการได้ยอมรับเงื่อนไขการใช้บริการและนโยบายความเป็นส่วนตัวนี้แล้ว
                      </p>
                      <br />
                      <p>
                        DOGGO
                        จะมุ่งปฏิบัติให้เคารพความลับและพยายามรักษาความปลอดภัยของข้อมูลส่วนบุคคลทั้งหมดที่เก็บรวบรวมและ/หรือเก็บรักษาและ/หรือส่งข้อมูลและ/หรือใช้ข้อมูลส่วนบุคคลเพื่อระหว่างทำงานในสิ่งที่เป็นของ
                        DOGGO
                        จะพยายามให้การเก็บรวบรวมและ/หรือเก็บรักษาและ/หรือส่งข้อมูลและ/หรือใช้ข้อมูลส่วนบุคคลทั้งหมดโดยที่เป็นไปตามวิธีการที่เหมาะสมสำหรับการยื่นสมัครเป็นสมาชิกและวัตถุประสงค์ภายใน
                        ในกรณีที่บุคคลนั้นต้องการเข้าถึงและ/หรือแก้ไขข้อมูลส่วนบุคคลที่เกี่ยวข้องกับบุคคลนั้นที่ถือโดย
                        บริษัทจะให้และ/หรือแก้ไขข้อมูลดังกล่าวในขณะและวิธีที่เหมาะสม
                      </p>
                      <br />
                      <p>
                        <span className="text-gray-600 font-bold">
                          ติดต่อเรา
                        </span>{" "}
                        หากคุณมีคำถามใด ๆ
                        เกี่ยวกับเงื่อนไขการใช้บริการโปรดติดต่อเรา ทางอีเมล:
                        SiberianWhisky@gmail.com
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={() => {
                    onClose();
                  }}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ModalPolicy = ({ show, onClose }) => {
  const modalClassName = show ? "" : "hidden";

  return (
    <div>
      <div
        id="modal-policy"
        className={`relative z-10 ${modalClassName}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-600 text-center"
                      id="modal-title"
                    >
                      Privacy Policy
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        DOGGO จะต้องเคารพการรักษาความลับและพยายามรักษาข้อมูลส่วนบุคคลใด
                        ๆ
                        และทั้งหมดที่รวบรวมและ/หรือจัดเก็บและ/หรือส่งและ/หรือใช้สำหรับหรือในนามของผู้ใช้ให้ปลอดภัยตลอดเวลา
                        <br />
                        DOGGO จะพยายามให้แน่ใจว่าการรวบรวมและ/หรือการจัดเก็บและ/หรือการส่งและ/หรือการใช้ข้อมูลส่วนบุคคลโดย DOGGO จะต้องกระทำในลักษณะที่เหมาะสมสำหรับการสมัครสมาชิกและวัตถุประสงค์ภายใน
                        ในกรณีที่บุคคลร้องขอการเข้าถึงและ/หรือแก้ไขข้อมูลส่วนบุคคลที่เกี่ยวข้องกับบุคคลที่ถือครองโดย DOGGOโดยชอบด้วยกฎหมาย
                        DOGGO จะให้และ/หรือแก้ไขข้อมูลนั้นในเวลาและลักษณะที่เหมาะสม
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={() => {
                    onClose();
                  }}
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
