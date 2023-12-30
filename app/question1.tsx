import Image from 'next/image'

const question1 = () => {
  return (
    <div id="FrageRoot" className="flex flex-row w-full items-start">
  <div
    id="AtomsColorsBlack"
    className="bg-[#cccccc] relative flex flex-col mb-1 w-full items-start"
  >
    <img
      src="https://file.rendit.io/n/ZQjmZlddrO9HPxS0t08r.svg"
      alt="Vector"
      className="w-32 h-[111px] origin-top-left rotate-[40.3deg] absolute top-16 left-[1244.6845703125px]"
    />
    <div
      id="AtomsColorsBlack1"
      className="bg-[#208207] relative flex flex-row w-full items-start pt-2 pl-[685px] pr-[624px]"
    >
      <div className="text-xl font-['Krona_One'] bg-[#acd464] flex flex-row w-16 h-10 items-start mt-px mb-2 pt-2 px-1 rounded">
        AEM
      </div>
    </div>
    <div className="relative flex flex-row gap-20 w-5/6 items-start">
      <img
        src="https://file.rendit.io/n/DvXntCccdSP0QU94K0k4.png"
        alt="AntrozetskySLIFIjvkunsplash"
      />
      <div className="flex flex-col mt-12 gap-20 w-2/5 font-['iA_Writer_Mono_S'] items-start">
        <div className="flex flex-col gap-4 w-full items-start">
          <div
            id="Header"
            className="text-center text-5xl font-bold leading-[64px]"
          >
            Frage 1
          </div>
          <div id="Title" className="text-3xl ml-8 w-full">
            Wie viele Smartphones werden jährlich weltweit hergestellt?
          </div>
        </div>
        <div className="flex flex-col gap-10 w-3/5 h-56 items-start mb-px ml-16">
          <div className="flex flex-row mb-px gap-4 w-full items-start">
            <img
              src="https://file.rendit.io/n/hll2LlIxTBUeClnwATUj.svg"
              alt="Icon3"
              id="Icon3"
              className="w-6"
            />
            <div id="SomethingGoesHere3" className="leading-[24px]">
              1.37 Milliarden Smartphones
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full items-start">
            <img
              src="https://file.rendit.io/n/wlK3ddanI99cv0nrKA9k.svg"
              alt="Icon2"
              id="Icon2"
              className="w-6"
            />
            <div id="SomethingGoesHere2" className="leading-[24px]">
              1.45 Milliarden Smartphones
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full h-20 font-['iA_Writer_Mono_S'] items-start">
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/dmXVZScekQkH6fmiZiIA.svg"
                alt="Icon1"
                id="Icon1"
                className="w-6"
              />
              <div id="SomethingGoesHere1" className="leading-[24px]">
                1.21 Milliarden
                {"  "}
                Smartphones
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/WoXWqzUH9q9tDcQSgCog.svg"
                alt="Icon"
                id="Icon"
                className="w-6"
              />
              <div id="SomethingGoesHere" className="leading-[24px]">
                1.98 Milliarden
                {"  "}
                Smartphones
              </div>
            </div>
          </div>
        </div>
        <button
          id="Button1"
          className="border-solid bg-[#50d755] flex flex-row ml-8 w-3/5 cursor-pointer items-start border-black border"
        >
          <div className="text-center text-3xl font-['iA_Writer_Mono_S'] uppercase text-white bg-[url(https://file.rendit.io/n/xbAjg9cMHOdidBZH3j0w.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-full h-16 items-start my-0">
            Weiter
          </div>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default question1;
