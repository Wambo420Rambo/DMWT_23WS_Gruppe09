import Image from 'next/image'

const Question5 = () =>  {
  return (
<div
  id="FrageRoot"
  className="relative flex flex-row w-full font-['iA_Writer_Mono_S'] items-start"
>
  <div
    id="AtomsColorsBlack"
    className="w-full h-[780px] bg-[#cccccc] absolute top-0 left-0 flex flex-col pb-16 gap-20 items-start"
  >
    <div className="relative flex flex-col gap-12 w-full items-start">
      <div
        id="AtomsColorsBlack1"
        className="bg-[#208207] flex flex-row w-full items-start pt-2 pl-[685px] pr-[624px]"
      >
        <div className="text-xl font-['Krona_One'] bg-[#acd464] flex flex-row w-16 h-10 items-start mt-px mb-2 pt-2 px-1 rounded">
          AEM
        </div>
      </div>
      <div className="flex flex-col ml-[703px] gap-4 w-2/5 font-['iA_Writer_Mono_S'] items-start">
        <div
          id="Header"
          className="text-center text-5xl font-bold leading-[64px]"
        >
          Frage 5
        </div>
        <div id="Title" className="text-3xl ml-8 w-full">
          Wie viele Smartphones werden jährlich weltweit hergestellt?
        </div>
      </div>
    </div>
    <div className="relative flex flex-col gap-10 w-1/4 h-56 items-start mb-px ml-[770px]">
      <div className="flex flex-row mb-px gap-4 w-full items-start">
        <img
          src="https://file.rendit.io/n/M50W6XeNy060grnESOqn.svg"
          alt="Icon3"
          id="Icon3"
          className="w-6"
        />
        <div id="SomethingGoesHere3" className="leading-[24px]">
          Reduzierung physischer Hardware
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full items-start">
        <img
          src="https://file.rendit.io/n/GCZP3j4YPrcnJy5eN1el.svg"
          alt="Icon2"
          id="Icon2"
          className="w-6"
        />
        <div id="SomethingGoesHere2" className="leading-[24px]">
          Erhöhung der Bildschirmhelligkeit
        </div>
      </div>
      <div className="flex flex-col gap-10 w-full h-20 font-['iA_Writer_Mono_S'] items-start">
        <div className="flex flex-row gap-4 w-5/6 items-start">
          <img
            src="https://file.rendit.io/n/IAmqvEPXk5seRoimDD58.svg"
            alt="Icon1"
            id="Icon1"
            className="w-6"
          />
          <div id="SomethingGoesHere1" className="leading-[24px]">
            Einsatz von Einweg-Batterien
          </div>
        </div>
        <div className="flex flex-row gap-4 w-full items-start">
          <img
            src="https://file.rendit.io/n/0Yz51rQfxgNyh6WbPpLZ.svg"
            alt="Icon"
            id="Icon"
            className="w-6"
          />
          <div id="SomethingGoesHere" className="leading-[24px]">
            Verwendung von Papierdokumenten
          </div>
        </div>
      </div>
    </div>
    <button
      id="Button1"
      className="border-solid bg-[#50d755] relative flex flex-row ml-[735px] w-1/5 cursor-pointer items-start border-black border"
    >
      <div className="text-center text-3xl font-['iA_Writer_Mono_S'] uppercase text-white bg-[url(https://file.rendit.io/n/8h71pEBpBeTdFeYFu2jE.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-full h-16 items-start my-0">
        Ergebnis
      </div>
    </button>
    <img
      src="https://file.rendit.io/n/ZQjmZlddrO9HPxS0t08r.svg"
      alt="Vector"
      className="w-32 h-[111px] origin-top-left rotate-[40.3deg] absolute top-10 left-[1220.6845703125px]"
    />
  </div>
  <img
    src="https://file.rendit.io/n/Kw8WY5uBVRxWwbwES1qQ.png"
    alt="Rechenzentrumrealadobestockneu"
    className="relative mt-16"
  />
</div>



  )
}
export default Question5;