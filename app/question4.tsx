import Image from 'next/image'

const Question4 = () =>  {
  return (
    <div
  id="FrageRoot"
  className="relative flex flex-row justify-end w-full font-['iA_Writer_Mono_S'] items-start pt-56 px-16"
>
  <div
    id="AtomsColorsBlack"
    className="w-full h-[780px] bg-[#cccccc] absolute top-0 left-0 flex flex-col items-start"
  >
    <div
      id="AtomsColorsBlack1"
      className="bg-[#208207] relative flex flex-row w-full items-start pt-2 pl-[685px] pr-[624px]"
    >
      <div className="text-xl font-['Krona_One'] bg-[#acd464] flex flex-row w-16 h-10 items-start mt-px mb-2 pt-2 px-1 rounded">
        AEM
      </div>
    </div>
    <img
      src="https://file.rendit.io/n/qVA68DlVy5JoQHEufCeY.svg"
      alt="Group1"
      className="w-40 h-48 origin-top-left rotate-[-3.17deg] absolute top-[498.17462158203125px] left-[588px]"
    />
    <div className="relative flex flex-row gap-20 w-full items-start">
      <img
        src="https://file.rendit.io/n/Kksa2e3qlRkKwG3rg8bW.png"
        alt="Saasconceptcollage"
        id="Saasconceptcollage"
      />
      <div className="flex flex-col mt-12 gap-20 w-1/2 font-['iA_Writer_Mono_S'] items-start">
        <div className="flex flex-col gap-4 w-full items-start">
          <div
            id="Header"
            className="text-center text-5xl font-bold leading-[64px]"
          >
            Frage 4
          </div>
          <div id="Title" className="text-3xl ml-8 w-full">
            Welche Rolle spielt die Cloud-Computing-Technologie bei der
            Förderung von Green IT?
          </div>
        </div>
        <div className="flex flex-col gap-10 w-4/5 h-56 items-start mb-px ml-16">
          <div className="flex flex-row mb-px gap-4 w-3/4 items-start">
            <img
              src="https://file.rendit.io/n/VQbvy7rXXpjTvhdq0HmH.svg"
              alt="Icon3"
              id="Icon3"
              className="w-6"
            />
            <div id="SomethingGoesHere3" className="leading-[24px]">
              Sie trägt zur Energieeffizienz bei.
            </div>
          </div>
          <div className="flex flex-row gap-4 w-5/6 items-start">
            <img
              src="https://file.rendit.io/n/5CRbMnot4xqH4Ko0v8ij.svg"
              alt="Icon2"
              id="Icon2"
              className="w-6"
            />
            <div id="SomethingGoesHere2" className="leading-[24px]">
              Sie erhöht den Bedarf an physischen Servern.
            </div>
          </div>
          <div className="flex flex-col gap-10 w-full h-20 font-['iA_Writer_Mono_S'] items-start">
            <div className="flex flex-row gap-4 w-full items-start">
              <img
                src="https://file.rendit.io/n/d2DbngHhRSFQ5K9l3olH.svg"
                alt="Icon1"
                id="Icon1"
                className="w-6"
              />
              <div id="SomethingGoesHere1" className="leading-[24px]">
                Sie fördert den Einsatz von Einwegspeichermedien.
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/llSa0hkSPzVkSXS5DBMg.svg"
              alt="Icon"
              id="Icon"
              className="w-6"
            />
          </div>
        </div>
        <button
          id="Button1"
          className="border-solid bg-[#50d755] flex flex-row ml-8 w-1/2 cursor-pointer items-start border-black border"
        >
          <div className="text-center text-3xl font-['iA_Writer_Mono_S'] uppercase text-white bg-[url(https://file.rendit.io/n/VcDicGtmgC2mXakQ7U8x.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-full h-16 items-start my-0">
            Weiter
          </div>
        </button>
      </div>
    </div>
  </div>
  <div
    id="SomethingGoesHere"
    className="leading-[24px] relative mt-[318px] mb-56"
  >
    Sie führt zu einer Verringerung der Recyclingmöglichkeiten.
  </div>
</div>


  )
}
export default Question4;