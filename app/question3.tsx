import Image from 'next/image'

const Question3 = () =>  {
  return (
<div
  id="FrageRoot"
  className="overflow-hidden relative flex flex-row w-full items-start"
>
  <div
    id="AtomsColorsBlack"
    className="bg-[#cccccc] relative flex flex-col mb-1 w-full items-start"
  >
    <div
      id="AtomsColorsBlack1"
      className="bg-[#208207] flex flex-row w-full items-start pt-2 pl-[685px] pr-[624px]"
    >
      <div className="text-xl font-['Krona_One'] bg-[#acd464] flex flex-row w-16 h-10 items-start mt-px mb-2 pt-2 px-1 rounded">
        AEM
      </div>
    </div>
    <div className="flex flex-row ml-0 gap-20 w-full items-start">
      <img
        src="https://file.rendit.io/n/nIjGHSX6uTVnsjzsFpJ0.png"
        alt="TimvanderkuipELbnYDoxidounsplash"
      />
      <div className="flex flex-col mt-12 gap-20 w-1/2 font-['iA_Writer_Mono_S'] items-start">
        <div className="flex flex-col gap-4 w-full items-start">
          <div
            id="Header"
            className="text-center text-5xl font-bold leading-[64px]"
          >
            Frage 3
          </div>
          <div id="Title" className="text-3xl ml-8 w-full">
            Wie können Unternehmen dazu beitragen, den CO2-Fußabdruck ihrer
            IT-Infrastruktur zu minimieren?
          </div>
        </div>
        <div className="flex flex-col gap-10 w-2/3 h-56 items-start mb-px ml-16">
          <div className="flex flex-row mb-px gap-4 w-full items-start">
            <img
              src="https://file.rendit.io/n/8YvQpPmCiWyHB385C6ur.svg"
              alt="Icon3"
              id="Icon3"
              className="w-6"
            />
            <div id="SomethingGoesHere3" className="leading-[24px]">
              Einsatz von energieeffizienten Geräten
            </div>
          </div>
          <div className="flex flex-row gap-4 w-3/4 items-start">
            <img
              src="https://file.rendit.io/n/CfczbwtEmGzGidzPDnGU.svg"
              alt="Icon2"
              id="Icon2"
              className="w-6"
            />
            <div id="SomethingGoesHere2" className="leading-[24px]">
              Verzicht auf Recylingprogramme
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full h-20 font-['iA_Writer_Mono_S'] items-start">
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/amn0Mb5fuFutlaylWKw1.svg"
                alt="Icon1"
                id="Icon1"
                className="w-6"
              />
              <div id="SomethingGoesHere1" className="leading-[24px]">
                Verwendung von Einwegplastikverpackungen
              </div>
            </div>
            <div className="flex flex-row gap-4 w-5/6 items-start">
              <img
                src="https://file.rendit.io/n/y7uFeB4rUV1WFJxJvhmh.svg"
                alt="Icon"
                id="Icon"
                className="w-6"
              />
              <div id="SomethingGoesHere" className="leading-[24px]">
                Intensivierung von Papierdokumenten
              </div>
            </div>
          </div>
        </div>
        <button
          id="Button1"
          className="border-solid bg-[#50d755] flex flex-row ml-8 w-2/5 cursor-pointer items-start border-black border"
        >
          <div className="text-center text-3xl font-['iA_Writer_Mono_S'] uppercase text-white bg-[url(https://file.rendit.io/n/OAlGs0sEj7jNigQagGFL.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-full h-16 items-start my-0">
            Weiter
          </div>
        </button>
      </div>
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/a1uIrKCmVDd6JPloYqdl.svg"
    alt="Vector"
    className="w-56 h-64 origin-top-left rotate-[119deg] absolute top-[610.9210205078125px] left-[1416.48095703125px]"
  />
</div>



  )
}
export default Question3;